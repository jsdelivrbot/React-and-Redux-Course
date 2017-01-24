import { FETCH_WEATHER } from '../actions/FETCH_WEATHER'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //dont manipulate state with state.push(), use concat to create
      //a new array
      
      //return state.concat([action.payload.data]); es6 below
      return [action.payload.data, ...state];
  }

  return state;
}
