<template>
    <div class="bg-slate-200 container mx-auto">
        <h1 class="text-xl text-center">App Vue Js 3</h1>
        <p class="flex justify-around bg-gray-100 mt-4">
            <router-link to="/">Go to Login</router-link>
            <router-link to="/register">Go to Register</router-link>
        </p>
        <div class="min-h-screen">
            <router-view></router-view>
        </div>
    </div>
</template>