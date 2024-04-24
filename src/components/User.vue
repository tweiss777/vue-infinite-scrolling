<script lang="ts" setup>
import IUser from '../types/user'
defineProps<{ user: IUser }>()
</script>
<template>
    <div class="user-row">
        <div class="col">
            <span class="data"> {{ user.id }}</span>
        </div>
        <div class="col">
            <span class="data"> {{ user.firstName }} </span>
        </div>
        <div class="col">
            <span class="data"> {{ user.lastName }}</span>
        </div>
        <div class="col">
            <span class="data">{{ user.email }}</span>
        </div>
        <div class="col">
            <span class="data"> {{ user.ipAddress }}</span>
        </div>
        <div class="col">
            <span class="data">{{ user.address }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-row {
  display: flex;
  flex-direction: row;
  gap: 10px 30px;
}
</style>
