/**
 * 浏览器API 工具类函数
 */

/**
 *
 * @returns 文档宽度
 */
export const getDocumentWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};
