import * as React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', loading: true };
  }

  componentDidMount() {

    this.setState({ loading: false });
    // fetch here
    // setState
    // re-render
  }

  render() {

    console.log('re-render');
    return ()
  }
}
