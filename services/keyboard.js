// eslint-disable-next-line import/prefer-default-export
export const onEnterOrSpacePress = (handler) => (e) => {
  if (e.key === 'Enter' || e.key === 'Space') {
    handler(e);
  }
};
