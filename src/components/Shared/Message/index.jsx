import React from 'react';
import {
  bool,
  oneOfType,
  string,
  element,
} from 'prop-types';
import classNames from 'classnames';

import './styles.css';

function Message({ isError, content }) {
  const messageClasses = classNames(
    'app-message',
    { error: isError },
  );

  return (
    <p className={messageClasses}>{content}</p>
  );
}

Message.propTypes = {
  isError: bool,
  content: oneOfType([string, element]),
};

export default Message;
