import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  originalCounters = [...this.state.counters];

  handleIncrement = (counter) => {
    
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
 
    counters[index] = {...counter};

    counters[index].value++;

    this.setState({counters});
  }

  handleDecrement = (counter) => {

    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
 
    counters[index] = {...counter};

    counters[index].value--;

    this.setState({counters});
  }


  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.originalCounters];
    counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters onIncrement={this.handleIncrement} onReset={this.handleReset}
            onDelete={this.handleDelete} counters={this.state.counters}
            onDecrement={this.handleDecrement}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
