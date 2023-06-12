<template>
    <div class="row">
      <div class="col">
          <table class="table table-bordered table-hover">
              <thead>
                  <th>
                      <td>
                          <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/projects'">
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
            <label for="id">ID:</label>
            <input type="text" id="id" v-model="projData.id" required disabled>
        </div>
        <div>
          <label for="name">Nombre del proyecto:</label>
          <input type="text" id="name" v-model="projData.name" required >
      </div>
      
        <div>
          <label for="auto_delete_documents_after_days">Días para su eliminación:</label>
          <input type="text" id="auto_delete_documents_after_days" v-model="projData.auto_delete_documents_after_days" required >
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
      projData: {
        id: "",
        name: "",
        auto_delete_documents_after_days: "",
      },
    };
  },
  created() {
    // Obtener los datos del usuario a editar
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const projId = this.$route.params.id;
      console.log("https://app.konfuzio.com/api/v3/projects/" + projId);

      axios
        .get("https://app.konfuzio.com/api/v3/projects/" + projId, {
          headers: {
            accept: "application/json",
            Authorization:
              "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
          },
        })
        .then((result) => {
          if (result.data.auto_delete_documents_after_days === null) {
            result.data.auto_delete_documents_after_days = "Sin eliminación";
          }

          this.projData = result.data;
          console.log(this.projData);
        });
    },

    submitForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      const id = this.projData.id;
      const name = this.projData.name;
      const days = this.projData.auto_delete_documents_after_days;
      this.editProj(id, name, days);
    },

    editProj(id, name, days) {
      console.log(id + name + days);
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
                "https://app.konfuzio.com/api/v3/projects/" + id,
                {
                  id: id,
                  name: name,
                  storage_name: null,
                  priority_processing: true,
                  ocr_method: "local",
                  auto_rotate_documents: null,
                  category_ai_model_parameters: {
                    additionalProp1: "",
                    additionalProp2: "",
                    additionalProp3: "",
                  },
                  category_ai: null,
                  decimal_separator: ".",
                  auto_delete_documents_after_days: days,
                },
                {
                  headers: headers,
                }
              )
              .then((response) => {
                console.log("OK");
                console.log(response.data);
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
  