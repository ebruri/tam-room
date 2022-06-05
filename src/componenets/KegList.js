import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Log
          whenKegClicked = { props.onKegSelection }
          birds={log.birds}
          view={log.view}
          location={log.location}
          date={log.date}
          id={log.id}
          key={log.id}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
LogList.propTypes = {
  logList: PropTypes.array,
  onLogSelection: PropTypes.func
};

export default LogList;