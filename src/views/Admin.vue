<template>
  <div>
    <h3>Admin Panel</h3>
    <div class="users">
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
      userService.getUsers().then(data => {
        this.users = data.users
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.users {
  display: grid;
  padding: 1rem;
}

.user>div {
  margin: 1rem;
}

@media screen and (min-width: 481px) {
  .users {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 769px) {
  .users {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .users {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (min-width: 1201px) {
  .users {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
