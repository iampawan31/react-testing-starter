import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('UserList', () => {
  it('should render no users when users array is empty', () => {
    render(<UserList users={[]} />)

    expect(screen.getByText(/no users/i)).toBeInTheDocument()
  })

  it('should render a list of users', () => {
    const users: User[] = [
      {
        id: 1,
        name: 'John'
      },
      {
        id: 2,
        name: 'Jane'
      }
    ]
    render(<UserList users={users} />)

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
})
