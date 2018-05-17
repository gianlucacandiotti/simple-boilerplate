import React, { PureComponent } from 'react';

class HelloWorld extends PureComponent {
  componentDidMount() {
    console.log(`env variable: ${process.env.REACT_APP_API_URL}`);
  }

  render() {
    return <p>Hello World!</p>;
  }
}

export default HelloWorld;
