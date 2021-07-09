<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about/aa">About</router-link>
      <router-link to="/about/bb">About</router-link>
    </div>
        <router-view/>
    <keep-alive >
      </keep-alive>
  </div>
</template>
<script type="text/javascript">
  export default {
  name: 'search',
  props: {
  },
  data() {
    return {
      cc:'',
      searchObj: {
        aa: 33333,
        cc: []
      },
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onSubmit(i) {
      this.$emit('update:searchObj',this.searchObj)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
