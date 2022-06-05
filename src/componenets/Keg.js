import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Pints: {props.pints}</h3>
        <h3>{props.name}, {props.brand}: {props.price}, {props.alcoholContent}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Log.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func
};


export default Log;