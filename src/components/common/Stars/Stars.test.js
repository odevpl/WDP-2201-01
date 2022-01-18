import React from 'react';
import { shallow } from 'enzyme';
import Stars from './Stars';

const mockProps = {
  product: {
    id: 'id',
    stars: 2,
    userStars: 3,
  },
};

describe('Component Stars', () => {
  it('should render without crashing', () => {
    const component = shallow(<Stars {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
