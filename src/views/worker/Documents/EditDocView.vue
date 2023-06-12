<template>
    <div class="row">
      <div class="col">
          <table class="table table-bordered table-hover">
              <thead>
                  <th>
                      <td>
                          <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/documents'">
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
            <input type="text" id="id" v-model="docData.id" required disabled>
          </div>

        <div>
          <label for="assignee">Asignación:</label>
          <input type="text" id="assignee" v-model="docData.assignee" required>
        </div>
  
        <div>
          <label for="data_file_name">Nombre del documento:</label>
          <input type="text" id="data_file_name" v-model="docData.data_file_name"  required>
        </div>

        <div>
            <label for="category">Categoría:</label>
            <select id="category" v-model="docData.category" placeholder="Categoría" required>
              <option value="5611">Prueba</option>
              <option value="5692">Test1</option>
            </select>
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
      docData: {
        id: "",
        assignee: "",
        data_file_name: "",
        category: "",
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
      console.log("https://app.konfuzio.com/api/v3/documents/" + docId);

      axios
        .get("https://app.konfuzio.com/api/v3/documents/" + docId, {
          headers: {
            accept: "application/json",
            Authorization:
              "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
          },
        })
        .then((result) => {
          this.docData = result.data;
        });
    },

    submitForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      const id = this.docData.id;
      const assignee = this.docData.assignee;
      const name = this.docData.data_file_name;
      const category = this.docData.category;
      this.editDoc(id, name, assignee, category);
    },

    editDoc(id, name, assignee, category) {
      console.log(id + name + assignee + category);
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
                "https://app.konfuzio.com/api/v3/documents/" + id,
                {
                  assignee: assignee,
                  data_file_name: name,
                  category: category,
                  category_is_revised: true,
                  callback_url: "",
                  callback_status_code: 2147483647,
                  is_reviewed: true,
                  sync: true,
                },
                {
                  headers: headers,
                }
              )
              .then((response) => {
                console.log("OK");
                console.log(response.data);
                alert("Documento actualizado")
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
  