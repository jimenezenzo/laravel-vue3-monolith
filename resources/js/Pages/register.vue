<template>
    <form @submit.prevent>
        <div class="bg-red-400 rounded my-2 p-2 text-white" v-if="errors.length > 0">
            <p v-for="error in errors">{{ error }}</p>
        </div>
        <div class="mb-4">
            <label class="text-slate-800" for="name">
                Nombre:
            </label>
            <input v-model="name" type="text" id="name" class="mt-2 w-full p-3 bg-gray-50" name="name"
                placeholder="Tu Nombre" />
        </div>
        <div class="mb-4">
            <label class="text-slate-800" for="email">
                Email:
            </label>
            <input v-model="email" type="email" id="email" class="mt-2 w-full p-3 bg-gray-50" name="email"
                placeholder="Tu Email" />
        </div>
        <div class="mb-4">
            <label class="text-slate-800" for="password">
                Password:
            </label>
            <input v-model="password" type="password" id="password" class="mt-2 w-full p-3 bg-gray-50" name="password"
                placeholder="Tu Password" />
        </div>
        <div class="mb-4">
            <label class="text-slate-800" for="password_confirmation">
                Repetir Password:
            </label>
            <input v-model="password_confirmation" type="password" id="password_confirmation"
                class="mt-2 w-full p-3 bg-gray-50" name="password_confirmation" placeholder="Repetir Password" />
        </div>
        <input type="submit" value="Crear Cuenta" @click="submit"
            class="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const errors = ref([])
const router = useRouter()

const submit = async () => {
    errors.value = []

    const request = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value
    }

    try {
        await axios.post('api/register', request)
        router.push('/')
    } catch (error) {
        if (error.response.status === 422) errors.value.push(error.response.data.message)
    }
}
</script>