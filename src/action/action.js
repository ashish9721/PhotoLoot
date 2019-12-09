
 export const cardData = (card)=>{
  return(dispatch)=>{
    dispatch(updateData('cardReducer',card))
  }
}
export const homeData= (data)=>{
    return(dispatch)=>{
        dispatch(updateData('homeReducer',data))
      }
}

export const updateState = (key, value)=>{
  return(dispatch)=>{
    dispatch(updateData({[key]: value}))
  }
}

function updateData(actionType,data){
  return {type: actionType, payload: {HomeTempdata: data }}
}

