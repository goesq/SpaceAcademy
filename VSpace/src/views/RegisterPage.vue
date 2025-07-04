<template>
  <div class="register-page">
    <NavbarSimples />
    <div class="register-container">
      <div class="register-box">
        <h2 class="register-title">Crie sua conta</h2>
        
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="input-group">
            <label for="username">Usuário</label>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Escolha seu usuário"
              required
            />
          </div>
          
          <div class="input-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">Senha</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div class="input-group">
            <label for="confirmPassword">Confirme a senha</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              required
            />
          </div>
          
          <button type="submit" class="register-button">Cadastrar</button>
        </form>
      </div>
    </div>
    <router-link to="/login" class="backpage"><strong>← Voltar</strong></router-link>
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
  name: 'RegisterPage',
  components: {
    NavbarSimples
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }

      // Aqui você pode chamar sua API para registrar o usuário
      console.log('Tentativa de cadastro:', {
        username: this.username,
        email: this.email,
        password: this.password
      });

      // Resetar campos se quiser
      // this.username = '';
      // this.email = '';
      // this.password = '';
      // this.confirmPassword = '';
    }
  }
}
</script>

<style scoped>
/* Apenas troquei nomes das classes para refletir a página de cadastro, mantendo o estilo igual */

.register-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, black, #3A0064);
  color: white;
  font-family: "Inter", sans-serif;
}

.register-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.register-box {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

.register-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.register-form {
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
  color: #b388ff; /* Roxo claro para contrastar com o fundo */
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

.register-button {
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

.register-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(179, 136, 255, 0.4);
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
