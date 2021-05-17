import { createStore } from 'vuex'
import { account } from './account.module'
import { team } from './team.module'
export default createStore({
  modules: {
    account: account,
    team: team
  }
})
