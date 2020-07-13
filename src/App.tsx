import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterAction";

type Props = {
  count: number,
} & {
  increment: Function,
} & {
  decrement: Function,
}

class App extends Component<Props> {
  render() {
    return (
      <div>
        Clicked: {this.props.count } times.
        <button onClick={ () => this.props.increment() }>+</button>
        <button onClick={ () => this.props.decrement() }>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: number) => {
  return {
    count: state,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment:() => dispatch(increment()),
    decrement:() => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
