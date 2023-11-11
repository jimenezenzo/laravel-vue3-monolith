<template>
    <div class="max-w-2xl m-auto">
        <div class="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <pre>{{ store.user }}</pre>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

onMounted(async () => {
    const { data } = await axios.get('/api/user')
    store.setUser(data)
})
</script>