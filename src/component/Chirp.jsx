import React from "react";

const Chirp = (props) => {
  return (
    <React.Fragment>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
    </React.Fragment>
  );
};

export default Chirp;