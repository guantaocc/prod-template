/**
 * websocket
 * 断线重连问题
 */

let Socket: WebSocket | undefined | null;
let setIntervalSocketPush: any = null;
let reconneturl: string = "";

const log = (string: string) => {
  return `[socket]: ${string}`;
};

// customEvent polyfill
(function () {
  function CustomEvent(event: string, params: any) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined,
    };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/** 建立连接 */
export const createSocket = (url: string) => {
  reconneturl = url;
  Socket && Socket.close();
  if (!Socket) {
    log("建立websocket连接");
    Socket = new WebSocket(url);
    Socket.onopen = onopenWS;
    Socket.onmessage = onmessageWS;
    Socket.onerror = onerrorWS;
    Socket.onclose = oncloseWS;
  } else {
    console.log("websocket已连接");
  }
};

/** 打开WS之后发送心跳 */
const onopenWS = () => {
  sendPing();
};

/** 连接失败重连 */
const onerrorWS = () => {
  Socket && Socket.close();
  clearInterval(setIntervalSocketPush);
  log("连接失败重连中");
  if (Socket && Socket.readyState !== 3) {
    Socket = null;
    createSocket(reconneturl);
  }
};

/** 断开重连 */
const oncloseWS = () => {
  clearInterval(setIntervalSocketPush);
  console.log("websocket已断开....正在尝试重连");
  if (Socket && Socket.readyState !== 2) {
    Socket = null;
    createSocket(reconneturl);
  }
};

/** WS数据接收统一处理 */
const onmessageWS = (e) => {
  // 自定义事件
  window.dispatchEvent(
    new CustomEvent("onmessageWS", {
      detail: {
        data: e.data,
      },
    })
  );
};

/**
 * 发送心跳，避免断线
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 15000, ping = "ping") => {
  clearInterval(setIntervalSocketPush);
  Socket && Socket.send(ping);
  setIntervalSocketPush = setInterval(() => {
    Socket && Socket.send(ping);
  }, time);
};
