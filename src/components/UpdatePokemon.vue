<template>


    <div class=" justify-content-center w-100 p-3">
        
                <div class="form-group">
                    <label for="exampleFormControlLablearea1">Name</label>
                    <input v-model="Name" type="text" id="TextInput" class="form-control" :placeholder="[[pokemons.name]]">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <input v-model="Desc" class="form-control" id="TextInput" rows="3">
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">Select an image</label>
                    <input class="form-control" type="file" id="formFile">
                </div>

      

            <div class="d-flex justify-content-center">
                <button class="btn btn-secondary ml-auto p-2"><router-link class="btn btn-sm" to="/">Home</router-link></button>
                <button class="btn btn-warning mr-auto p-2 ms-3" type="submit" @click="updatePokemon(this.$route.params.id)"><router-link class="btn btn-sm" to="/">Update</router-link></button>
            </div>


    </div>

</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            pokemons: [],
            Name:"",
            Desc: ""

        }
    },

    mounted() {
        console.log(this.$route.params.id);
        axios.get('https://localhost:7039/api/getpokemon/' + this.$route.params.id)
            .then((res) => {
                this.pokemons = res.data;
            });

    },
    method: {
        updatePokemon(id){
            axios.put('https://localhost:7039/api/updatepokemon/'+ id,{
                name: this.Name,
                description: this.Desc,
            })
        }
    }

}


</script>