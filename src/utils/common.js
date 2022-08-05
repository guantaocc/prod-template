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

/**
 *
 * @param {Array[bytes]} blobStream 文件流
 * @param {String} filename
 */
export const downloadBlob = (blobStream, filename) => {
  if (window.navigator.msSaveBlob) {
    navigator.msSaveBlob(blobStream, filename);
  } else {
    const blob = new Blob([blobStream]);
    const href = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.download = filename;
    a.href = href;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(href);
    }, 100);
  }
};
