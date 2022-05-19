import { useEffect, useMemo, useState } from 'react';

import fetch, { API_URL_WS } from 'services/api';
import initWS from 'services/ws';

const SCHEDULE_UPDATED = 'SCHEDULE_UPDATED';
const MAIN_CHANNEL_ID = 1;

const useCurrentAndSchedule = (data) => {
  const res = useMemo(() => {
    const prev = data ? data.prev : [];
    const next = data ? data.next : [];

    const currentList = (data && data.current) ? data.current
      .filter((i) => prev.every((p) => p.id !== i.id) && next.every((n) => n.id !== i.id)) : [];

    const current = currentList[0] || { id: 0, author: 'Радио «Орфей»', details: [] };
    const hasCurrent = currentList.length > 0;

    return {
      current,
      schedule: [
        ...prev.slice(-2),
        ...(currentList[0] ? [currentList[0]] : []),
        ...next.slice(0, hasCurrent ? 4 : 5),
      ],
    };
  }, [data]);
  return res;
};


const usePlayerSchedule = ({ channelId, channelName }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = initWS({ url: API_URL_WS });
    const listener = (d) => {
      setData(d);
      setError(null);
    };
    ws.addListener(SCHEDULE_UPDATED, listener);

    fetch('/schedule/current')
      .then((res) => {
        setData(res);
      })
      .catch(() => {});

    return () => {
      ws.destroy();
    };
  }, [setData, setError]);

  const { current, schedule } = useCurrentAndSchedule(data);
  return useMemo(() => ({
    error,
    current: channelId === MAIN_CHANNEL_ID ? current : {
      id: `channel-${channelId}`,
      author: channelName,
      details: [],
    },
    schedule: channelId === MAIN_CHANNEL_ID ? schedule : [],
  }), [current, schedule, error, channelId, channelName]);
};

export default usePlayerSchedule;
