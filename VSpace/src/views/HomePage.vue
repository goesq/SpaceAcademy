<template>
  <div class="container">
    <header class="header">
      <div class="logo-container">
        <img src="../assets/images/SpaceWhite.png" alt="Space Academy" class="logo" />
      </div>
    </header>

    <main class="main-content">
      <router-link to="/login" class="access-button">Acessar</router-link>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/images/SpaceA.png" alt="Logo" class="footer-logo-img" />
        </div>
        <div class="footer-info">
          <a href="mailto:contato@spaceademy.com" class="footer-email">contato@spaceacademy.com</a>
          <div class="footer-copyright">
            &copy; 2025 SpaceAcademy - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  position: relative;
}

.header {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.logo-container {
  text-align: center;
}

.logo {
  max-width: 500px;
  height: auto;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  padding: 40px 20px;
}

.access-button {
  width: 200px;
  height: 60px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, #6a00ff, #3A0064);
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
}

.access-button:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  background: linear-gradient(to right, #7f1dff, #4c0072);
}

/* Footer Styles */
.footer {
  background: transparent;
  padding: 15px 0;
  width: 100%;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1850px;
  margin: 0 auto;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo-img {
  max-height: 50px;
  filter: brightness(0) invert(1);
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.footer-email {
  color: #b388ff;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .logo {
    max-width: 250px;
  }

  .footer-content {
    flex-direction: column;
    gap: 15px;
  }

  .footer-info {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .access-button {
    width: 180px;
    height: 55px;
    font-size: 0.9rem;
  }

  .logo {
    max-width: 200px;
  }

  .footer-logo-img {
    max-height: 30px;
  }

  .footer-email {
    font-size: 12px;
  }

  .footer-copyright {
    font-size: 10px;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to bottom, black, #3A0064);
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  color: white;
  overflow-x: hidden;
}
</style>