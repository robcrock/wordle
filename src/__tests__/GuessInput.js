import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../components/App/App';
import GuessInput from '../components/GuessInput/GuessInput';

const setup = () => {

  const {utils} = render(<App />)
  const input = screen.getByLabelText('Enter guess:')
  return {
    input,
    ...utils,
  }
}

describe('GuessInput', () => {

  test("The input displays HELLO, when HELLO is typed into the input.", () => {
    const { input } = setup()
    fireEvent.change(input, {target: {value: 'HELLO'}})
    expect(input.value).toBe('HELLO')
  })

  test("The input is disabled when the gameStatus is not running.", () => {
    render(<GuessInput gameStatus={'won'} />)
    const input = screen.getByLabelText('Enter guess:')
    expect(input).toBeDisabled()
  })

  test("The input is enabled when the gameStatus is running.", () => {
    render(<GuessInput gameStatus={'running'} />)
    const input = screen.getByLabelText('Enter guess:')
    expect(input).toBeEnabled()
  })

  test("The input is required.", () => {
    render(<GuessInput />)
    const input = screen.getByLabelText('Enter guess:')
    expect(input).toBeRequired()
  })

});
