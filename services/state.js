import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const SETTINGS_DEBOUNCE_WAIT = 200;

const load = (key, fallback) => {
  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch (er) {
    return fallback;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const usePersistentState = (initialValue, {
  key,
  debounceTimeout = SETTINGS_DEBOUNCE_WAIT,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(load(`o-${key}`, initialValue));
  }, [initialValue, key]);

  const saveValue = useCallback(debounce((v) => {
    window.localStorage.setItem(`o-${key}`, JSON.stringify(v));
  }, debounceTimeout), []);

  const set = useCallback((v) => {
    setValue((prev) => {
      const next = typeof v === 'function' ? v(prev) : v;
      saveValue(next);
      return next;
    });
  }, [saveValue]);

  return [value, set];
};
