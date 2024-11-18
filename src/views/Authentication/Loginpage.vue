<template>
  <div class="Login-page-container">
    <section class="Login-page-image-container">
      <img src="../../assets/farmerLady.svg" class="Login-page-image" />
    </section>
    <form>
      <h1>उद्योग Admin</h1>

      <section>
        <div>
          <span>welcome back</span>
          <span>Kindly enter your details</span>
        </div>

        <!-- Personal ID Input -->
        <div class="input-group">
          <span>Personal ID</span>
          <div class="input-wrapper">
            <input type="text" placeholder="Enter your Personal ID" />
            <i class="icon fa fa-user"></i>
          </div>
        </div>

        <!-- Password Input -->
        <div class="input-group">
          <span>Password</span>
          <div class="input-wrapper">
            <input type="password" placeholder="Enter your Password" />
            <i class="icon fa fa-lock"></i>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>
<script></script>
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
  /* border: 1px black solid; */
  height: 95%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
form section {
  flex: 0.6;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px black solid; */
  width: 70%;
  justify-content: space-around;
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

/* Input wrapper for styling input and icon together */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-group {
  display: flex;
  align-items: flex-start;
}

input {
  padding: 10px 100px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.icon {
  position: absolute;
  right: 10px; /* Position the icon inside the input */
  color: #aaa;
}
</style>
