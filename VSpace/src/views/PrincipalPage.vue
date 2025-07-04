<template>
  <div class="principal-page">
    <NavbarComplete />
  </div>
</template>

<script>
import NavbarComplete from '@/components/NavbarComplete.vue'

export default {
  name: 'PrincipalPage',
  components: {
    NavbarComplete
  }
}
</script>

<style scoped>
.principal-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, black, #3A0064);
  color: white;
  font-family: "Inter", sans-serif;
}
</style>