import {combineReducers} from 'redux';

const Tempdata = [
    {txt1: '', txt2: '', price: ''}
  ];
  
  export const cardReducer =(state=Tempdata,action)=>{
      switch(action.type){
        case 'cardReducer':
            return {...state, ...action.payload}
  
        default:
          return state;
      }
  }
  export const reducer = combineReducers({
    cardReducer: cardReducer
  });
  
  
