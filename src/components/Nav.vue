<template>
  <nav>
    <div>
      <div class="logo">
        <img v-bind:src="require('../assets/logo.png')" alt="" />
      </div>

      <div v-if="isLogin" class="login">
        <Avatar :src="user.photoURL" />
        <button class="text-gray-400 hover:text-white" @click="signOut">
          Cerrar Sesión
        </button>
      </div>

      <button v-else class="bg-green-500 hover:bg-green-600" @click="signIn">
        Iniciar Sesión
      </button>
    </div>
  </nav>
</template>

<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'

export default {
  components: { Avatar },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>
