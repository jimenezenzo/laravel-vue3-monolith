import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAuthStore = defineStore("auth", () => {
    const isAuth = ref(false);
    const user = ref({});

    function setUser(userAuth) {
        user.value = {...userAuth}
    }

    function setAuth() {
        isAuth.value = true
    }

    function logout() {
        user.value = {}
        isAuth.value = false
    }

    return { isAuth, user, setUser, logout, setAuth };
});
