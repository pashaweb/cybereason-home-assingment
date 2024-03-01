import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the logo text", () => {
    const { getByText } = render(<App />);
    const logoElement = getByText(/Hi from Vite!/i);

    expect(logoElement).toBeTruthy();
  
  });
});
