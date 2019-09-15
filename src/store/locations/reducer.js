import * as types from "./constants";

const initialState = {
  all: [],
  selectedLocation: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_LOCATIONS_PENDING:
    case types.ADD_LOCATION_PENDING:
    case types.REMOVE_LOCATION_PENDING:
    case types.EDIT_LOCATION_PENDING:
    case types.SELECT_LOCATION_PENDING:
      return state;

    case types.FETCH_ALL_LOCATIONS_FAILED:
    case types.ADD_LOCATION_FAILED:
    case types.REMOVE_LOCATION_FAILED:
    case types.EDIT_LOCATION_FAILED:
    case types.SELECT_LOCATION_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_LOCATION_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_LOCATION_SUCCESS:
      return {
        ...state,
        all: state.all.filter(location => location.id !== action.payload)
      };

    case types.EDIT_LOCATION_SUCCESS:
      return {
        ...state,
        all: [
          action.payload,
          ...state.all.filter(location => location.id !== action.payload.id)
        ]
      };

    case types.SELECT_LOCATION_SUCCESS:
      return {
        ...state,
        selectedLocation: action.payload
      };

    default:
      return state;
  }
};
