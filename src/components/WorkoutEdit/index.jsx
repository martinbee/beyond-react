import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import Loading from '../Shared/Loading';
import withInitialData from '../utilities/withInitialData';
import Display from './Display';

// hardcode for now. Once routing is in, remove
const dataUrl = '/users/5a327e942e7a8341abab1a22/workouts/5a327e942e7a8341abab1a24';

class WorkoutEdit extends Component {
  state = {
    workout: null,
  }

  componentWillReceiveProps({ data }) {
    if (!isEmpty(data)) this.setState({ workout: data });
  }

  render() {
    const {
      workout,
    } = this.state;

    if (isEmpty(workout)) return <Loading />;

    return <Display />;
  }
}

export default withInitialData(WorkoutEdit, dataUrl);
