<template>
    <div class="row">
        <div class="col">
            <table class="table table-bordered table-hover">
                <thead>
                    <th>
                        <td>
                            <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/'">
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
          <h2>Registro</h2>
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
      },
    };
  },
  methods: {
    submitForm() {
      if (
        this.userData.type === "worker"
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
            alert("El usaurio ya existe");
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