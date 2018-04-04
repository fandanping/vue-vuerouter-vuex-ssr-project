<template>
    <header :class="$style.mainHeader">
        <h1>JTodo</h1>
    </header>
</template>
<script>
export default{
  computed: {
    $style () {
      return {
        mainHeader: ''
      }
    }
  }
}
</script>

<style lang="stylus" module>
    .main-header{
        text-align center
        h1{
            font-size 100px
            color: black
            font-weight 100
            margin 20px
        }
    }
</style>

<docs>
    #123=456
</docs>