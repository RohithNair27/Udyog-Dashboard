<script>
import ButtonComponent from '../../components/ButtonComponent.vue';
import InputField from '../../components/InputField.vue';
import { RouterLink, RouterView } from "vue-router";

export default{
  components:{
    ButtonComponent,
    InputField,
  }
}
</script>

<template>
  <div class="Login-page-container">
    <section class="Login-page-image-container">
      <img src="../../assets/farmerLady.svg" class="Login-page-image" />
    </section>
    <form>
    <div class="header-container">
      <section class="form-main-header-container">
        <h1 style="color:#FFC834;margin-right: 10px">उद्योग</h1>
        <h1>Admin</h1>
      </section>
      <span>Welcome! Let's create your account</span>
    </div>
      <section class="form-inputField-container">
      <InputField :placeHolder="'Enter your name'" :lable="'Personal ID'" :icon="'fa-user'" :type="'text'"/>
      <InputField :placeHolder="'Enter email'" :lable="'Email ID'" :icon="'fa-lock'" :type="'email'"/>

      </section>
      <section class="form-button-container">
        <ButtonComponent text="Login"/>
          <span class="from-signup-text">old user? <RouterLink class="router-link" to="/">Sign up</RouterLink></span>
      </section>
    </form>
  </div>
</template>

<style>
.Login-page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Login-page-image {
  width: 80%;
}
.Login-page-image-container {
  /* border: 1px black solid; */
  background-color: #ffff84;
  height: 95%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 30px;
}
form h1 {
  font-size: 60px;
}
form {
  height: 95%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header-container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:40%;
}
.form-main-header-container{
display:flex;
}
.form-main-header-container h1{
  padding:0;
  margin:0
}
.form-inputField-container{
  width:45%;
  flex:1;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
}
.form-button-container{
  flex:1;
  width:45%;
  margin-top: 10px;
  display:flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
form section div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-fields-container{
  border: 1px black solid;
  width:100%
}
.from-signup-text{
  margin-top:10px;
  color:gray;
  font-size: 14px;
  font-weight: 500
}
.router-link{
  text-decoration: none;
  color: #FFC834;
}

</style>
