<template>
  <VueBottomNavigation :options="options" v-model="selected" />
  <div class="container-sm mt-20">
    <div class="mx-5">
      <Message
        v-for="{ id, text, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :photo-url="userPhotoURL"
        :sender="userId === user?.uid"
      >
        {{ text }}
      </Message>
    </div>
  </div>

  <div ref="bottom" class="mt-20" />

  <div class="bottom">
    <div class="container-sm">
      <form v-if="isLogin" @submit.prevent="send">
        <input v-model="message" placeholder="Escribir aquí" required />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'

import SendIcon from './SendIcon.vue'
import Message from './Message.vue'
import VueBottomNavigation from 'bottom-navigation-vue'

export default {
  components: { Message, SendIcon, VueBottomNavigation },
  data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: 'fas fa-home', title: 'Home', badge: 1 },
      { id: 2, icon: 'fas fa-layer-group', title: 'Category' },
      { id: 3, icon: 'fas fa-cog', title: 'Setting' },
      { id: 4, icon: 'fas fa-user', title: 'Account', badge: 15 },
      { id: 5, icon: 'fas fa-bell', title: 'Notifcation' }
    ]
  }),
  setup() {
    const { user, isLogin } = useAuth()
    const { messages, sendMessage } = useChat()

    const bottom = ref(null)
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: 'smooth' })
        })
      },
      { deep: true }
    )

    const message = ref('')
    const send = () => {
      sendMessage(message.value)
      message.value = ''
    }

    return { user, isLogin, messages, bottom, message, send }
  }
}
</script>
