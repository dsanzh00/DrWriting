<template>
    <div class="Menu">
        <div class="row mx-0">
            <div class="col-lg-mx">
                <table class="table table-bordered table-hover">
                    <thead>
                        <div class="card2">
                            <td>
                                <div class="card-body2">
                                    <h5 class="card-title2">{{ userData.fullname }}</h5>
                                    <p class="card-text2">{{ userData.type }}</p>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-info" v-on:click="editarUser()">
                                    <span class="material-icons-two-tone">
                                        edit
                                        </span>
                                </button>
                                <br/>
                                <button class="btn btn-danger" onclick="localStorage.clear(); location.href='http://localhost:8080'">
                                    <span class="material-icons-two-tone">
                                        logout
                                        </span>
                                </button>
                            </td>
                            <td>
                              <div class="card-body2">
                                <strong><p class="card-text2">Grupo: {{userData.userGroup}}</p></strong>                                  
                              </div>
                          </td>
                        </div>                        
                    </thead>
                    <thead>
                      <td>
                        <button class="btn btn-info" v-on:click="goToAll()">
                          <span class="material-icons-two-tone">
                            groups
                            </span>
                      </button>
                      </td>
                    </thead>
                </table>
                <card-comp class="mt-5 fondo1">
                    <div class="row-lg-6">
                        <h2>Proyectos</h2>
                    </div>
                    <div class="row-lg-6">
                        <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/projects'">
                            <span class="material-icons-two-tone">
                                open_in_full
                                </span>
                        </button>
                    </div>
                </card-comp>
                <card-comp class="mt-5 fondo1">
                  <div class="row-lg-6">
                      <h2>Categorías</h2>
                  </div>
                  <div class="row-lg-6">
                      <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/categories'">
                          <span class="material-icons-two-tone">
                              open_in_full
                              </span>
                      </button>
                  </div>
              </card-comp>
              <card-comp class="mt-5 fondo1">
                <div class="row-lg-6">
                    <h2>Etiquetas</h2>
                </div>
                <div class="row-lg-6">
                    <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/labels'">
                        <span class="material-icons-two-tone">
                            open_in_full
                            </span>
                    </button>
                </div>
            </card-comp>
            </div>
          </div>

    </div>
      
  </template>

<script>
import CardComp from "../../../components/CardComp.vue";
import axios from "axios";


export default {
  name: "MenuView",
  components: {
    CardComp,
  },
  data() {
    return {
      userData: {
        fullname: "",
        username: "",
        password: "",
        type: "",
        userGroup:"",
      },
    };
  },
  created() {
    this.fetchUserData();
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
        })
        .catch((error) => {
          console.error(error);
          alert("ERROR RECOGIENDO DATOS");
        });
    },
    editarUser() {
      this.$router.push("/editProfile/" + localStorage.getItem("id"));
    },
    goToAll(){
      this.$router.push("/menu");
    }
  },
};
</script>

<style scoped>
h2 {
  color: azure;
  text-align: center;
}

.btn {
  align-content: right;
}

.fondo1 {
  background-image: url("../../../assets/img/fondo1.jpg");
}

.card2 {
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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