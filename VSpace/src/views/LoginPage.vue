<template>
  <div class="login-page">
    <NavbarSimples />
    <div class="login-container">
      <div class="login-box">
        <h2 class="login-title">Acesse sua conta</h2>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-group">
            <label for="email">E-mail</label>
            <input
              id="email"
              v-model="email"
              type="text"
              placeholder="Digite seu e-mail"
            />
          </div>
          
          <div class="input-group">
            <label for="password">Senha</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          
          <button type="submit" class="login-button">Entrar</button>
          <!-- Removi o required para visualização do front-end -->
        </form>
        
        <div class="login-footer">
          <router-link to="/register" class="create-account">Não tem cadastro? Criar conta</router-link>
        </div>
      </div>
    </div>
    <router-link to="/" class="backpage"><strong>← Voltar</strong></router-link>
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
import NavbarSimples from '@/components/NavbarSimples.vue'

export default {
  name: 'LoginPage',
  components: {
    NavbarSimples
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Tentativa de login:', {
        email: this.email,
        password: this.password
      });

      this.$router.push('/principal'); 
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, black, #3A0064);
  color: white;
  font-family: "Inter", sans-serif;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.login-box {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 500;
  color: #b388ff;
}

.input-group input {
  padding: 0.8rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-group input:focus {
  outline: none;
  border-color: #b388ff;
  box-shadow: 0 0 0 3px rgba(179, 136, 255, 0.2);
}

.login-button {
  background: linear-gradient(to right, #7c4dff, #b388ff);
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(179, 136, 255, 0.4);
}

.login-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.login-footer a {
  color: #b388ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-footer a:hover {
  color: #fff;
  text-decoration: underline;
}

.backpage {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 20px;
  text-align: left;
  font-size: 0.8rem;
  margin-left: 12px;
  display: flex;
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
