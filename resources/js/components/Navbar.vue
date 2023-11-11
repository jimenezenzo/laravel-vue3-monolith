<template>
    <div class="sticky top-0 z-50 bg-teal-600">
        <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white md:mr-6">
                <img src="../../images/favicon.ico" alt="iconn" class="rounded w-10 mr-2">
                <span class="font-semibold text-xl tracking-tight">Vue JS 3 App</span>
            </div>
            <button class="lg:hidden flex items-center px-3 py-2 border rounded border-white" @click="changeActive">
                <svg class="fill-current h-4 w-4 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            <div :class="['w-full flex-grow lg:flex lg:items-center lg:w-auto', classObject]">
                <div class="lg:flex-grow">
                    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4" to="/"
                        v-if="!store.isAuth">Login</router-link>
                    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
                        to="/register" v-if="!store.isAuth">Register</router-link>
                    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4" to="/home"
                        v-if="store.isAuth">Home</router-link>
                    <button class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4" @click="logout"
                        v-if="store.isAuth">Logout</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()
const isActive = ref(false)
const classObject = computed(() => isActive.value ? 'block' : 'hidden')

const changeActive = () => isActive.value = !isActive.value
const logout = async () => {
    await axios.post('/api/logout')
    router.push('/')
    store.logout()
}
</script>