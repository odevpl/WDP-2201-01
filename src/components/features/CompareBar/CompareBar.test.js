import React from 'react';
import { shallow } from 'enzyme';

import CompareBar from './CompareBar';
import Button from '../../common/Button/Button';

const mockState = {
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      image: 'src=../../images/furnitures/beds/bed_001.jpg',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: 'src=../../images/furnitures/beds/bed_002.jpg',
      compare: false,
    },
  ],
};

describe('Component CompareBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<CompareBar {...mockState} />);
    expect(component).toBeTruthy();
  });
});
