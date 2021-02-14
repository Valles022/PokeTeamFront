export function authHeader () {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    return { Authoritzation: 'Bearer' + user.token }
  } else {
    return {}
  }
}
