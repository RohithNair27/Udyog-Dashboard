<template>
 <div class="input-group">
          <span>{{ lable }}</span>
          <div class="input-wrapper">
            <input :type="type" :placeholder="placeHolder" />
            <i :class="`icon fa ${icon}`"></i>
          </div>
        </div>
</template>

<script>
export default{
    props:[
        "placeHolder","lable","icon","type"
]
}
</script>

<style>
.input-group {
  display: flex;
  align-items: flex-start;
  /* border:1px black solid; */
  width:100%;
  height:100%;
}
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:10px;
  width:100%;
  height:100%;
 
}
input {
  border: 1px solid #ccc;
  border-radius: 5px;
  width:100%;
  height:50px;
  padding-left:10px
}
.icon {
  position: absolute;
  right: 10px; 
  color: #aaa;
}
</style>