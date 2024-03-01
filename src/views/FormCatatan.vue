<template>
    <div class="w-full max-w-[70%] flex flex-col gap-5 py-10">
        <button @click="handleBack" class="bg-purple-400 rounded-full p-3 self-start">
            <i class="fa-solid fa-left-long"></i>
            Kembali
        </button>
        <div class="flex flex-col gap-3">
            <label class="text-2xl font-bold" for="judul">Judul</label>
            <input class="rounded-md h-10" type="text" name="judul" id="judul" placeholder="Masukkan Judul"
                v-model="form.judul">
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-2xl font-bold" for="isi">Isi Catatan</label>
            <textarea class="rounded-md" name="isi" id="isi" cols="30" rows="10" placeholder="Masukkan Catatan"
                v-model="form.isi"></textarea>
        </div>
        <p v-if="requirement" class="text-red-600 text-2xl font-extrabold self-center">{{ requirement }}</p>
        <button @click="handleSave" class="bg-purple-400 rounded-full p-3 self-center border-solid">
            Save
            <i class="fa-solid fa-file-export"></i>
        </button>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { ToDoStores } from '../stores/todostore.js'
export default {
    data() {
        return {
            form: {
                judul: null,
                isi: null
            },
            isEdit: false,
            requirement: null
        }
    },
    methods: {
        ...mapActions(ToDoStores, ['fetchCatatan']),
        handleBack() {
            this.$router.push(`/`)
        },
        handleSave() {
            if (!this.form.judul) {
                this.requirement = "Judul Catatan Tidak Boleh Kosong"
            } else if (!this.form.isi) {
                this.requirement = "Isi Catatan Tidak Boleh Kosong"
            } else if (this.isEdit) {
                this.catatan[this.$route.params.id].judul = this.form.judul
                this.catatan[this.$route.params.id].isi = this.form.isi
                localStorage.setItem("ToDo", JSON.stringify(this.catatan))
                this.$router.push(`/`)
            } else {
                const date = new Date()
                this.form.id = this.catatan.length
                this.form.tanggal = date.toLocaleDateString("id-ID")
                this.catatan.push(this.form)
                localStorage.setItem("ToDo", JSON.stringify(this.catatan))
                this.$router.push(`/`)
            }
        }
    },
    created() {
        this.fetchCatatan()
        if (this.$route.params.id) {
            const data = this.catatan[this.$route.params.id]
            this.form.judul = data.judul
            this.form.isi = data.isi
            this.isEdit = true
        }
    },
    computed: {
        ...mapWritableState(ToDoStores, ['catatan'])
    },
}
</script>