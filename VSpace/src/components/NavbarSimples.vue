<template>
  <header class="navbar">
    <div class="logo-container">
      <img src="../assets/images/SpaceWhite.png" alt="Space Academy" class="logo" />
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
}

.logo-container {
  height: 90px;
}

.logo {
  height: 100%;
  width: auto;
  object-fit: contain;
}
</style>