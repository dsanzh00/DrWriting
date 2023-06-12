<template>
  <div class="row">
    <div class="col">
        <table class="table table-bordered table-hover">
            <thead>
                <th>
                    <td>
                        <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/super'">
                            <span class="material-icons-two-tone">
                                arrow_back
                                </span>
                        </button>
                    </td>
                </th>
            </thead>
        </table>
    </div>
</div>
<div class="container">
  <div class="form-container">
  <div>
    <h2>Editar Usuario</h2>

    <form @submit="submitForm">
      <div>
        <label for="fullName">Nombre Completo:</label>
        <input type="text" id="fullName" v-model="userData.fullname" required>
      </div>

      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="userData.username" required>
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="userData.password" required>
      </div>

      <div>
        <label for="userGroup">Grupo:</label>
        <select id="userGroup" v-model="userData.userGroup" placeholder="Grupo" required>
          <option value="1">Grupo 1</option>
          <option value="2">Grupo 2</option>
          <option value="3">Grupo 3</option>
          <option value="4">Grupo 4</option>
          <option value="5">Grupo 5</option>
          <option value="6">Grupo 6</option>
          <option value="7">Grupo 7</option>
          <option value="8">Grupo 8</option>
          <option value="9">Grupo 9</option>
          <option value="10">Grupo 10</option>
          <option value="11">Grupo 11</option>
          <option value="12">Grupo 12</option>
          <option value="13">Grupo 13</option>
          <option value="14">Grupo 14</option>
          <option value="15">Grupo 15</option>
        </select>
      </div>
      <div>
        <label for="userType">Tipo de Usuario:</label>
        <select id="userType" v-model="userData.type" placeholder="Tipo de trabajador" required>
          <option value="admin">Manager</option>
          <option value="worker">Ingeniero de aplicaciones</option>
        </select>
      </div>
      
      <br/>

      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</div>
</div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: {
        fullName: '',
        username: '',
        password: '',
        userType: '',
        userGroup: '',
      },
    };
  },
  created() {
    // Obtener los datos del usuario a editar
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const userId = this.$route.params.id;
      console.log(this.$route.params.id);
      

      axios.get(`http://localhost:3000/usuarios/${userId}`)
        .then(response => {
          this.userData = response.data;
        })
        .catch(error => {
          console.error(error);
          alert("ERROR RECOGIENDO DATOS")
        });
    },
    submitForm() {
      const userId = this.$route.params.id;

      axios.put(`http://localhost:3000/usuarios/${userId}`, this.userData)
        .then(response => {
          console.log(response.data);
          // Redirigir a la página de lista de usuarios
          this.$router.push('/usuarios');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};

</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
