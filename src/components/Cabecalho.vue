<template>
  <header>
      <h1 id="title"> {{ title }} </h1>
  </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
            default: 'Home',
        }
    }
}
</script>

<style>

</style>