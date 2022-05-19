/* eslint-disable no-console */

const init = ({
  url,
  reconnectTimeout = 5000,
} = {}) => {
  let ws;
  let handlers = {};

  const onMessage = (e) => {
    let data;
    try {
      data = JSON.parse(e.data);
    } catch (err) {
      console.error('Failed to parse Websocket JSON: ', err.message);
      return;
    }
    if (handlers[data.type]) {
      handlers[data.type].forEach((h) => h(data.payload));
    }
  };

  const start = () => {
    let wsURL = url;
    if (!wsURL) {
      const protocol = document.location.protocol.replace(/http(s?):/, 'ws$1');
      wsURL = `${protocol}://${document.location.host}`;
    }
    ws = new WebSocket(wsURL);

    ws.onmessage = onMessage;
    ws.onclose = () => {
      // Try to reconnect
      setTimeout(() => {
        start();
      }, reconnectTimeout);
    };
  };

  const addListener = (type, handler) => {
    handlers[type] = [...(handlers[type] || []), handler];
  };

  const destroy = () => {
    handlers = {};
    ws.close();
  };

  const removeListener = (type, handler) => {
    handlers[type] = handlers[type] && handlers[type].filter((h) => h !== handler);
  };

  const removeAllListeners = (type) => {
    handlers[type] = [];
  };

  start();

  return {
    addListener,
    destroy,
    removeListener,
    removeAllListeners,
  };
};

export default init;
