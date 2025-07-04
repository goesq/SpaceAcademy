<template>
  <header class="header">
    <div class="logo-container">
      <router-link to="/principal">
        <img src="../assets/images/SpaceW2.png" alt="Space Academy" class="logo" />
      </router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/courses" class="nav-link">Courses</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </header>
</template>

<style lang="css">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
}

.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.logo-container a {
  display: inline-block;
}

.logo {
  height: 90px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #64ffda;
}

.nav-link.router-link-exact-active {
  color: #64ffda;
  border-bottom: 2px solid #64ffda;
  padding-bottom: 5px;
}
</style>