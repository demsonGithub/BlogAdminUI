<template>
  <div class="div-wrapper">
    <h1>{{ showCount }}</h1>

    <button type="button" @click="addBtn">count is:{{ count }}</button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from '@/store/index'

const store = useStore()

const count = ref(0)
const showCount = computed(() => {
  return store.getters['getCount']
})

const addBtn = () => {
  store.commit('setCount', ++count.value)
}
</script>
<style lang="scss" scope>
.div-wrapper {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
