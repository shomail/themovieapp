export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'; // action type constants

// action creator is just a function which returns an object

// thunk is a function which returns a function
export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}
