import { authHeader } from '@/helpers/auth-header'
const apiUrl = 'http://localhost:3000'

function login (username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({ user: username, password: password })
  }

  return fetch(`${apiUrl}/auth/login`, requestOptions).then(response => response.json()).then(data => {
    const user = {
      username: username,
      password: password,
      token: data.token
    }
    if (data.token) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    return user
  })
}

function logout () {
  localStorage.removeItem('user')
}

function getTeam () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/teams`, requestOptions).then(response => response.json()).then(data => {
    if (data.team) {
      return data.team
    }
    return []
  })
}

export const userService = {
  login,
  logout,
  getTeam
}
