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
                    </th>
                </thead>
            </table>
        </div>
    </div>
  <div class="row">
    <div class="col">
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead class="fondo1"><tr><th>#</th><th>Nombre</th><th>Proyecto</th><th>Creador</th><th>Descripción</th><th>Acción</th></tr></thead>
                <tbody class="table-group-divider" id="Contenido">
                    <tr v-for="cat, i in categories" :key="cat.id">
                        <td>{{ (i+1) }}</td>
                        <td>{{ cat.name }}</td>
                        <td>{{ cat.project }}</td>
                        <td>Daniel Sanz</td>
                        <td>{{ cat.description }}</td> 
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
import axios from 'axios';
export default{

    
    
    data(){
        return{ categories:null}
    },
    mounted(){
        this.getCategories();
    },
    methods:{

        getCategories(){
            axios.post('https://app.konfuzio.com/api/v3/auth/', new URLSearchParams({
            'username': 'dsanzh00@estudiantes.unileon.es',
            'password': 'tfg12345'}))
            .then(
                result => {
                    console.log(result.data);
                    console.log(result.data.token);
                    if(result.status === 200){
                        axios.get('https://app.konfuzio.com/api/v3/categories/', {
                            params: {
                                'limit': '80',
                                
                            },
                            headers: {
                                'accept': 'application/json',
                                'Authorization': 'Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ=='
                            }
                            }).then(
                            response => {
                                console.log(response.data.results)
                                this.categories = response.data.results;
                            });
                    }
                }

                
            );

            
        },

        eliminarCat(id){
            
            axios.delete('https://app.konfuzio.com/api/v3/categories/'+id+'/', {
                headers: {
                    'accept': '*/*',
                   'Authorization': 'Basic ZHNhbnpoMDBAZXN0dWRpYW50ZXMudW5pbGVvbi5lczp0ZmcxMjM0NQ==',
                    'X-CSRFTOKEN': 'dsLcDkJ4VmfCboSGKnceqqZaNuK7DDr7SIY2Ah44kCTkXrHxgu0QbooYC0M1ytc4'
                }
            }).then(
                result => {
                    console.log(result.status)
                }
            );

            setTimeout(() => {document.location.reload(true);}, 500)
        },

        editCat(id){
            this.$router.push('/editCategory/' + id);
        }

    }
}
</script>

<style scoped>
.fondo1 {
    color: beige;
    background-image: url('../../../assets/img/fondo1.jpg');
}

</style>