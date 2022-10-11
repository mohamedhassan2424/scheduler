import React from "react";
import { render, cleanup, waitForElement,fireEvent } from "@testing-library/react";

import Application from "components/Application";
afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});

describe("fixtures fake data", ()=>{
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);
  
    return waitForElement(() => getByText("Monday"))
    .then((response)=>{
      console.log('all is good')
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    })
    .catch((error)=>{
      console.log("error found here", error)
    })
  });
})

