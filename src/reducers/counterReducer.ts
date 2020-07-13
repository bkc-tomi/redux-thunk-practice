const initState:number = 0;

export type counterActionType = {
  type: "INCREMENT",
} | {
  type: "DECREMENT",
}

const counterReducer = (state:number = initState, action: counterActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;