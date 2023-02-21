import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Banner from '../components/Banner/Banner';

describe('Banner', () => {

  test("The Banner is visible when the gameStatus is not running.", () => {
    render(<Banner gameStatus={'won'} />)
    const banner = screen.getByTestId('banner')
    expect(banner).toBeVisible()
  })

  test("The Banner is not visible when the gameStatus is running.", () => {
    render(<Banner gameStatus={'running'} />)
    const banner = screen.queryByTestId('banner')
    expect(banner).toBe(null)
  })

  test("The Banner displays Congratulations! Got it in 1 guess when the guessCount is 1.", () => {
    render(<Banner gameStatus={'won'} guessCount={1} />)
    const banner = screen.getByTestId('banner')
    expect(banner).toHaveTextContent('Congratulations! Got it in 1 guess.')
  })

  test("The Banner displays Congratulations! Got it in 2 guesses when the guessCount is 2.", () => {
    render(<Banner gameStatus={'won'} guessCount={2} />)
    const banner = screen.getByTestId('banner')
    expect(banner).toHaveTextContent('Congratulations! Got it in 2 guesses.')
  })

  test("The Banner displays Sorry, the correct answer is BEARD when the answer is BEARD.", () => {
    render(<Banner gameStatus={'lost'} answer={'BEARD'} />)
    const banner = screen.getByTestId('banner')
    expect(banner).toHaveTextContent('Sorry, the correct answer is BEARD.')
  })

});
