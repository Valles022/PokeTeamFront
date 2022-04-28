import { authHeader } from '@/helpers/auth-header'
const apiUrl = 'https://poke-team-backend.herokuapp.com'

function pokeDelete (index) {
  const requestOptions = {
    method: 'Delete',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/teams/pokemons/${index}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data.message
    })
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

function addPokemon (name) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ name: name })
  }
  return fetch(`${apiUrl}/teams/pokemons`, requestOptions).then(response => response.json()).then(data => {
    return data
  })
}

export const teamService = {
  pokeDelete,
  getTeam,
  addPokemon
}
