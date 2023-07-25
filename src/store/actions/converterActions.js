export const ADD_CURRENT_VALUTAS_PRICE = 'ADD_CURRENT_VALUTAS_PRICE'
export const ADD_NEW_CONVERSATION_TO_STORE = 'REMOVE_TODO_ITEM'
export const CLEAR_HISTORY = 'CLEAR_HISTORY'

export const addCurrentValutasPrice = (payload) => {
  return {type: ADD_CURRENT_VALUTAS_PRICE, payload}
}

export const AddNewConversationToStore = (payload) => {
  return {type: ADD_NEW_CONVERSATION_TO_STORE, payload}
}

export const ClearHistory = () => {
  return {type: CLEAR_HISTORY}
}
