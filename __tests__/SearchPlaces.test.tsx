import {describe} from "jest-circus";
import SearchPlaces from "@/components/SearchPlaces";
import {render, screen} from "@testing-library/react";
import * as userEvent from "@testing-library/user-event";
import {mockSetValue} from "@/__mocks__/use-places-autocomplete";

describe('SearchPlaces', () => {

  it('renders a search box', () => {
    render(<SearchPlaces />)

    const box = screen.getByRole('textbox');

    expect(box).toBeInTheDocument();
  })

  it('searches places', async () => {
    const user = userEvent.default.setup();
    render(<SearchPlaces />);
    const box = screen.getByRole('textbox');

    await user.type(box, 'kebab');

    expect(mockSetValue).toHaveBeenCalledTimes(5);
  })
})