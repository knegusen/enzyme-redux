# enzyme-redux

Test utils to simplify testing of containers in redux with enzyme.

## Install

In the terminal execute the following command:

```
$ npm install enzyme-redux --save-dev
```

## How to use

### shallowWithStore

```js

import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

describe('example shallowWithStore', () => {
  const ReactComponent = () => (<div>dummy component</div>);
  describe('state', () => {
    it('works', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });
  });
  
  describe('dispatch', () => {
    it('works', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });
  });
});

```

### shallowWithState

```js

import React from 'react';
import { connect } from 'react-redux';
import { shallowWithState } from 'enzyme-redux';

describe('example shallowWithState', () => {
  const ReactComponent = () => (<div>dummy component</div>);
  it('works', () => {
    const expectedState = 'expectedState';
    const mapStateToProps = (state) => ({
      state,
    });
    const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
    const component = shallowWithState(<ConnectedComponent />, expectedState);
    expect(component.props().state).toBe(expectedState);
  });
});

```