<template>


    <div class=" justify-content-center w-100 p-3">

        <div class="text-center">
            <img :src="image" class="rounded" alt="Pokemon Image">
        </div>

        <div class="form-group">
            <label for="exampleFormControlLablearea1">Name</label>
            <input v-model="name" type="text" id="TextInput" class="form-control" :v-bind:value="pokemons.name">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <input v-model="desc" class="form-control" id="TextInput" rows="3" :v-bind:value="pokemons.desc">
        </div>

        <div class="mb-3">
            <label for="formFile" class="form-label">Select an image</label>
            <input @change="uploadImage" class="form-control" type="file" id="formFile">
        </div>



        <div class="d-flex justify-content-center">
            <button class="btn btn-secondary ml-auto p-2">
                <router-link class="btn btn-sm" to="/">Home</router-link>
            </button>
            <button class="btn btn-warning mr-auto p-2 ms-3" type="submit"
                @click="updateClick(this.$route.params.id)">Update</button>
            <!-- <router-link class="btn btn-warning mr-auto p-2 ms-3" to="/"  v-on:click="updateClick(this.$route.params.id)">Update</router-link> -->
        </div>


    </div>

</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            pokemons: [],
            image: require('@/assets/logo.png'),
            name: "",
            desc: "",
            selectedFile: "",

        }
    },

    mounted() {
        console.log(this.$route.params.id);
        axios.get('https://localhost:7039/api/getpokemon/' + this.$route.params.id)
            .then((res) => {
                this.pokemons = res.data;
            });

    },

    methods: {

        uploadImage(event) {
            this.selectedFile = event.target.files[0];
        },
        updateClick(id) {
            const fd = new FormData();
            fd.append("Name", this.name);
            fd.append("Files", this.selectedFile);
            fd.append("Description", this.desc);
            axios.put('https://localhost:7039/api/updatepokemon/' + id, fd)


        }

    }
}


</script>