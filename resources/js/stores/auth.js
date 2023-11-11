import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAuthStore = defineStore("auth", () => {
    const isAuth = ref(false);
    const user = ref(null);

    async function setUser() {
        try {
            const { data } = await axios.get('/api/user')
            user.value = {...data}
        } catch(error) {
            if(error.response.status === 401) logout()
        }
    }

    function setAuth() {
        isAuth.value = true
    }

    function logout() {
        user.value = null
        isAuth.value = false
    }

    return { isAuth, user, setUser, logout, setAuth };
});
