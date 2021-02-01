import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const { toJSON } = renderer.create(<App />);
  expect(toJSON()).toMatchSnapshot();
});
