<template>
    <nav class="bg-blue-500">
        <div class="container flex ">
            <div class="flex items-center justify-between flex-grow md:pl-12 py-4 ">
                <div class="flex items-center space-x-6 capitalize text-white text-xl">
                    <router-link to="/" class=" hover:text-gray-300 transition">Home</router-link>
                    <!-- <router-link to="/shopView" class=" hover:text-gray-300 transition">Shop</router-link> -->
                    <router-link v-if="isLoggedIn" to="/orderView" class=" hover:text-gray-300 transition">My Order</router-link>
                </div>
                <div>
                    <div v-if="!isLoggedIn">
                        <router-link  to="loginView" class="text-white hover:text-gray-300 text-xl  transition">Login</router-link>
                        <span class="text-white text-xl mx-2">/</span>
                        <router-link to="registerView" class="text-white hover:text-gray-300 text-xl  transition ">Register</router-link>
                    </div>
                    <div @click="logout" v-if="isLoggedIn" class="text-white hover:text-gray-300 text-xl  transition ">Logout</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '../stores/Store';

const myStore = useAppStore();

const isLoggedIn  = localStorage.getItem("loggedInUser");
const logout = () => {
    myStore.logout();
}
</script>