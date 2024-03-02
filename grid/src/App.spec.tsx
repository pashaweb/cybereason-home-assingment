import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import * as useApi from "./hooks/data-api.hook";

describe("App", () => {
  "useDataApiHook";
  const useDataApiSpy = vi.spyOn(useApi, "useDataApiHook");

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the loading div", () => {
    useDataApiSpy.mockImplementationOnce(() => ({
      loading: true,
      error: null,
      data: [],
    }));
    const { getByText } = render(<App />);
    const logoElement = getByText(/Loading.../i);
    expect(logoElement).toBeTruthy();
  });
  it("renders the error div", () => {
    useDataApiSpy.mockImplementationOnce(() => ({
      loading: false,
      error: "Error",
      data: [],
    }));

    const { getByText } = render(<App />);

    const logoElement = getByText(/Error/i);

    expect(logoElement).toBeTruthy();
  });

  it("renders the table", () => {
    useDataApiSpy.mockImplementationOnce(() => ({
      loading: false,
      error: null,
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "leanne@example.com",
          address: {
            street: "123 Main St",
            suite: "Suite 1",
            city: "City Name",
            zipcode: "Zip Code",
            geo: {
              lat: "Latitude",
              lng: "Longitude",
            },
          },
          phone: "123-456-7890",
          website: "www.example.com",
          company: {
            name: "Company Name",
            catchPhrase: "Catch Phrase",
            bs: "BS",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "ervin@example.com",
          address: {
            street: "456 Main St",
            suite: "Suite 2",
            city: "City Name",
            zipcode: "Zip Code",
            geo: {
              lat: "Latitude",
              lng: "Longitude",
            },
          },
          phone: "987-654-3210",
          website: "www.example.com",
          company: {
            name: "Company Name",
            catchPhrase: "Catch Phrase",
            bs: "BS",
          },
        },
      ],
    }));
    const { getByText } = render(<App />);
    const tableCaption = getByText(/A list of users./i);
    const tableHead = getByText(/ID/i);
    const tableBody = getByText(/Leanne Graham/i);

    expect(tableCaption).toBeTruthy();
    expect(tableHead).toBeTruthy();
    expect(tableBody).toBeTruthy();
  });
});
