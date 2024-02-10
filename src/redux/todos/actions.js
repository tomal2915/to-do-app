import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payloas: todoText,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payloas: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payloas: todoId,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payloas: todoId,
  };
};
