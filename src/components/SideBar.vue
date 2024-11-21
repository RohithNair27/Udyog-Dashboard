vue
<template>
  <div class="sidebar">
    <ul>
    <li><a href="#"><i class="icon fa fa-home "></i> </a></li>
    <li><a href="#"><i class="icon fa fa-cogs"></i> </a></li>
    <li><a href="#"><i class="icon fa fa-tachometer-alt"></i></a></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 50px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  border-right:1px rgb(170, 170, 170) solid
}

.sidebar ul {
  list-style: none;
  padding: 0;
  
}

.sidebar li {
  margin-bottom: 30px;
 
}

.sidebar a {
  padding: 10px;
  border-radius: 5px;
  /* border:1px black solid; */
   display:flex;
  align-items: center;
  justify-content: center;
}

.sidebar a:hover {
  background-color: #ddd;

}
</style>
