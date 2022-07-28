1. props

```
loading boolean
data: []  列表数据
columns: []
pagination: {}
total: 0 翻页器条数
```

2. columns

```
label: 列名称
prop: 数据字段
hidden: 是否隐藏
customRender: 自定义列数据渲染 (value, row, column, $index, h)
customTitle: 自定义头部渲染
scopedSlots: header, render
```
