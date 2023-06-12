<template>
    <div class="row">
      <div class="col">
          <table class="table table-bordered table-hover">
              <thead>
                  <th>
                      <td>
                          <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/categories'">
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
          <label for="project">Proyecto:</label>
          <input type="text" id="project" v-model="catData.project" required disabled>
        </div>
        <div>
            <label for="id">ID:</label>
            <input type="text" id="id" v-model="catData.id" required disabled>
          </div>

        <div>
          <label for="name">assignee:</label>
          <input type="text" id="name" v-model="catData.name" required>
        </div>
  
        <div>
          <label for="description">description:</label>
          <textarea  id="description" v-model="catData.description"  required/>
        </div>
    
        <p/>
            <button type="submit" >Guardar Cambios</button>
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
      catData: {
        id: "",
        name: "",
        description: "",
        project: ""
      },
    };
  },
  created() {
    // Obtener los datos del usuario a editar
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const docId = this.$route.params.id;
      console.log("https://app.konfuzio.com/api/v3/categories/" + docId);

      axios
        .get("https://app.konfuzio.com/api/v3/categories/" + docId, {
          headers: {
            accept: "application/json",
            Authorization:
              "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
          },
        })
        .then((result) => {
          this.catData = result.data;
        });
    },

    submitForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      const id = this.catData.id;
      const name = this.catData.name;
      const description = this.catData.description;
      const project = this.catData.project
      this.editCat(id, name, description, project);
    },

    editCat(id, name, description, project) {
      console.log(id + name + description + project);
      axios
        .post(
          "https://app.konfuzio.com/api/v3/auth/",
          new URLSearchParams({
            username: "dsanzh00@estudiantes.unileon.es",
            password: "tfg12345",
          })
        )
        .then((result) => {
          if (result.status === 200) {
            const headers = {
              accept: "application/json",
              Authorization:
                "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
              "Content-Type": "multipart/form-data",
              "X-CSRFTOKEN":
                "nR22nPV1m8eB9LtYemUDR36jHVMISbfSZ5jONMtALbZykbzfYF8GNl9dwtrwHttf",
            };

            axios
              .put(
                "https://app.konfuzio.com/api/v3/categories/" + id,
                {
                  id: id,
                  name: name,
                  api_name: name+"_api",
                  project: project,
                  description: description,
                  active_ai_model: null,
                  ai_model_type: "extraction_entity",
                  extraction_ai_model_parameters: {
                    additionalProp1: "",
                    additionalProp2: "",
                    additionalProp3: "",
                  },
                },
                {
                  headers: headers,
                }
              )
              .then((response) => {
                console.log("OK");
                console.log(response.data);
                alert("Categoría actualizada")
              })
              .catch((error) => {
                console.log("ERROR");
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.log("ERROR");
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
input[type="boolean"],
input[type="int"],
input[type="number"],
textarea,
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
  