import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigatoinItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render 2 <NavigationItems /> when not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render 3 <NavigationItems /> when authenticated", () => {
    wrapper.setProps({
      isAuthenticated: true,
    });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should render a logout button when authenticated", () => {
    wrapper.setProps({
        isAuthenticated: true,
      });
    expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
  });
});
