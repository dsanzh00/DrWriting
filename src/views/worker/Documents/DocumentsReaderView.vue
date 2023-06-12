<template>
    <div class="row">
        <div class="col">
            <table class="table table-bordered table-hover">
                <thead>
                    <th >                        
                        <td>
                            <button class="btn btn-secondary" onclick="location.href='http://localhost:8080/menu'">
                                <span class="material-icons-two-tone">
                                    arrow_back
                                    </span>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" @click="download()">
                                <span class="material-icons-two-tone">
                                    download
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
                    <th>Proyecto</th>
                    <th>Estado</th>
                    <th>Imagen</th>
                    <th>Asignación</th>
                    <th>Tiempo OCR</th>
                    <th>Revisado</th>
                    <th>Acción</th></tr></thead>
                <tbody class="table-group-divider" id="Contenido">
                    <tr v-for="doc, i in documents" :key="doc.id">
                        <td>{{ (i+1) }}</td>
                        <td>{{ doc.data_file_name }}</td>
                        <td>{{ doc.project }}</td>
                        <td>{{ doc.dataset_status }}</td>                  
                        <td><button @click="mostrarImagen(doc.id)">Mostrar imagen</button></td>
                        <td>{{ doc.assignee }}</td>
                        <td>{{ Math.round(doc.ocr_time) + " Segs" }}</td>
                        <td>{{ doc.is_reviewed }}</td>
                        <td>
                          <strong>LECTURA</strong>
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
import Popup from "../../../components/PopupNav.vue";
import VModal from "vue-js-modal";

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
    return { documents: null };
  },
  mounted() {
    this.getDocuments();
  },
  methods: {
    getDocuments() {
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
          if (result.status === 200) {
            axios
              .get("https://app.konfuzio.com/api/v3/documents/", {
                params: {
                  limit: "90",
                },
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
                },
              })
              .then((response) => {
                response.data.results.forEach(function (i) {
                  if (i.dataset_status === 0) {
                    i.dataset_status = "No analizado";
                  } else if (i.dataset_status === 1) {
                    i.dataset_status = "Preparación";
                  } else if (i.dataset_status === 2) {
                    i.dataset_status = "Entrenamiento";
                  } else if (i.dataset_status === 3) {
                    i.dataset_status = "Test";
                  } else if (i.dataset_status === 4) {
                    i.dataset_status = "Excluido";
                  }
                });

                response.data.results.forEach(function (i) {
                  if (i.is_reviewed === false) {
                    i.is_reviewed = "NO";
                  } else if (i.is_reviewed === true) {
                    i.is_reviewed = "SI";
                  }
                });

                response.data.results.forEach(function (i) {
                  if (i.project === 1804) {
                    i.project = "TFG Daniel Sanz";
                  } else {
                    i.project = "Otros";
                  }
                });

                console.log(response.data.results);
                this.documents = response.data.results;
              });
          }
        });
    },

    eliminarDoc(id) {
      axios
        .delete("https://app.konfuzio.com/api/v3/documents/" + id + "/", {
          headers: {
            accept: "*/*",
            Authorization:
              "Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==",
            "X-CSRFTOKEN":
              "dsLcDkJ4VmfCboSGKnceqqZaNuK7DDr7SIY2Ah44kCTkXrHxgu0QbooYC0M1ytc4",
          },
        })
        .then((result) => {
          console.log(result.status);
        });

      setTimeout(() => {
        document.location.reload(true);
      }, 500);
    },

    editDoc(id){
        this.$router.push('/editDoc/' + id);
    }, 

    mostrarImagen(id) {
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
          if (result.status === 200) {
            window.open(
              "https://app.konfuzio.com/doc/show-original/" + id + "/",
              "_blank"
            );
          }
        });
    },

    download() {
      const fileUrl =
        "https://drive.google.com/file/d/1HTW6iU_6c2BRSBtVuU2d1dQVnBnJQvIh/view?usp=sharing";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "PDF_FINAL_TRANSCRITO.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
.fondo1 {
  color: beige;
  background-image: url("../../../assets/img/fondo1.jpg");
}
</style>