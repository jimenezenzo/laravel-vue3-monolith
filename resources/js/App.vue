<template>
    <Navbar></Navbar>
    <div class="bg-slate-100 px-4 min-h-screen flex flex-col">
        <RouterView class="mx-auto mt-10 md:w-8/12 bg-white shadow-lg rounded-md px-5 py-10" />
    </div>
</template>

<script setup>
import router from './router';
import { useAuthStore } from '@/stores/auth'
import Navbar from './components/Navbar.vue';

const store = useAuthStore()

const logout = async () => {
    await axios.post('/api/logout')
    router.push('/')
    store.logout()
}
</script>