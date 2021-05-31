import { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {n1: 0, n2: 0, result: 0}
    this.sum = this.sum.bind(this)
  }

  sum() {
    this.setState({ result: this.state.n1 + this.state.n2 })
  }

  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <input type="number" value={this.state.n1} onChange={e => this.setState({n1: +e.target.value})} />
        <input type="number" value={this.state.n2} onChange={e => this.setState({n2: +e.target.value})} />
        <button onClick={this.sum}>+</button>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
