<template>
    <div class="max-w-2xl m-auto">
        <div class="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref({})

onMounted(async () => {
    const { data } = await axios.get('/api/user')
    user.value = data
})
</script>