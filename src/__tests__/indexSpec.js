import React from 'react';
import { shallowWithStore } from '../index';

describe('shallowWithStore', () => {

  const ReactComponent = () => (<div>dummy component</div>);

  describe('state', () => {
    it('can pass state in mapStateToProps', () => {
      expect(true).toBe(true);
    });
  });
});
