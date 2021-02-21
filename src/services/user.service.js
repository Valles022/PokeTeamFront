import { formHeader, authHeader } from '@/helpers/auth-header'
const apiUrl = 'http://localhost:3000'

function login (username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: username, password: password })
  }

  return fetch(`${apiUrl}/auth/login`, requestOptions).then(response => response.json()).then(data => {
    const user = {
      username: username,
      password: password,
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
  getTeam,
  register,
  getUsers
}
