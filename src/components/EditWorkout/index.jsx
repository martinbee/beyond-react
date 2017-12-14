import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import {
  get,
} from '../utilities/httpHandlers';
import Loading from '../Shared/Loading';
import Display from './Display';

// hardcode for now. Once routing is in, remove
const dataUrl = '/users/5a327e942e7a8341abab1a22/workouts/5a327e942e7a8341abab1a24';

// this needs to actually be getNewWorkout which should look at user and create
// an appropriate workout
const newWorkout = { trainingMax: 1 };

const isUpdate = true;

export default class EditWorkout extends Component {
  state = {
    workout: null,
  }

  componentWillMount() {
    if (!isUpdate) this.setState({ workout: newWorkout });
  }

  componentDidMount() {
    if (isUpdate) {
      const successCallback = ({ data }) => this.setState({ workout: data });
      const errorCallback = error => console.log(error);

      get(dataUrl, successCallback, errorCallback);
    }
  }

  updateWorkout = (key, value) => {
    const updatedWorkout = ({
      ...this.state.workout,
      [key]: value,
    });

    this.setState({ workout: updatedWorkout });
  }

  render() {
    const {
      workout,
    } = this.state;

    if (isEmpty(workout)) return <Loading />;

    const {
      liftType,
      trainingMax,
      mobilityWork,
      exercises,
    } = workout;

    const displayProps = {
      liftType,
      trainingMax,
      mobilityWork,
      exercises,
      updateWorkout: this.updateWorkout,
    };

    return <Display {...displayProps} />;
  }
}
