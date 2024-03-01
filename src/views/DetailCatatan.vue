<template>
    <div class="w-full max-h-screen max-w-[80%] flex flex-col gap-5 pt-5">
        <button @click="handleBack" class="bg-purple-400 rounded-full p-3 self-start absolute left-10">
            <i class="fa-solid fa-left-long"></i>
            Kembali
        </button>
        <div class="absolute right-10 flex flex-col gap-2">
            <button @click="handleEdit(data.id)">
                <i class="fa-solid fa-pen-to-square  hover:text-yellow-500 fa-2x"></i>
            </button>
            <button @click="handleDelete(data.id)">
                <i class="fa-solid fa-trash hover:text-red-500 fa-2x"></i>
            </button>
        </div>
        <h1 class="text-7xl font-bold self-center">{{ data.judul }}</h1>
        <p class="text-2xl self-end">{{ data.tanggal }}</p>
        <p class="whitespace-pre-line text-4xl">{{ data.isi }}</p>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { ToDoStores } from '../stores/todostore.js'
export default {
    data() {
        return {
            data: null
        }
    },
    computed: {
        ...mapWritableState(ToDoStores, ['catatan'])
    },
    methods: {
        ...mapActions(ToDoStores, ['fetchCatatan']),
        handleEdit(id) {
            this.$router.push(`/${id}/edit`)
        },
        handleDelete(id) {
            this.catatan = this.catatan.filter((el) => el.id != id)
            localStorage.setItem("ToDo", JSON.stringify(this.catatan))
            this.$router.push(`/`)
        },
        handleBack() {
            this.$router.push(`/`)
        },
    },
    created() {
        this.fetchCatatan()
        this.data = this.catatan[this.$route.params.id]
    },
}
</script>
