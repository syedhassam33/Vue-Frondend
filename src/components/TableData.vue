<template>

    <div>
        <div>
            <h1 class="display-3  d-flex justify-content-center">Pokemons Gotta Catch 'Em All</h1>
        </div>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokemons" :key="pokemon.Id">
                    <td>{{ pokemon.id }}</td>
                    <td>{{ pokemon.name }}</td>
                    <td>{{ pokemon.description }}</td>
                    <td>
                        <img :src="image" alt="Pokemon Image"
                            class="rounded-circle" style="width: 50px; height: 50px;">
                    </td>
                    <td>

                        <router-link class="btn btn-primary" :to="{ path: '/view/' + pokemon.id }">View</router-link>
                        <router-link class="btn btn-warning ms-1" :to="{ path: '/update/' + pokemon.id }">Update
                        </router-link>
                        <button class="btn btn-danger ms-1" type="button" @click="deleteClick(pokemon.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
        axios.get('https://localhost:7039/api/pokemon')
            .then((res) => {
                this.pokemons = res.data;
            });

    },
    methods: {
        deleteClick(id) {
            axios.delete('https://localhost:7039/api/deletepokemon/'+id)
                .then((res) => {
                    this.pokemons = res.data;
                });
        }
    }
}

</script>