import {
  ADD_CURRENT_VALUTAS_PRICE,
  ADD_NEW_CONVERSATION_TO_STORE,
  CLEAR_HISTORY,
} from '../actions/converterActions'

const initialState = {
  currentValutasPrice: {},
  oldConversations: [],
  globalLoading: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_VALUTAS_PRICE: {
      return {
        ...state,
        currentValutasPrice: action.payload,
      }
    }

    case ADD_NEW_CONVERSATION_TO_STORE: {
      return {
        ...state,
        oldConversations: [...state.oldConversations, action.payload],
      }
    }

    case CLEAR_HISTORY: {
      return {
        ...state,
        oldConversations: [],
      }
    }
    default:
      return state
  }
}

export default rootReducer
