import { teamService } from '@/services/team.service'
// import router from '@/router'

const message = ''
const state = message
  ? { status: { deleteState: true }, message, team: [] }
  : { status: {}, message }

const actions = {
  delete ({ commit }, { index }) {
    teamService.pokeDelete(index)
      .then(message => {
        commit('deleteSuccess', message, index)
      }, error => {
        commit('deleteFail', error)
      })
  },
  getTeam ({ commit }) {
    teamService.getTeam()
      .then(team => {
        commit('teamSuccess', team)
      }, error => {
        commit('teamFail', error)
      })
  },
  resetMessage ({ commit }) {
    commit('resetMessage')
  },
  addPokemon ({ commit }, { name }) {
    teamService.addPokemon(name)
      .then(pokemon => {
        commit('addSuccess', pokemon)
      }, error => {
        commit('addFail', error)
      })
  }
}

const mutations = {
  deleteSuccess (state, message, index) {
    state.status = { deleteState: true }
    state.team.splice(index, 1)
    state.message = message
  },
  deleteFail (state, error) {
    state.status = { deleteState: false }
    state.message = error
  },
  teamSuccess (state, team) {
    state.team = team
  },
  teamFail (state) {
    state.team = null
  },
  addSuccess (state, pokemon) {
    state.team.push(pokemon)
  },
  addFail (state, error) {
    state.message = error
  },
  resetMessage (state) {
    state.message = ''
    state.status = {}
  }
}

export const team = {
  namespaced: true,
  state,
  actions,
  mutations
}
