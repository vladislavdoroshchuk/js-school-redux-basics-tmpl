import React from 'react';
import { connect } from 'react-redux';

const contentArea = (value, name, isStudent) => {
  console.log(isStudent);
  return (value || name || isStudent) ? `${isStudent}${name} is ${value} years old` : "Enter name and age";
};

const OutputArea = ( {value, name, isStudent } ) => (
  <div className="row">
    <textarea className="col-sm-9" id="exampleTextarea" rows="3" value={contentArea(value, name, isStudent)} readOnly></textarea>
  </div>
);

const mapStateToProps = state => ({
  value: state.value,
  name: state.name,
  isStudent: state.isStudent
});

export default connect(mapStateToProps)(OutputArea);
