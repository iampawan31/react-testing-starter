import { render, screen } from '@testing-library/react'
import { User } from '../../src/entities'
import UserAccount from '../../src/components/UserAccount'

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = {
      id: 1,
      name: 'John'
    }

    render(<UserAccount user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
  })

  it('should render edit button if user is an admin', () => {
    const user: User = {
      id: 1,
      name: 'John',
      isAdmin: true
    }

    render(<UserAccount user={user} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/edit/i)
  })

  it('should not render edit button if user is not an admin', () => {
    const user: User = {
      id: 1,
      name: 'John'
    }

    render(<UserAccount user={user} />)

    const button = screen.queryByRole('button')

    expect(button).not.toBeInTheDocument()
  })
})
