<template>
    <div
        class="flex flex-col py-3 justify-center items-center w-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-purple-300 gap-3">
        <p class="text-2xl">{{ item.judul }}</p>
        <div class="flex gap-5">
            <button @click="handleDetails(item.id)">
                <i class="fa-solid fa-file hover:text-green-500 fa-2x"></i>
            </button>
            <button @click="handleEdit(item.id)">
                <i class="fa-solid fa-pen-to-square  hover:text-yellow-500 fa-2x"></i>
            </button>
            <button @click="handleDelete(item.id)">
                <i class="fa-solid fa-trash hover:text-red-500 fa-2x"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { ToDoStores } from '../stores/todostore.js'
export default {
    props: ["item"],
    methods: {
        ...mapActions(ToDoStores, ['fetchCatatan']),
        handleDetails(id) {
            this.$router.push(`/${id}`)
        },
        handleEdit(id) {
            this.$router.push(`/${id}/edit`)
        },
        handleDelete(id) {
            this.catatan = this.catatan.filter((el) => el.id != id)
            localStorage.setItem("ToDo", JSON.stringify(this.catatan))
        }
    },
    computed: {
        ...mapWritableState(ToDoStores, ['catatan'])
    },
    created() {
        this.fetchCatatan()
        this.data = this.catatan[this.$route.params.id]
    },
}
</script>

<style></style>