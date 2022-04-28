import { formHeader, authHeader } from '@/helpers/auth-header'
const apiUrl = 'https://poke-team-backend.herokuapp.com'

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

  console.log(formData.get('user'))

  console.log(requestOptions.body)
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
