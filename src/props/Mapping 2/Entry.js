import React from "react";

const Entry = (props) => {
  return (
    <div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.definition}</dd>
      </div>
    </div>
  );
};

export default Entry;
