import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/index';

import Counter from './store/Counter';
import NameEditor from './store/NameEditor';
import OutputArea from './store/OutputArea';
import IsStudent from './store/IsStudent';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="col-sm-6">
          <NameEditor />
          <br/>
          <Counter />
          <br/>
          <IsStudent />
          <br/>
          <OutputArea />
          <br/>
        </div>
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
