import { shallow } from 'enzyme';

export const shallowWithStore = (Component, store) => {
  const context = {
    store
  };
  return shallow(Component, { context });
};
