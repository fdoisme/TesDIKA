import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const ToDoStores = defineStore('todostore', {
  state: () => {
    return {
      catatan: []
    }
  },
  actions: {
    fetchCatatan() {
      if (!localStorage.ToDo) {
        this.catatan = [
          {
            id: 0,
            judul: "Ini Catatan Pertama Saya",
            isi: "1. Kandidat peserta membuka Link Website : https://event.juaracoding.co.id/ \n2. Isi registrasi pendaftaran \n3. Isi data detail tambahan \n4. Isi other field \n5. Klik Create My New Account",
            tanggal: "29/2/2024"
          },
          {
            id: 1,
            judul: "Ini Catatan Kedua Saya",
            isi: "Kerjakan Soal yang FrontEnd Vue.js",
            tanggal: "29/2/2024"
          },
          {
            id: 2,
            judul: "Ini Catatan Ketiga Saya",
            isi: "Selesai Mengerjakan Soal Vue.js",
            tanggal: "1/3/2024"
          },
        ]
        localStorage.setItem("ToDo", JSON.stringify(this.catatan))
      } else if (localStorage.ToDo) {
        const data = JSON.parse(localStorage.getItem("ToDo"))
        this.catatan = data
      }
    },
  },
})
