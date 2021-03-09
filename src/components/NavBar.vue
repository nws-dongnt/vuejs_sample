<template>
  <div id="nav">
    <router-link to="/dashboard">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class NavBar extends Vue {}
</script>
