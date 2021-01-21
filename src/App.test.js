import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import { render, screen } from '@testing-library/react';
import App from './App';


configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  it("includes two divs", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(6);
  });

  it("should update state on change", () => {
    const onSearchInputChange = jest.fn();
    const wrapper = mount(<App onChange={onSearchInputChange} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(searchInput => [searchInput, onSearchInputChange]);

    wrapper.find(".content__search").simulate("on change");
    expect(searchInput).toBeTruthy();
  });

});
