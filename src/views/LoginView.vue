<template>
    <div>
        <!-- header -->
        <Header />
        <!-- ./header -->

        <!-- navbar -->
        <NavBar />
        <!-- ./navbar -->

        <!-- login -->
        <div class="contain py-16">
            <div class="mx-auto w-[90%] md:w-[50%] lg:w-[40%] xl:w-[28%] shadow px-6 py-7 rounded overflow-hidden bg-white">
                <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
                <p class="text-gray-600 mb-6 text-sm">
                    welcome back customer
                </p>
                <form @submit.prevent="validation" autocomplete="off">
                    <div class="space-y-2">
                        <div>
                            <label for="phoneNo" class="text-gray-600 mb-2 block">Phone Number</label>
                            <input type="text" v-model="phoneNo" id="phoneNo"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com">
                        </div>
                        <div>
                            <label for="password" class="text-gray-600 mb-2 block">Password </label>
                            <input type="password" v-model="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center">
                            <input type="checkbox" v-madel="remember" id="remember"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                            <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" class="text-primary">Forgot password</a>
                    </div>
                    <div class="mt-4">
                        <button type="submit" @click="validation"
                            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                    </div>
                </form>

                <p class="mt-4 text-center text-gray-600">Don't have account? <router-link to="/registerView"
                        class="text-primary">Register
                        now</router-link>
                </p>
                <p class="text-center text-red-500">{{ message }}</p>
            </div>
        </div>
        <!-- ./login -->


        <!-- footer -->
        <!-- <div class="absolute w-full bottom-0"> -->
            <Footer />
        <!-- </div> -->
        <!-- footer end -->

    </div>
</template>


<script setup>
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { useAppStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import router from "../router";
const myStore = useAppStore();


const { getRegisterUser, getLoggedinUser,  } = storeToRefs(myStore);


const message = ref("");
// const phoneNumberRegex = /^(\+?255|0)\d{9}$/;
const phoneNo = ref("");
const password = ref("");

const validation = () => {
    if (phoneNo.value == '') {
        message.value = "Please enter phone number";
     } 
    //  else if (!phoneNumberRegex.test(phoneNo.value)) {
    //     message.value = "Invalid Phone Number format";
    // } 
    else if (password.value == '') {
        message.value = "Please enter your password";
    }else if (password.value.length < 8) {
        message.value = "Password must be at least 8 characters";
    } else {
        if(getRegisterUser.value[0].phoneNo == Number(phoneNo.value) && getRegisterUser.value[0].password == password.value){
            localStorage.setItem("loggedInUser",phoneNo.value)
            myStore.login(phoneNo.value,true)
            // router.push("/orderView");
        }
    }
}
</script>



<style scoped></style>