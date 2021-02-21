export function authHeader () {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    return {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': true,
      Authorization: `JWT ${user.token}`
    }
  } else {
    return {}
  }
}

export function formHeader () {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    return {
      Authorization: `JWT ${user.token}`
    }
  } else {
    return {}
  }
}
