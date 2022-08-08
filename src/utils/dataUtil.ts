/**
 判断是否为对象
 **/
export const isObject = (value: Object) => {
  const type = typeof value;
  return value !== null && type === "object";
};

export const isArray = (arr: Array<any>) => {
  return Object.prototype.toString.call(arr) !== "[object Array]";
};

/**
 * 索引类型推导
 */
export const deepClone = (origin: Array<any> | Object) => {
  if (!isObject(origin)) return origin;
  const target = isArray(origin) ? [] : {};
  for (const prop in origin) {
    // eslint-disable-next-line no-prototype-builtins
    if (origin.hasOwnProperty(prop)) {
      const value = origin[prop];
      if (isObject(value)) {
        target[prop] = deepClone(value);
      } else {
        target[prop] = value;
      }
    }
  }
  return target;
};

/* Echarts图表字体、间距自适应 */
export const fitChartSize = (size: number, defalteWidth = 1920) => {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return size;
  const scale = clientWidth / defalteWidth;
  return Number((size * scale).toFixed(3));
};

export const fitChartSizeVh = (size: number, defalteHeight = 1976) => {
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  if (!clientHeight) return size;
  const scale = clientHeight / defalteHeight;
  return Number((size * scale).toFixed(3));
};
