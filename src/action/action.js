export const cardData = card => {
  return dispatch => {
    dispatch(dataUpdate('cardReducer', 'Tempdata', card));
  };
};
export const homeData = data => {
  return dispatch => {
    dispatch(dataUpdate('homeReducer', 'HomeTempdata', data));
  };
};
export const galleryData = data => {
  return dispatch => {
    dispatch(dataUpdate('galleryReducer', 'imageTempData', data));
  };
};
export const faqDataList = data => {
  return dispatch => {
    dispatch(dataUpdate('faqReducer', 'faqData', data));
  };
};
export const signUpDataList = data => {
  return dispatch => {
    dispatch(dataUpdate('signingReducer', 'signUpData', data));
  };
};

export const updateState = (key, value) => {
  return dispatch => {
    // dispatch(updateData({[key]: value}));
    dispatch(updateData(key, value));
  };
};

function updateData(key, value) {
  return {type: key, payload: value};
}

function dataUpdate(actionType, key, data) {
  return {type: actionType, payload: {[key]: data}};
}
