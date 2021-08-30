<template>
  <h1>{{ title }}</h1>
  <br>
  <Modal :header="header" :text="text" theme="sale"/>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>


<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'My first vue app =)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja sawg for half proce!'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    }
  },
  components:{
    Modal
  }
}
</script>

<style>
  h1{
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>
