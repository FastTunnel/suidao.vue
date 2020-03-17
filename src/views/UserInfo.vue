<style>
.welcome {
  font-size: 50px;
}
</style>

<template>
    <div>{{currentUser.email}}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "center",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  mounted() {}
};
</script>