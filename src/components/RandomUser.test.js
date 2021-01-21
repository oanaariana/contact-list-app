import React from "react";
import RandomUser from "./RandomUser";

import { render } from "@testing-library/react";

const stubbedUser = {
  gender: "female",
  name: {
    "title": "Miss",
    "first": "Bella",
    "last": "Wang"
  },
  location: {
    street: {
      number: 9617,
      name: "Stafford Street"
    },
    city: "Hastings",
    state: "Wellington",
    country: "New Zealand",
    postcode: 66909,
    coordinates: {
      latitude: "17.2334",
      longitude: "88.9196"
    },
    timezone: {
      offset: "+4:30",
      description: "Kabul"
    }
  },
  email: "bella.wang@example.com",
  login: {
    uuid: "2d5afd5e-a598-469f-9933-4edba18bcefb",
    username: "blueelephant921",
    password: "ccccccc",
    salt: "uJHyJ9ZL",
    md5: "5724c4fbd97e5155d19f71a44f12cc48",
    sha1: "85dff52890cee9977409fc6ae332a7e2326d6aa4",
    sha256: "ab62d511f943bfca48935cb4620b3b2007f8d1b9c1e04a04ea76ea95cd099d5f"
  },
  dob: {
    date: "1989-11-17T21:56:57.779Z",
    age: 32
  },
  registered: {
    date: "2014-05-20T20:54:39.692Z",
    age: 7
  },
  phone: "(057)-889-6313",
  cell: "(645)-978-7056",
  id: {
    name: "",
    value: null
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/62.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg"
  },
  nat: "NZ"
};

it("matches snapshot", () => {
  const { asFragment } = render(<RandomUser user={stubbedUser} />);

  expect(asFragment()).toMatchSnapshot();
});
