vue
<template>
  <header>

      <section class="form-main-header-container">
        <h1 style="color:#FFC834;margin-right: 10px">उद्योग</h1>
        <h1>Admin</h1>
      </section>
  
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  padding: 1rem;
  width:100%;
  padding-left:70px;
  position:fixed;
  top:0;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
