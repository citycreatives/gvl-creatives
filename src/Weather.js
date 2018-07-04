import React, { Component } from 'react';
import './App.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentWillMount() {
    fetch('https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/47c05ceaaa6e57c1fbc6dee669a55070/34.844138,-82.394418')
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({
        temperature: data.currently.temperature,
        summary: data.currently.summary
      });
    })
    .catch(error => console.error(error));
  }

  render() {
    console.log(this.state);
    if (this.state.temperature && this.state.summary)
      return <div style={{textAlign: 'right'}}>{Math.round(this.state.temperature)}°F in Greenville, SC</div>;
    return null;
  }
}

export default Weather;
