import { userService } from '@/services/user.service'
import router from '@/router'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

const actions = {
  login ({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })

    userService.login(username, password)
      .then(user => {
        commit('loginSuccess', user)
        router.push('/')
      }, error => {
        commit('loginFailure', error)
      }
      )
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  },
  getTeam ({ commit }) {
    userService.getTeam()
      .then(team => {
        commit('teamSuccess', team)
      }, error => {
        commit('teamFail', error)
      })
  }
}

const mutations = {
  loginRequest (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure (state) {
    state.status = {}
    state.user = null
  },
  logout (state) {
    state.status = {}
    state.user = null
  },
  teamSuccess (state, team) {
    state.team = team
  },
  teamFail (state) {
    state.team = null
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
