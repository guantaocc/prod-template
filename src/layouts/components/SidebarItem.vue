<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': !isNest }"
        @click="toPage(resolvePath(onlyOneChild.path))"
      >
        <item
          :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          :title="onlyOneChild.meta.title"
        />
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "SidebarItem",
  components: {
    Item,
  },
  props: {
    item: { type: Object, default: () => {} },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      return this.basePath + "/" + routePath;
    },
    toPage(path) {
      this.$router.push({
        path: path,
      });
    },
  },
};
</script>

<style></style>
