import { colorChanged, statusChanged } from "../actions.js";
import initialState from "./initialState.js";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case colorChanged: {
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            color: [...state.color, color],
          };
        case "removed":
          return {
            ...state,
            color: state.color.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    }
    // const { color, changeType } = action.payload;
    // let newColor = [];
    // if (changeType === "added") {
    //     newColor = [...state.color, color];
    // } else {
    //     newColor = state.color.filter((c) => c !== color);
    // }
    // return {
    //     ...state,
    //     color: newColor
    // };
    case statusChanged:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
