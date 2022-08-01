<template>
  <div id="app">
    <div class="config-provider">
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/form/user">form tips</router-link>
        <router-link to="/form/dialog">form dialog</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100vh;
}

.config-provider {
  display: flex;
  height: 100%;
  nav {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px 10px 20px;
    border-right: 1px solid #979697;
  }
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
