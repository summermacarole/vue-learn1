<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Test></Test>
  </div>
</template>

<script>
import Test from "../components/Test1";
export default {
  name: "home",
  components: {
    Test
  }
};
</script>
