import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import {
  bool,
  string,
} from 'prop-types';

import {
  get,
} from '../utilities/httpHandlers';
import Message from '../Shared/Message';
import ErrorHandler from '../Shared/ErrorHandler';
import Loading from '../Shared/Loading';
import Display from './Display';

// this needs to actually be getNewWorkout which should look at user and create
// an appropriate workout
const newWorkout = { trainingMax: 1 };

// weird users url issue
export default class EditWorkout extends Component {
  static propTypes = {
    isUpdate: bool,
    dataUrl: string,
  };

  state = {
    workout: null,
    error: null,
    dataFetched: false,
  };

  componentWillMount() {
    if (!this.props.isUpdate) this.setState({ workout: newWorkout });
  }

  componentDidMount() {
    const {
      isUpdate,
      dataUrl,
    } = this.props;

    if (isUpdate) {
      const successCallback = ({ data }) => {
        this.setState({ workout: data, dataFetched: true });
      };

      const errorCallback = error => this.setState({ error });

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
      error,
      dataFetched,
    } = this.state;

    const noWorkout = isEmpty(workout);

    if (error) return <ErrorHandler error={error} />;
    if (dataFetched && noWorkout) return <Message content={'No workout data found.'} />;
    if (noWorkout) return <Loading />;

    const {
      liftType,
      trainingMax,
      mobilityWork,
      exercises,
      updatedAt,
    } = workout;

    const displayProps = {
      liftType,
      trainingMax,
      mobilityWork,
      exercises,
      updatedAt: new Date(updatedAt),
      updateWorkout: this.updateWorkout,
    };

    return <Display {...displayProps} />;
  }
}
