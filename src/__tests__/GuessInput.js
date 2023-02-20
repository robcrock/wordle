import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import GuessInput from '../components/GuessInput';

const setup = () => {

  const {utils} = render(<GuessInput />)
  const input = screen.getByLabelText('Enter guess:')
  return {
    input,
    ...utils,
  }
}

describe('GuessInput', () => {
  test("renders a guess input with the label 'Enter guess:'", () => {
    const { input } = setup()
    fireEvent.change(input, {target: {value: 'HELLO'}})
    expect(input.value).toBe('HELLO')
  })

  test("renders a guess input that's exactly 5 character long.", () => {
    const { input } = setup()
    expect(input).toHaveAttribute('pattern', '[A-Z]{5}');
  })

  test("renders a guess input that's required.", () => {
    const { input } = setup()
    expect(input).toBeRequired();
  })

  test('submits the form with input data', () => {
    const { input } = setup()
    const form = screen.getByTestId('form');
    fireEvent.change(input, { target: { value: 'HELLO' } });
    fireEvent.submit(form);
  })

});
