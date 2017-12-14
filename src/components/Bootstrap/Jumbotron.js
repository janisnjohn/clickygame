import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = ({ children }) =>
  <div style={{ height: 300 }} className="jumbotron">
    {children}
  </div>;

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired
};


export default Jumbotron;
