// The reducer modifies our data layer based on dispatched action
const ListsReducer = (state, action) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        lists: [],
        iseFetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCESS":
      return {
        lists: action.payload,
        iseFetching: false,
        error: false,
      };
    case "GET_LISTS_FAILURE":
      return {
        lists: [],
        iseFetching: false,
        error: true,
      };
    case "CREATE_LIST_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "CREATE_LIST_SUCCESS":
      return {
        lists: [...state.lists, action.payload],
        iseFetching: false,
        error: false,
      };
    case "CREATE_LIST_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };
    case "UPDATE_LIST_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "UPDATE_LIST_SUCCESS":
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        iseFetching: false,
        error: false,
      };
    case "UPDATE_LIST_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };
    case "DELETE_LIST_START":
      return {
        ...state,
        iseFetching: true,
        error: false,
      };
    case "DELETE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        iseFetching: false,
        error: false,
      };
    case "DELETE_LIST_FAILURE":
      return {
        ...state,
        iseFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default ListsReducer;
