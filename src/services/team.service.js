import { authHeader } from '@/helpers/auth-header'
const apiUrl = 'http://localhost:3000'

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

function addPokemon () {
  const requestOptions = {
    method: 'POST',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/teams/pokemons`, requestOptions).then(response => response.json()).then(data => {
    return data.pokemon
  })
}

export const teamService = {
  pokeDelete,
  getTeam,
  addPokemon
}
