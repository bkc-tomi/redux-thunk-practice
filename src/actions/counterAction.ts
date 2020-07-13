export function increment() {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch({type: "INCREMENT"});
    }, 2000);
  };
}

export function decrement() {
  return {type: "DECREMENT"};
}