import React from 'react';

function ProjectRow({props}) {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectRow;