import {combineReducers} from 'redux';


const Tempdata = [{txt1: 'check', txt2: '', price: ''}];
const HomeTempdata = [];
export const cardReducer = (state = Tempdata, action) => {
  switch (action.type) {
    case 'cardReducer':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
export const homeReducer = (state = HomeTempdata, action) => {
    switch(action.type){
        case 'homeReducer':
            return{...state, ...action.payload};
            default:
                return state;
    }
};
export const reducer = combineReducers({
  cardReducer: cardReducer,
  homeReducer: homeReducer,
});