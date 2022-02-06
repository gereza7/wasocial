<template >
<Nav />
<Chat />
</template>

<script>
import Nav from '@/components/Nav.vue'
import Chat from '@/components/Chat.vue'
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat } from '@/firebase'



export default {
  name: 'App',
  components: { Nav, Chat },
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