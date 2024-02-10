import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payloas: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payloas: status
  };
};
