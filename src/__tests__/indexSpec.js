import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from '../index';
import { createMockStore } from 'redux-test-utils';

describe('redux-enzyme', () => {
  describe('shallowWithStore', () => {
    const ReactComponent = () => (<div>dummy component</div>);

    it('passes prop from mapStateToProps', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });

    it('passes prop from mapDispatchToProps', () => {
      const state = {
        field1: 'field1',
      };
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore(state);

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });
  });
});
