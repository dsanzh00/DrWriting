<template>
    <div class="row">
        <div class="col">
            <table class="table table-bordered table-hover">
                <thead>
                    <th>
                        <td>
                            <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/admin'">
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
          <h2>Crear usuario nuevo</h2>
          &nbsp;
          <form @submit="submitForm">
            <div class="form-group">
              <input type="text" placeholder="Nombre completo" v-model="userData.fullname" required>
            </div>
    
            <div class="form-group">
              <input type="text" placeholder="Nombre de usuario" v-model="userData.username" required>
            </div>
    
            <div class="form-group">
              <input type="password" placeholder="Contraseña" v-model="userData.password" required>
            </div>

            <div class="form-group">
              <select id="group" v-model="userData.userGroup" placeholder="Grupo" required>
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
    
            <div class="form-group">
              <select id="userType" v-model="userData.type" placeholder="Tipo de usuario" required>
                <option value="worker">Ingeniero de aplicaciones</option>
              </select>
            </div>
    
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: {
        fullname: "",
        username: "",
        password: "",
        type: "",
        userGroup: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (
        this.userData.type === "worker" ||
        this.userData.type === "admin"
      ) {
        axios
          .post("http://localhost:3000/usuarios", this.userData)
          .then((response) => {
            // Usuario creado correctamente
            alert("Creado correctamente");
            console.log(response.data);
          })
          .catch((error) => {
            // Error al crear el usuario
            alert("Error");
            console.error(error);
          });
      }else{
        alert("Tipo de usuario no válido");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.form-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  
}

input[type="text"],
input[type="password"],
input[type="int"], 
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3897f0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #357ae8;
}
</style>