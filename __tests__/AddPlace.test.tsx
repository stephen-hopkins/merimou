import {composeStories} from "@storybook/testing-react";
import * as stories from '@/stories/AddPlace.stories'
import {render, screen} from "@testing-library/react";
import * as userEvent from "@testing-library/user-event";

const { Default } = composeStories(stories);

describe('AddPlace', () => {
  it('updates name', async () => {
    const user = userEvent.default.setup();
    const spy = jest.fn();
    render(<Default setName={spy} />)
    var nameBox = screen.getByRole('textbox', {name: /name/i});

    await user.type(nameBox, 'hello');

    expect(spy).toHaveBeenCalledTimes(5);
  })

  it('updates description', async () => {
    const user = userEvent.default.setup();
    const spy = jest.fn();
    render(<Default setDescription={spy} />)
    var input = screen.getByRole('textbox', {name: /description/i});

    await user.type(input, 'desc');

    expect(spy).toHaveBeenCalledTimes(4);
  })

  it('passes on add', async () => {
    const user = userEvent.default.setup();
    const spy = jest.fn();
    render(<Default save={spy} />)
    var button = screen.getByRole('button', {name: /add/i});

    await user.click(button);

    expect(spy).toHaveBeenCalled();
  })

  it('passes on reset', async () => {
    const user = userEvent.default.setup();
    const spy = jest.fn();
    render(<Default cancel={spy} />)
    var button = screen.getByRole('button', {name: /reset/i});

    await user.click(button);

    expect(spy).toHaveBeenCalled();
  })
})