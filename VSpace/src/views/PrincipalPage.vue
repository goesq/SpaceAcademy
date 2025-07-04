<template>
  <div class="principal-page">
    <NavbarComplete />
  </div>
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