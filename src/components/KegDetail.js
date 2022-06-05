import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingIncrease } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Pints: {keg.pints}</h3>
      <h3>{keg.name}</h3> 
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ ()=> onClickingIncrease(keg) }>Add pints</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button> 
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func ,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func
};



export default KegDetail;