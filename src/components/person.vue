<template>
  <div>
    <input type="text" id="showMsg">
    <p id="test">123</p>
    <p>Computed reversed message:"{{ markMsg }}"</p>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    methods: {
      init(){
        this.$store.dispatch('GetMarkMsg');
      }
    },
    created() {
      this.init();
    },
    computed: {
      ...mapGetters({
        MarkMsg: "MarkMsg"
      }),
      markMsg: function () {
        return this.MarkMsg
      }
    }
  }

</script>

<style>
  #test {
    color: red;
  }

</style>
