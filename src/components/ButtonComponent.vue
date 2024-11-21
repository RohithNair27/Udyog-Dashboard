<template>
    <button @click.prevent="onClick">
        {{ text }}
    </button>
</template>

<script>
export default{
    props:['text'],
    methods:{
        onClick(){
            this.$emit('onPress')
        }
    }
}
</script>

<style>
button{
    background-color: #FFC834;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    width: 100%;
    height:25%;

}
</style>