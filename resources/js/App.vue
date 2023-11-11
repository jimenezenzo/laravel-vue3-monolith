<template>
    <div class="bg-slate-200 container mx-auto">
        <h1 class="text-xl text-center">App Vue Js 3</h1>
        <p class="flex justify-around bg-gray-100 mt-4">
            <router-link to="/" v-if="!store.isAuth">Login</router-link>
            <router-link to="/register" v-if="!store.isAuth">Register</router-link>
            <router-link to="/home" v-if="store.isAuth">Home</router-link>
            <button @click="logout" v-if="store.isAuth">Logout</button>
        </p>
        <div class="min-h-screen">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import router from './router';
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

const logout = async () => {
    await axios.post('/api/logout')
    router.push('/')
    store.logout()
}
</script>