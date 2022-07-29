import omit from "lodash/omit";
import axios from "axios";
export default {
  name: "el-table-plus",
  props: {
    columns: { type: Array, default: () => [] }, // 列配置
    // 翻页条设置
    pagination: { type: [Object, Boolean], default: false },
    // 额外参数
    params: { type: Object, default: () => {} },
    // 数据请求
    service: { type: Function, required: true },
  },
  data() {
    return {
      pageSize: (this.pagination && this.pagination.pageSize) || 20,
      pageNum: (this.pagination && this.pagination.pageNum) || 1,
      tableWrap: null,
      $data: [],
      loading: false,
      total: 0,
      cancelToken: axios.cancelToken,
      cancelSourceList: [],
    };
  },
  mounted() {
    const table = this.$refs.table;
    this.tableWrap = table.bodyWrapper;

    table.bodyWrapper.addEventListener("scroll", this.tableScroll);
    this.$once("hook:beforeDestroy", () => {
      this.tableWrap.removeEventListener("scroll", this.tableScroll);
    });
  },
  methods: {
    tableScroll(e) {
      e.preventDefault();
      this.$emit("scroll", e);
    },
    // 成功或失败移除请求
    removeCancelSource(_cancelSource) {
      if (_cancelSource) {
        const index = this.cancelSourceList.indexOf(_cancelSource);
        this.cancelSourceList.splice(index, 1);
      }
    },
    // 取消所有请求
    cancelAllRequest(reason) {
      for (const _cancelSource of this.cancelSourceList) {
        _cancelSource.cancel(reason);
      }
      this.cancelAllRequest = [];
    },
    // 添加取消请求
    pushCancelSource(_cancelSource) {
      this.cancelSourceList.push(_cancelSource);
    },
    // 请求接口地址
    doSearch() {
      this.cancelSourceList();
      const query = Object.assign(
        { pageSize: this.pagesize, pageNum: this.pageNum },
        this.params
      );
      this.loading = true;
      // cancelToken
      const promise = this.service;
      // config cancelToken ?
      const _source = this.cancelToken.source();
      this.pushCancelSource(_source);
      promise(query, { cancelToken: _source.token })
        .then((res) => {
          const { list, total } = res;
          this.$data = list;
          this.total = total;
        })
        .catch(() => {
          this.$data = [];
          this.total = 0;
        })
        .finally(() => {
          this.loading = false;
          this.removeCancelSource(_source);
        });
    },
    refresh() {
      this.$total = 0;
      this.pagesize = 10;
      this.pageNum = 1;
    },
    pageSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.emitPageChangeEvent();
    },
    currentChange(pageNum) {
      this.pageNum = pageNum;
      this.emitPageChangeEvent();
    },
    emitPageChangeEvent() {
      this.$emit("page-change", {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
      });
      this.doSearch();
    },
  },
  render(h) {
    const tableListeners = omit(this.$listeners, ["page-change"]);

    const getCellValue = (column, row) =>
      column.prop.split(".").reduce((obj, cur) => obj[cur], row);

    const renderColumns = (columns) =>
      columns
        .filter((i) => !i.hidden)
        .map((c) => {
          const options = Object.assign({ scopedSlots: {}, prop: "" }, c);

          const scopedSlots = {
            default: ({ row, column: elColumn, $index }) => {
              const column = Object.assign({}, options, elColumn);

              // 支持链式. 如：xxx.xxx
              const defaultValue = getCellValue(column, row);

              // 自定义组件
              column.customRender =
                column.customRender ||
                this.$scopedSlots[column.scopedSlots.customRender];
              if (column.customRender) {
                return column.customRender(
                  defaultValue,
                  row,
                  column,
                  $index,
                  h
                );
              }
              // 兼容element-ui formatter属性
              if (column.formatter) {
                return column.formatter(row, column, defaultValue, $index);
              }

              return defaultValue;
            },
            header: ({ column: elColumn, $index }) => {
              const column = Object.assign({}, options, elColumn);

              column.customTitle =
                column.customTitle ||
                this.$scopedSlots[column.scopedSlots.customTitle];
              if (column.customTitle) {
                return column.customTitle(elColumn, $index);
              }

              return column.label;
            },
          };

          return (
            <el-table-column
              key={options.prop}
              {...{ props: options }}
              scopedSlots={scopedSlots}
            />
          );
        });

    return (
      <div class="el-table-plus" v-loading={this.loading}>
        <el-table
          ref="table"
          data={this.$data}
          {...{ props: this.$attrs, on: tableListeners }}
        >
          {renderColumns(this.columns)}
        </el-table>
        {this.pagination && (
          <el-pagination
            {...{ props: this.pagination }}
            total={this.total}
            on-size-change={this.pageSizeChange}
            on-current-change={this.currentChange}
          />
        )}
      </div>
    );
  },
};
