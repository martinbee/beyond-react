import React, { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';
import axios from 'axios';

// Add to config file or constants
const BASE_URL = 'http://localhost:3000';

// Fix component name such that it says WrappedComponent with initial data
export default function withInitialData(WrappedComponent, dataUrl) {
  return class extends Component {
    static displayName = `withInitialData${getDisplayName(WrappedComponent)}`;

    state = {
      data: {},
    };

    componentDidMount() {
      axios.get(BASE_URL + dataUrl)
        .then(({ data }) => this.setState({ data }))
        .catch(error => console.log(error));
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
