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
    <div class="row">
        <div class="col">
            <div class="card mt-4 col-lg-6">
                <form @submit="submitForm">
                    <div class="mb-3 mt-2 ">
                      <input 
                      type="text" 
                      class="form-control"
                      id="id"
                      name="id" 
                      placeholder="Project ID"
                      >              
                    </div>
                    <div class="mb-3 mt-2 ">
                        <input 
                        type="text" 
                        class="form-control"
                        id="assignee"
                        name="assignee" 
                        placeholder="Asignación"
                        >              
                      </div>
                    <div class="mb-3 mt-2">
                        <input type="file" id="inputImagen">
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
    return {};
  },

  methods: {
    submitForm(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

      const fileInput = document.getElementById("inputImagen");
      const imageFile = fileInput.files[0];
        console.log(imageFile)
      // Crea una instancia de FileReader
      const reader = new FileReader();

      // Escucha el evento load, que se activa cuando la lectura del archivo se completa
      reader.addEventListener("load", () => {
        // Obtén el contenido del archivo en forma de ArrayBuffer
        const fileData = reader.result;

        // Crea un objeto Blob a partir del contenido del archivo
        const blob = new Blob([fileData], { type: imageFile.type });
        blob.name = imageFile.name;
        console.log(blob.name)

        const idValue = event.target.elements.id.value; // Valor del campo de texto "id"
        const assignee = event.target.elements.assignee.value; // Valor del campo de texto "id"
        this.AddDoc(blob, idValue, assignee); // Llamar a la función AddDoc() pasando los parámetros
      });

      // Lee el archivo como un ArrayBuffer
      reader.readAsArrayBuffer(imageFile);
    },

    AddDoc(image, id, assignee) {
        console.log(image)
        console.log(id)
        console.log(assignee)
      const form = new FormData();
      form.append("project", id);
      form.append("data_file", image, image.name);
      form.append("category", "");
      form.append("callback_url", "");
      form.append("callback_status_code", "");
      form.append("sync", "");
      form.append("assignee", assignee);

      axios
        .post(
          "https://app.konfuzio.com/api/v3/auth/",
          new URLSearchParams({
            username: "dsanzh00@estudiantes.unileon.es",
            password: "tfg12345",
          })
        )
        .then((result) => {
          console.log(result.data.token);
          console.log(result.status);
          if (result.status === 200) {
            const headers = {
              Accept: "application/json",
              "X-CSRFTOKEN":
                "fQdNF1QRvEwzz3bvL1hvwA4BJSOpzidNG59o9L2C4jSzbt9fbCfBykRpLMYxXDz0",
              Authorization:
                "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
            };

            axios
              .post("https://app.konfuzio.com/api/v3/documents/", form, {
                headers: headers,
              })
              .then((response) => {
                alert("Documento añadido")
                console.log("OK");
                console.log(response.data);
              })
              .catch((error) => {
                console.log("ERROR");
                console.error(error);
              });
          }
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
