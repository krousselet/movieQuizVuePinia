<template>
    <h2>{{ playStore.catch }}</h2>
</template>

<script setup>
import { usePlayStore } from '@/stores/PlayStore';
const playStore = usePlayStore();
</script>

<style lang="scss" scoped>

</style>