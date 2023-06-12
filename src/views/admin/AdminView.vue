<template>
    <div class="row">
        <div class="col">
            <table class="table table-bordered table-hover">
              <thead>
                <div class="card2">                    
                        <div class="card-body2">
                            <h5 class="card-title2">{{ userData.fullname }}</h5>
                            <p class="card-text2">{{ userData.type }}</p>
                        </div>
                    
                    <td>
                        <button class="btn btn-danger" onclick="localStorage.clear(); location.href='http://localhost:8080'">
                            <span class="material-icons-two-tone">
                                logout
                                </span>
                        </button>
                    </td>
                </div>
                
            </thead>
                <thead>
                    <th >
                        <td>
                            <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/newUserAdmin'">
                              <span class="material-icons">
                                person_add_alt_1
                                </span>                                
                            </button>
                        </td>
                      <td>
                        <button class="btn btn-danger" onclick="location.href='http://localhost:8080/menu'">
                          <span class="material-icons-two-tone">
                            table_chart
                            </span>
                        </button>
                    </td>
                    </th>
                </thead>
            </table>
        </div>
    </div>
  <div class="row">
    <div class="col">
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="fondo1"><tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Tipo de usuario</th>
                    <th>Grupo que maneja</th>
                    <th>Acciones</th>
                    </tr></thead>
                <tbody class="table-group-divider" id="Contenido">
                    <tr v-for="i in workers" :key="i.id">
                        <td>{{ i.id }}</td>
                        <td>{{ i.fullname }}</td>
                        <td>{{ i.username}}</td>
                        <td>{{ i.type }}</td>
                        <td>{{ i.userGroup}}</td>
                        <td>
                            <button class="btn btn-danger" v-on:click="eliminarUser(i.id)">
                                <span class="material-icons-two-tone">
                                    delete
                                    </span>
                            </button>
                            &nbsp;
                            <button class="btn btn-info" v-on:click="editarUser(i.id)">
                                <span class="material-icons-two-tone">
                                    edit
                                    </span>
                            </button>
                            &nbsp;
                                  
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import Popup from "../../components/PopupNav.vue";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },

  data() {
    return { 
      workers: [],
      userData: {
        fullname: "",
        username: "",
        password: "",
        type: "",
        userGroup: "",
      },
    
    };
  },
  created() {
    this.fetchUserData();
    this.getWorkers();
  },
  methods: {

    fetchUserData() {
      const userId = localStorage.getItem("id");
      console.log(localStorage.getItem("id"));

      axios
        .get(`http://localhost:3000/usuarios/${userId}`)
        .then((response) => {
          if (response.data.type === "worker") {
            response.data.type = "Ingeniero de aplicaciones";
          }
          if (response.data.type === "admin") {
            response.data.type = "Manager";
          }

          this.userData = response.data;
          console.log(response.data.type);
        })
        .catch((error) => {
          console.error(error);
          alert("ERROR RECOGIENDO DATOS");
        });
    },

    getWorkers() {
      axios
        .get("http://localhost:3000/usuarios")
        .then((workers) => {
          workers.data.forEach(function (i) {
            if (i.type === "worker") {
              i.type = "Ingeniero de aplicaciones";
            } else if (i.type === "admin") {
              i.type = "Manager";
            }
          });

          workers.data.forEach(function (i) {
            if (i.userGroup === 1) {
              i.userGroup = "Grupo 1: Proyectos";
            } else if (i.userGroup === 2) {
              i.userGroup = "Grupo 2: Documentos";
            }else if (i.userGroup === 3) {
              i.userGroup = "Grupo 3: Categorías";
            }else if (i.userGroup === 4) {
              i.userGroup = "Grupo 4: Etiquetas";
            }else if (i.userGroup === 5) {
              i.userGroup = "Grupo 5: Proyectos y documentos";
            }else if (i.userGroup === 6) {
              i.userGroup = "Grupo 6: Proyectos y categorías";
            }else if (i.userGroup === 7) {
              i.userGroup = "Grupo 7: Proyectos y etiquetas";
            }else if (i.userGroup === 8) {
              i.userGroup = "Grupo 8: Documentos y categorías";
            }else if (i.userGroup === 9) {
              i.userGroup = "Grupo 9: Dcoumentos y etiquetas";
            }else if (i.userGroup === 10) {
              i.userGroup = "Grupo 10: Categorías y etiquetas";
            }else if (i.userGroup === 11) {
              i.userGroup = "Grupo 11: Proyectos, documentos y categorías";
            }else if (i.userGroup === 12) {
              i.userGroup = "Grupo 12: Proyectos, documentos y etiquetas";
            }else if (i.userGroup === 13) {
              i.userGroup = "Grupo 13: Proyectos, categorías y etiquetas";
            }else if (i.userGroup === 14) {
              i.userGroup = "Grupo 14: Documentos, categorías y etiquetas";
            }else if (i.userGroup === 15) {
              i.userGroup = "Todos los derechos";
            }
          });
          this.workers = workers.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    eliminarUser(userId) {
      axios
        .delete(`http://localhost:3000/usuarios/${userId}`)
        .then((response) => {
          // Usuario eliminado correctamente
          console.log(response.data);
          alert("Usuario: " + userId + " ha sido eliminado");
          window.location.reload();
        })
        .catch((error) => {
          // Error al eliminar el usuario
          console.error(error);
        });
    },

    editarUser(userId, fullname, username, userType) {
      this.$router.push("/editUserAdmin/" + userId);
    },
  },
};
</script>

<style scoped>
.fondo1 {
  color: beige;
  background-image: url("../../assets/img/fondo1.jpg");
}

.card2 {
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
}

.card-title2 {
  font-size: 20px;
  color: #333;
}

.card-text2 {
  color: #666;
}

.btn-primary2 {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover2 {
  background-color: #0056b3;
}
</style>