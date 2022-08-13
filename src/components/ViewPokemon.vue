<template>

    <div class=" justify-content-center w-100 p-3">

        <form>

            <div class="text-center">
                <img :src="image" class="rounded" style="width: 25%; height: 25%" alt="Pokemon Image">
            </div>
            <fieldset disabled>
                <div class="form-group">
                    <label for="disabledTextInput">Name</label>
                    <input type="text" id="disabledTextInput" class="form-control" v-bind:value="pokemons.name">
                </div>

                <div class="mb-3">
                    <label for="disabledTextInputs" class="form-label">Description</label>
                    <textarea class="form-control" id="disabledTextInput" rows="3"
                        v-bind:value="pokemons.description"></textarea>
                </div>


            </fieldset>
        </form>
        <div class="d-flex justify-content-center">
            <router-link class="btn btn-secondary ml-auto p-2 btn-small" to="/">Back to Pokemons</router-link>
        </div>

    </div>

</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            pokemons: [],
            image: require('@/assets/logo.png')
        }
    },

    mounted() {
        axios.get('https://localhost:7039/api/getpokemon/' + this.$route.params.id)
            .then((res) => {
                this.pokemons = res.data;
                console.log(res.data);
                if (res.data.imgByte != null && res.data.imgByte > 0) {
                    this.image = 'data:image/jpeg;base64' + res.data.imgByte;

                }
            });

        if(this.pokemons.imgByte != null && this.pokemons.imgByte.length > 0 ){
            this.image = 'data:image/jpeg;base64' +this.pokemons.imgByte;

        }


    }

}



</script>