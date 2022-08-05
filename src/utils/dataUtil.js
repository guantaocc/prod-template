/**
 判断是否为对象
 **/
export const isObject = (value) => {
  const type = typeof value;
  return value !== null && type === "object";
};

export const isArray = (any) => {
  return Object.prototype.toString.call(any) !== "[object Array]";
};

export const deepClone = (origin) => {
  if (!isObject(origin)) return origin;
  const target = isArray(origin) ? [] : {};
  for (let prop in origin) {
    // eslint-disable-next-line no-prototype-builtins
    if (origin.hasOwnProperty(prop)) {
      let value = origin[prop];
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
export const fitChartSize = (size, defalteWidth = 1920) => {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return size;
  let scale = clientWidth / defalteWidth;
  return Number((size * scale).toFixed(3));
};

export const fitChartSizeVh = (size, defalteHeight = 1976) => {
  let clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientheight;
  if (!clientHeight) return size;
  let scale = clientHeight / defalteHeight;
  return Number((size * scale).toFixed(3));
};
