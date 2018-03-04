const actions = (() => {
  const r = {};
  ['CREATE_STATE_FROM_DATA', 'UPDATE_FORM_VALUE'].forEach((k) => {
    r[k] = k;
  });
  return r;
})();

export default actions;
