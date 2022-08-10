<template>



    <div class=" justify-content-center w-100 p-3">

        <div class="form-group">
            <label for="exampleFormControlLablearea1">Name</label>
            <input type="text" id="TextInput" class="form-control" v-model="pokemon.Name">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="TextInput" rows="3" v-model="pokemon.Description"></textarea>
        </div>

        <div class="mb-3">
            <label for="formFile" class="form-label">Select an image</label>
            <input class="form-control" type="file" id="formFile">
        </div>

        <div class="d-flex justify-content-center">
            <button class="btn btn-secondary ml-auto p-2">
                <router-link class="btn btn-sm" to="/">Home</router-link>
            </button>
            <button class="btn btn-success ml-auto p-2 ms-1" @click="createClick()">Create
            </button>
        </div>



    </div>

</template>



<script>
//import axios from 'axios'



export default {
    data() {
        return {
            pokemon: {
                Name: null,
                ImageStore: null,
                Description: null,

            }
               


        }
    },
    method: {
       createClick() {
        console.log("count");
            // const urlHome = 'https://localhost:7039/api/createpokemon'
            //  axios({
            //     method: "POST",
            //     url: `${urlHome}`,
            //     data: {Name: pokemon.name, Description : pokemon.Description},
            //     config: {header: {"Content-Type" : "multipart/form-data"}}
            // });
            // // axios.post('https://localhost:7039/api/createpokemon', )
            // // .then((res) => {
            // //     this.pokemon = res.data;
            // // }).then((res) => {
            // //     console.log(res.data);
            // // })
        }
    }

}



</script>