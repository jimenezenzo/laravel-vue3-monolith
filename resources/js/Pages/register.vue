<template>
    <div class="max-w-2xl m-auto">
        <div class="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form @submit.prevent>
                <div class="mb-4">
                    <label class="text-slate-800" for="name">
                        Nombre:
                    </label>
                    <input v-model="name" type="text" id="name" class="mt-2 w-full p-3 bg-gray-50" name="name" placeholder="Tu Nombre" />
                </div>

                <div class="mb-4">
                    <label class="text-slate-800" for="email">
                        Email:
                    </label>
                    <input v-model="email" type="email" id="email" class="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Tu Email" />
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
                    <input v-model="password_confirmation" type="password" id="password_confirmation" class="mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation" placeholder="Repetir Password" />
                </div>

                <input type="submit" value="Crear Cuenta" @click="submit"
                    class="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const password_confirmation = ref('')

    const submit = async () => {
        const request = {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value
        }

        await axios.post('api/register', request)
            .then(() => this.$router.push({path: '/login'}))
            .catch(() => console.error('error al registrar'))
    }
</script>