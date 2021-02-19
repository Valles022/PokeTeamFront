<template>
  <div>
      <p>Admin Panel</p>
      <UserInfo />
  </div>
</template>

<script>
import UserInfo from '@/components/userInfo'
import { userService } from '@/services/user.service'
export default {
  components: {
    UserInfo
  },
  created () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      userService.getUsers()
    }
  }
}
</script>

<style>

</style>
