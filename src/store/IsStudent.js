import React from 'react';
import { connect } from 'react-redux';

import { updateIsStudent } from './action-types';

const IsSudent = ({ isStudent, changeIsStudent }) => (
  <div className="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
      <input type="checkbox" className="form-check-input" id="is-student" value={isStudent} onChange={changeIsStudent} />
      <label className="form-check-label" htmlFor="is-student" >Student</label>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isStudent: state.isStudent
});

const dispatchToProps = dispatch => ({
  changeIsStudent: (event) => {
    dispatch(updateIsStudent(event.target.checked));
  }
});

export default connect(mapStateToProps, dispatchToProps)(IsSudent);
