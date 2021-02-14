// import { authHeader } from '@/helpers/auth-header'
const apiUrl = process.env.API_URL

function login (username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return fetch(`${apiUrl}/auth/login`, requestOptions).then(user => {
    if (user.token) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    return user
  })
}

function logout () {
  localStorage.removeItem('user')
}

export const userService = {
  login,
  logout
}
