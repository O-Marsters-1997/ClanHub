import { render, screen } from '@testing-library/react'

import App from '../pages/index'

describe('Should render the app without crashing', () => {
  it('Renders the home page', () => {
    render(<App />)
    const linkElement = screen.getByText('hello world')
    expect(linkElement).toBeInTheDocument()
  })
})
