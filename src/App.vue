<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  width: 100px;
  height: 50px;
}

a {
  font-weight: bold;
  color: #2c3e50;
    &.router-link-exact-active {
      color: red;
    }
}

// GENERAL STYLING //
h1, a, p, h2, li {
  color: white;
}

body {
  background-color: black;
}

</style>

