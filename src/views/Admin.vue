<template>
  <div>
    <h3>Admin Panel</h3>
    <div id="users">
      <div  v-for="user in users" :key="user.userId">
        <UserInfo :user="user" />
      </div>
  </div>
  </div>
</template>

<script>
import UserInfo from '@/components/userInfo'
import { userService } from '@/services/user.service'
export default {
  data () {
    return {
      users: []
    }
  },
  components: {
    UserInfo
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      userService.getUsers().then(users => {
        this.users = users
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
#users {
  display: inline-flex;
}

#users>div{
  margin: 10px;
}
</style>
