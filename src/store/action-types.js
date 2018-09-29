export const SET_NAME = 'set-name';

export const updateAge = ( value ) => ({
  type: 'value', value
});

export const updateIsStudent = ( value ) => ({
  type: 'isStudent', value
});

export const setName = name => ({
  type: SET_NAME, payload: name
});