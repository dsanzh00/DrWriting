<template>
  <div id="app">
    <div class="container">
      <h1>DrWriting</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="username" required />
        <input
          type="password"
          v-model="password"
          placeholder="password"
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      &nbsp;
      <button onclick="location.href='http://localhost:8080/signIn'">
        Registro
      </button>
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  setup() {},
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {},
  methods: {
    login() {
      // Realizar la solicitud al servidor para el inicio de sesión
      axios
        .post("http://localhost:3000/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          // Verificar la respuesta del servidor
          if (response.data.success) {
            // Inicio de sesión exitoso
            console.log(response);
            //alert("Inicio de sesión exitoso");

            const user = {
              username: "admin",
              password: "password",
            };

            //console.log(response.status)
            // Guarda el estado de inicio de sesión en el localStorage o en una variable global
             if(response.status = '200'){
               localStorage.setItem("isAuthenticated", "true");
               localStorage.setItem("id", response.data.id);
               localStorage.setItem("username", response.data.username);

               console.log(localStorage);
             }
            

            // Redirige al usuario a la página principal o a la ruta deseada
            //this.$router.push("/profile");

            //this.$router.push("/documentos"); // Redirigir a la página del menú

            const userType = response.data.userType;
            // Redirigir según el tipo de usuario
            if (userType === "admin") {
              this.$router.push("/admin");
            } else if (userType === "worker") {
              this.$router.push("/menu");
            } else if (userType === "super") {
              this.$router.push("/super");
            }
          } else {
            // Inicio de sesión fallido
            alert("Usuario o contraseña incorrectos");
          }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
          // Mostrar mensaje de error
          alert("Error al realizar la solicitud de inicio de sesión");
        });
    },

    registro() {
      alert("hola");
    },
  },
};
</script>




<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f0f2f5;
  border: 1px solid #e6e8eb;
  border-radius: 4px;
  text-align: center;
  margin-top: 35px;
}

h1 {
  color: #262626;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  margin-top: 12px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #3897f0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1877c6;
}
</style>
