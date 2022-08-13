<template>



    <div class=" justify-content-center w-100 p-3">


        <!-- <img :src="fileSrc" alt="Pokemon Image" class="rounded-circle"> -->

        <div class="form-group">
            <label for="exampleFormControlLablearea1">Name</label>
            <input type="text" id="TextInput" class="form-control" v-model="name">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">description</label>
            <textarea class="form-control" id="TextInput" rows="3" v-model="description"></textarea>
        </div>

        <div class="mb-3">
            <label for="upload-pic" class="form-label">Select an image</label>
            <!-- <img class="rounded-circle mt-5 imgTag" style="width:100%;heigh:100%;" :src="fileSrc"> -->
            <input @change="uploadImage" class="form-control" type="file" id="upload-pic">
        </div>

        <div class="d-flex justify-content-center">
            <button class="btn btn-secondary ml-auto p-2">
                <router-link class="btn btn-sm" to="/">Home</router-link>
            </button>
            <button class="btn btn-success ml-auto p-2 ms-1" v-on:click="createClick">Create</button>
        </div>



    </div>

</template>



<script>
import axios from 'axios'



export default {
    data() {
        return {

            name:"",
            description: "",
            selectedFile: null,


        }
    },
    methods: {

        uploadImage(event) {
            this.selectedFile = event.target.files[0];
        },
        async createClick() {
                const fd = new FormData();
                fd.append("Name", this.name);
                fd.append("Files", this.selectedFile);
                fd.append("Description", this.description);
                axios.post('https://localhost:7039/api/createpokemon',fd)
                .then((res) => {
                    console.log(res);
                })


        },
        
    }


}



</script>