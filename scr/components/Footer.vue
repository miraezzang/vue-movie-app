<template>
  <footer>
    <Logo />
    <a 
      href="https://github.com/ParkYoungWoong"
      target="_blank"></a>
      (c){{ new Date().getFullYear() }} MIRAEZZANG
  </footer>
</template>

<script>
import Logo from '../components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>