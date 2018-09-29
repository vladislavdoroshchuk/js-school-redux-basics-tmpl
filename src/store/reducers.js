import { SET_NAME } from './action-types'

export const intialValue = 0;

export const intitialState = '';

export const nameReducer = (state = intitialState, { type, payload }) => (
  type === SET_NAME ? payload : state
);

export const counterReducer = (state = intialValue, { type, value }) => (
  type === 'value' ? value : state
);

export const isStudentReducer = (state = intialValue, { type, value }) => (
  type === 'isStudent' ? value ? "Student " : "" : state
);
