<script setup lang="ts">
import IUser from "../types/user";
import User from "./User.vue";
defineProps<{ users: IUser[], isLoading: boolean }>();

</script>

<template>
    <div v-for="(user, i) in users" class="row">
        <User :key="i" :user="user" />
    </div>
    <span v-if="isLoading">loading</span>

</template>
