import React, { Component } from 'react';
import './App.css';
import SimpleTable from './components/Table';
import DatePicker from './components/DatePicker';
import Chart from './components/Chart';

class App extends Component {
  
  state = { 
    date: '2019-04-18'
  }
  
  handleDate = (e) => {
    this.setState({ date: e.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Курс валют в Украине</h1>
        <DatePicker onHandleDate={this.handleDate.bind(this)} date={this.state.date} />
        <SimpleTable date={this.state.date} />
        <h1>График изменения курса валют с 1996 года</h1>
        <Chart />
      </div>
    );
  }
}

export default App;
