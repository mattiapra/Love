<script setup>
const ready = ref(false)

useHead({
  title: 'Buon 21esimo compleanno amore mio',
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="opacity" mode="out-in">
      <Boot v-if="!ready" :load-from="2001" :load-to="2022" @ready="ready = true" />
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>
