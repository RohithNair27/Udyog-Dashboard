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
      <section class="Employees-table-container-headerText">
        <h1>Employess</h1>
        <span>*Kindly sync the mobile app to get all data*</span>
      </section>
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
}
.Employees-table-container{
  margin-top:10vh;
  height: 80vh;
  width:90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
}
.Employees-table-container-headerText{
  /* border:1px black solid; */

  display: flex;
  flex-direction: column;
  align-items: center;
}
.Employees-table-container-headerText h1{
  padding:0px;
  margin:0px;
  
}
.Employees-table-container-headerText span{
  font-weight: 400;
  font-size: 18;
  color:red
}
</style>