<template>
    <h1>{{ homeStore.mainTitle }}</h1>
</template>
<script setup>
import { useHomeStore } from '@/stores/HomeStore';
const homeStore = useHomeStore();
</script>

<style></style>