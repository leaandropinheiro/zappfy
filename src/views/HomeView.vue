<template>
  <section>
    <h1>;</h1>
    <p>;</p>
    <VInputField />
    <VContactTabs />
  </section>
</template>

<script>
import VInputField from "@/components/VInputField.vue";
import VContactTabs from "@/components/VContactTabs.vue";

export default {
  name: "HomeView",
  components: {
    VInputField,
    VContactTabs,
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
}
h1 {
  color: #3f83f8;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
