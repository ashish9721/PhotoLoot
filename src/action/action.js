// import { actionName } from "../utils/actionName";
// export const incrementCounter = ()=>{
//   return(dispatch, getState)=>{
//     const { counter } = getState().countereducer;
//     dispatch({type: 'increment', payload:{counter: counter}})
//   }
// }


export const cardData = (card)=>{
  return(dispatch)=>{
    dispatch(updateData(card))
  }
}

export const updateState = (key, value)=>{
  return(dispatch)=>{
    dispatch(updateData({[key]: value}))
  }
}

function updateData(data){
  return {type: 'cardReducer', payload: data }
}