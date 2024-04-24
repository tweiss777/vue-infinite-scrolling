<script setup lang="ts">
import UserList from "./components/UserList.vue";
import { useUserService } from "./hooks/userServiceHook";

const { isLoading, users } = useUserService();
</script>

<template>
  <UserList :is-loading="isLoading" :users="users" />
</template>

<style scoped></style>
