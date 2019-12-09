export const cardData = card => {
  return dispatch => {
    // dispatch(updateData('cardReducer',card))
    dispatch(dataUpdate('cardReducer', 'Tempdata', card));
  };
};
export const homeData = data => {
  return dispatch => {
    // dispatch(updateData('homeReducer',data))
    dispatch(dataUpdate('homeReducer', 'HomeTempdata', data));
  };
};

export const updateState = (key, value) => {
  return dispatch => {
    dispatch(updateData({[key]: value}));
  };
};

function dataUpdate(actionType, key, data) {
  return {type: actionType, payload: {[key]: data}};
}
