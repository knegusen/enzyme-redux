/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { shallowWithState, shallowWithStore } from '../index';

describe('redux-enzyme', () => {
  const ReactComponent = () => <div>dummy component</div>;

  describe('shallowWithStore', () => {
    it('passes prop from mapStateToProps', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = state => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);
    });

    it('passes prop from mapDispatchToProps', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = dispatch => ({
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

  describe('shallowWithState', () => {
    it('returns correct state', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = state => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithState(<ConnectedComponent />, expectedState);
      expect(component.props().state).toBe(expectedState);
    });
  });
});
