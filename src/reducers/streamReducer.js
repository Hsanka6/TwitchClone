import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const streamReducer = (state={}, action ) => {
  switch(action.type){
    case CREATE_STREAM:
      return {... state, [action.payload.id]: action.payload};
    case FETCH_STREAM:
      return {... state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {... state, [action.payload.id]: action.payload};
    default:
      return state;
  }
};
