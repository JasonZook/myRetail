import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Social from '../components/Social';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Social />).contains( <div className="text-center mb-5">
      <a href="#"><i className="fab fa-pinterest mx-3 font-two md-gray-text"> <span className="sr-only">Pinterest</span></i></a>
      <a href="#"><i className="fab fa-facebook mx-3 font-two md-gray-text"> <span className="sr-only">Facebook</span></i></a>
      <a href="#"><i className="fab fa-instagram mx-3 font-two md-gray-text"> <span className="sr-only">Instagram</span></i></a>
    </div>)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Social />).find('.sr-only').length).toBe(3);
  });

  it('should render to static HTML', function() {
    expect(render(<Social />).text()).toEqual(" Pinterest Facebook Instagram");
  });
});
