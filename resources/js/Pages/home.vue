<template>
    <div>
        <p>{{ store.user }}</p>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
</script>