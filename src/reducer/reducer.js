import {combineReducers} from 'redux';
import {Tempdata,HomeTempdata,imageTempData,faqData} from '../Constants/constData'

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
export const faqReducer = (state = {faqData:faqData}, action) => {
  switch (action.type) {
    case 'faqReducer':
      return {...faqData, ...action.payload};
    default:
      return state;
  }
};
export const reducer = combineReducers({
  cardReducer: cardReducer,
  homeReducer: homeReducer,
  galleryReducer: galleryReducer,
  faqReducer: faqReducer,

});
