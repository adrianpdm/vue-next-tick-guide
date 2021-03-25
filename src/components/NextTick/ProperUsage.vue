<template>
  <div>
    <label>
      Input
      <input ref="inputText" type="text" v-model="myValue">
    </label>
    <br>
    <br>
    <label>
      Value Editor
      <input @input="updateValue($event)">
    </label>
  </div>
</template>

<script>
export default {
  data: () => ({
    myValue: ''
  }),
  methods: {
    updateValue(e) {
      this.myValue = e.target.value;
      
      // expecting HTMLInputElement.value to equals adrian
      const element = this.$refs.inputText;
      const domValue = element.value;
      console.log(`myValue is: ${this.myValue}`);
      console.log(`DOM value is: ${domValue}`);
      console.log(`Is equals? ${ this.myValue === domValue }`);
    }
  }
}
</script>

<style>

</style>>