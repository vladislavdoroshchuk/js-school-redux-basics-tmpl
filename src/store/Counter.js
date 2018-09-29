import React from 'react';
import { connect } from 'react-redux';

import { updateAge } from './action-types';

const Counter = ({ value, name, changeAge }) => (
  <div className="row">
    <label className="col-sm-3" htmlFor="user-age">User Age: </label>
    <input type="number" className="col-sm-6" value={value} onChange={changeAge} id="user-age"/>
  </div>
);

const mapStateToProps = state => ({
  value: state.value,
  name: state.name
});

const dispatchToProps = dispatch => ({
  changeAge: (event) => {
    dispatch(updateAge(event.target.value));
  }
});

export default connect(mapStateToProps, dispatchToProps)(Counter);
