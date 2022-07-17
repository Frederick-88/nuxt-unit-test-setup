<template>
  <div>
    <div>Test here - {{ text }}</div>
    <div>{{isHiText}}</div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      text: "super text",
    };
  },
  computed: {
    isHiText() {
      return this.text === 'hi'
    }
  },
  mounted() {
    this.text = "hi";
  },
};
</script>

<style></style>
