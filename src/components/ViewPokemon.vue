<template>

    <div class=" justify-content-center w-100 p-3">

        <form>

            <div class="text-center">
                <img :src="{ path: 'https://localhost:7039/wwwroot/images/' + pokemons.image }" class="rounded"
                    alt="Pokemon Image">
            </div>
            <fieldset disabled>
                <div class="form-group">
                    <label for="disabledTextInput">Name</label>
                    <input type="text" id="disabledTextInput" class="form-control" :placeholder="[[pokemons.name]]">
                </div>

                <!-- <div class="form-group">
                    <label for="disabledTextInput">Description</label>
                    <input type="text" id="disabledTextInput" class="form-control"
                        :placeholder="[[pokemons.description]]">
                </div> -->

                <div class="mb-3">
                    <label for="disabledTextInputs" class="form-label">Description</label>
                    <textarea class="form-control" id="disabledTextInput" rows="3"></textarea>
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
            pokemons: []
        }
    },

    mounted() {
        axios.get('https://localhost:7039/api/getpokemon/' + this.$route.params.id)
            .then((res) => {
                this.pokemons = res.data;
            });


    }

}



</script>