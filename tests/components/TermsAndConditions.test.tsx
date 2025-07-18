import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
  it('should render with correct text and initial state', () => {
    render(<TermsAndConditions />)

    const heading = screen.getByRole('heading')
    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button', { name: 'Submit' })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Terms & Conditions')

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('should enable the button when checkbox is enabled', async () => {
    render(<TermsAndConditions />)

    const checkbox = screen.getByRole('checkbox')

    const user = userEvent.setup()

    await user.click(checkbox)

    expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled()
  })
})
