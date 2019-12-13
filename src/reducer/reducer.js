import {combineReducers} from 'redux';
import {Tempdata,HomeTempdata,imageTempData,faqData,signUpData} from '../Constants/constData'

export const cardReducer = (state = Tempdata, action) => {
  switch (action.type) {
    case 'cardReducer':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
export const homeReducer = (state = HomeTempdata, action) => {
  switch (action.type) {
    case 'homeReducer':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export const galleryReducer = (
  state = {imageTempData: imageTempData},
  action,
) => {
  switch (action.type) {
    case 'galleryReducer':
      return {...imageTempData, ...action.payload};
    default:
      return state;
  }
};
export const faqReducer = (state = {faqData: faqData}, action) => {
  switch (action.type) {
    case 'faqReducer':
      return {...faqData, ...action.payload};
    default:
      return state;
  }
};

export const signingReducer = (state = signUpData, action) => {
  switch (action.type) {
    case 'name':
    case 'userName':
    case 'email':
    case 'password':
      return updateName(state, action);
    default:
      return {...state};
  }
};

/**
 * Test
 */
const updateName = (currentState, action) => {
  let newState = currentState;
  const {type, payload} = action;
  newState[0][type] = payload;
  return {...newState};
};

export const reducer = combineReducers({
  cardReducer: cardReducer,
  homeReducer: homeReducer,
  galleryReducer: galleryReducer,
  faqReducer: faqReducer,
  signingReducer: signingReducer,
});
