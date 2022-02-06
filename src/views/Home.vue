<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://i.ibb.co/wCxsJpS/logo.png"
          alt="Workflow"
          style="height: 200px"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-100">
          Inicio de sesión
        </h2>
      </div>
      <form
        @click="signIn"
        class="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email-address"
              name="email"
              v-model="usuario"
              type="email"
              autocomplete="email"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div>
          <button
          @click="googleSignIn"
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  </div>
  <div role="alert" v-if="error">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error</div>
    <div
      class="
        border border-t-0 border-red-400
        rounded-b
        bg-red-100
        px-4
        py-3
        text-red-700
      "
    >
      <p>Error de usuario o contraseña.</p>
    </div>
  </div>

  <pre>
    {{ $data }}
  </pre>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      usuario: '',
      password: ''
    }
  },
  methods: {
    googleSignIn: function() {
      let provider = new firebase.auth.GoogleAuthProvider();
firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    }
  },
  }

</script>