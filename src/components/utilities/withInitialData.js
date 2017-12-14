import React, { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';
import {
  get,
} from './httpHandlers';

// Fix component name such that it says WrappedComponent with initial data
export default function withInitialData(WrappedComponent, dataUrl) {
  return class extends Component {
    static displayName = `withInitialData${getDisplayName(WrappedComponent)}`;

    state = {
      data: {},
    };

    componentDidMount() {
      const successCallback = ({ data }) => this.setState({ data });
      const errorCallback = (error => console.log(error));

      get(dataUrl, successCallback, errorCallback);
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
