<script> 
import Tables from '../../components/Table.vue';
import SideBar from '../../components/SideBar.vue';
import Header from '../../components/Header.vue'
export default{
  components:{
    Tables,SideBar,Header
  }
}
</script>
<template>
  <div class="Employees-view-container">
    <Header/>
    <SideBar/>
    <section class="Employees-table-container">
      <h1>Employees</h1>
      <Tables/>
    </section>
  </div>
</template>
<style>
.Employees-view-container{
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
}
.Employees-table-container{
  /* border:1px black solid; */
  height: 70vh;
  width:90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
}
</style>