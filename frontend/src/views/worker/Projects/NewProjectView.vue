<template>
    <div class="row">
      <div class="col">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>
                <td>
                    <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/projects'">
                        <span class="material-icons-two-tone">
                            arrow_back
                            </span>
                    </button>
                </td>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card mt-4 col-lg-6">
          <form @submit="submitForm">
            <div class="mb-3 mt-2">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Nombre del proyecto"
                required
                v-model="project.name"
              >
            </div>
            <div class="mb-3 mt-2">
              <input
                type="text"
                class="form-control"
                id="days"
                name="days"
                placeholder="Días para que se autoelimine"
                required
                v-model="project.days"
              >
            </div>
            <div class="mb-3 mt-2">
              <button type="submit">Enviar</button>
            </div>
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
      project: {
        name: "",
        days: "",
      },
    };
  },

  methods: {
    submitForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      const name = this.project.name;
      const days = this.project.days;
      this.addProject(name, days);
    },

    addProject(name, days) {

      console.log(name + days);
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
              .post("https://app.konfuzio.com/api/v3/projects/", {
                "name": name,
                "decimal_separator": "",
                "priority_processing": "",
                "ocr_method": "",
                "auto_rotate_documents": "",
                "category_ai_model_parameters": "",
                "category_ai_model_parameters": days
              }, {
                headers: headers,
              })
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
.card {
  border: none;
  box-shadow: 0 2px 4px black, 0 8px 16px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

input[type="submit"],
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
