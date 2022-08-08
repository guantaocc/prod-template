/**
 * 获取对象链式的值
 * @param key "maps.age"
 * @param row { maps: { age: 11 }}
 * @return example: 11
 */
export const getChainValue = (key: string, row: any) => {
  return key.split(".").reduce((obj, cur) => {
    return obj[cur];
  }, row);
};
