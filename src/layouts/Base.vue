<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand logo" to="/">
          <span> Vue-Shop </span>
        </router-link>
        <div class="ml-auto">
          <div class="nav-items" v-if="Object.keys(this.user).length > 0">
            <img :src="user.SJ" class="img-thumbnail profile-image" alt />
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{
                cart.length
              }}</span>
            </router-link>
            <button class="btn btn-primary" type="button" @click="logOut">
              LogOut
            </button>
          </div>

          <!-- <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login"
						>Login <i class="fab fa-google"></i
					></router-link> -->
          <button
            v-else
            class="btn btn-primary my-2 my-sm-0"
            @click="googleLogin"
          >
            Login <i class="fab fa-google"></i>
          </button>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
    <div class="fill-space"></div>
    <footer class="footer">
      <div>Author: Jason</div>
      <div>Phone No. 0906-802-954</div>
      <div>Email: tuanchuhoang@gmail.com</div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Base",
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"]),
  },

  methods: {
    ...mapActions("account", ["logout", "login"]),
    async googleLogin() {
      const googleUser = await this.$gAuth.signIn();
      // const info = await googleUser.getAuthResponse();
      const profile = await googleUser.getBasicProfile();
      this.login(profile);
    },
    async logOut() {
      const response = await this.$gAuth.signOut();
      this.logout(response);
    },
  },
};
</script>

<style scoped>
.nav-items > img,
.nav-items a {
  margin-right: 30px;
}

nav,
footer {
  background-color: teal;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: #ffffff !important;
}
/* 
.logo {
  background-color: transparent;
} */

.logo:hover {
  transform: translateY(-1.5px);
	transition: all .1s;
}

.logo:hover span {
  background-color: teal;
  text-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.4);
}

.profile-image {
  width: 50px;
  border-radius: 100% !important;
  cursor: pointer;
}

.profile-image:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.6);
}

footer {
  position: relative;
  bottom: -460px;
  overflow: hidden;
  padding: 10px;
  font-size: 0.8rem;
}

.footer > div {
  display: flex;
  justify-content: space-around;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}
@media (max-width: 576px) {
  .nav-items > img,
  .nav-items a {
    margin-right: 10px;
  }
}
</style>
