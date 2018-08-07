import React from 'react';

const Topic = ({ this.props.match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic
