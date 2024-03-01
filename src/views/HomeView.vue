<template>
  <div class="w-full overflow-y-auto max-h-screen max-w-[30%] flex flex-col gap-3 py-10 pr-6">
    <ToDo v-for="(item) in catatan" :key="item.id" :item="item" />
    <button class="absolute right-10 bottom-10" @click="handleAdd">
      <i class="fa-solid fa-circle-plus fa-4x text-yellow-400"></i>
    </button>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { ToDoStores } from '../stores/todostore.js'
import ToDo from '../components/ToDo.vue'
export default {
  created() {
    this.fetchCatatan()
  },
  computed: {
    ...mapWritableState(ToDoStores, ['catatan'])
  },
  methods: {
    ...mapActions(ToDoStores, ['fetchCatatan']),
    handleAdd() {
      this.$router.push(`/add`)
    }
  },
  components: {
    ToDo
  },
}
</script>
