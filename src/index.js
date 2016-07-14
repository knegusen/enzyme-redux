import { shallow } from 'enzyme';

export const shallowWithStore = (Component, store) => {
  const context = {
    store,
  };
  return shallow(Component, { context });
};

export const shallowWithState = (Component, state) => {
  const context = {
    store: {
      getState: () => state,
      subscribe: () => ({}),
      dispatch: () => ({}),
    },
  };
  return shallow(Component, { context });
};
