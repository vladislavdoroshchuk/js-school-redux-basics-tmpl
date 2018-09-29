import React from 'react';
import { connect } from 'react-redux';

import { setName } from './action-types';

const NameEditor = ({ value, onChange }) => (
  <div className="row">
    <label className="col-sm-3" htmlFor="user-name">User Name: </label>
    <input className="col-sm-6" value={value} onChange={onChange} id="user-name"/>
  </div>
);

const state2Props = state => ({
  value: state.name
});

const handlers = {
  onChange: ({ target }) => setName(target.value)
};

export default connect(state2Props, handlers)(NameEditor);
