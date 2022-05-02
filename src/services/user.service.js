import { formHeader, authHeader } from '@/helpers/auth-header'
const apiUrl = 'https://poke-team-backend.herokuapp.com'

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
      token: data.token,
      image: data.image
    }
    if (data.token) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    return user
  })
}

function register (formData) {
  const requestOptions = {
    method: 'POST',
    headers: formHeader(),
    body: formData
  }

  return fetch(`${apiUrl}/auth/register`, requestOptions).then(response => response.json()).then(data => {
    const user = {
      username: data.user.username,
      password: data.user.password
    }
    return user
  })
}

function logout () {
  localStorage.removeItem('user')
}

function getUsers () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/auth/getAll`, requestOptions).then(response => response.json()).then(data => {
    if (data) {
      return data
    }
    return []
  })
}

export const userService = {
  login,
  logout,
  register,
  getUsers
}
