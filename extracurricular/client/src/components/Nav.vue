<template>
    <header class="header">
      <hr>
      <section class="header_inner">
        
          <router-link class="logo" to="/home">
            <h1>E</h1>
            <h3>xtracurricular</h3>
          </router-link>
        
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
              <img src='../assets/white_triple_bar2.png' alt='logo'/>
          </button>
          <div class="dropdown-menu dropdown-menu-header" aria-labelledby="dropdownMenu1">
            <div class="dropdown-item">{{user.given_name}} {{user.family_name}}</div>
            <router-link to="/home" class="dropdown-item">Home</router-link>
            <router-link :to="{name:'TakeAttendance', params: {TeamId:this.team.id}}" class="dropdown-item">Attendance</router-link>
            <router-link :to="{name: 'TeamAttendanceHistory', params: {TeamId:this.team.id}}" class="dropdown-item">History</router-link>
            <router-link to="/home/player_attendance_history/1" class="dropdown-item">Search</router-link>
            <router-link to="/home" class="dropdown-item">Change Team</router-link>
            <router-link to="/" class="dropdown-item" @click="logout()">Log Out</router-link>
          </div>
        </div>
      </section>
      <hr>

    </header>
</template>

<script>
import AuthService from "../Auth/AuthServices.js";
const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;
export default {
  name: "Nav",
  props: {
    team: Object
  },
  watch: {
    team: function(newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    }
  },
  data: function() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated,
      footerOff: false,
      user: {
        given_name: "",
        family_name: ""
      },
      teamId: 0
    };
  },
  mounted: function() {
    console.log("selected team in nav:", this.team);
    this.auth.getProfile((err, user) => {
      console.log({ err, user });
      this.user = user;
    });
  },
  methods: {
    login,
    logout
  }
};
</script>

<style>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  background: #103072;
  color: white;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5em;
}
.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header h1 {
  font-size: 2em;
}
.header h3 {
  font-size: 1.5em;
}
.logo {
  display: flex;
  align-items: center;
  padding-left: 2em;
  padding-top: 0.5em;
  color: white;
}

.header img {
  height: 1.5em;
  width: 2em;
}

.dropdown {
  padding-right: 2em;
  background: #103072;
}

.btn-secondary {
  color: #fff;
  background: #103072;
  border-color: #103072;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #103072;
  border-color: #545b62;
}
.show > .btn-secondary.dropdown-toggle {
  background: #103072;
}
.dropdown-toggle::after {
  content: none;
}
.dropdown-menu {
  left: 15px;
}
.dropdown-menu-header {
  width: 7.5em;
  margin: 0.125rem -3em;
  min-width: 8.5em;
  left: -15px!;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
