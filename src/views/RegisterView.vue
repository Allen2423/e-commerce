<template>
    <div>
        <!-- header -->
        <Header />
        <!-- ./header -->

        <!-- navbar -->
        <NavBar />
        <!-- ./navbar -->

        <!-- login -->
        <div class="contain py-16 ">
            <div class="mx-auto w-[90%] md:w-[60%] lg:w-[45%] xl:w-[35%] bg-white shadow px-6 py-7 rounded overflow-hidden">
                <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
                <p class="text-gray-600 mb-6 text-sm">
                    Register for new customer
                </p>
                <form @submit.prevent autocomplete="off">
                    <div class="space-y-2">
                        <div>
                            <label for="name" class="text-gray-600 mb-2 block">First Name</label>
                            <input type="text" v-model="fName" id="name"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="fulan fulana">
                        </div>
                        <div>
                            <label for="name" class="text-gray-600 mb-2 block">Last Name</label>
                            <input type="text" v-model="lName" id="name"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="fulan fulana">
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Email address (Optional)</label>
                            <input type="email" v-model="email" id="email"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com">
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Phone Number</label>
                            <input type="text" v-model="phoneNo"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="0765453754 or +255765453754 ">
                        </div>
                        <div>
                            <label for="password" class="text-gray-600 mb-2 block">Password</label>
                            <input type="password" v-model="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                        </div>
                        <div>
                            <label for="confirm" class="text-gray-600 mb-2 block">Confirm password</label>
                            <input type="password" v-model="confimPassword" id="confirm"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                        </div>
                    </div>
                    <!-- <div class="mt-6">
                        <div class="flex items-center">
                            <input type="checkbox" v-model="aggrement" id="aggrement"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                            <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                    href="#" class="text-primary">terms & conditions</a></label>
                        </div>
                    </div> -->
                    <div class="mt-4">
                        <button type="submit" @click="validation"
                            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                            account</button>
                    </div>
                </form>

                <p class="mt-4 text-center text-gray-600">Already have account? <router-link to="/loginView"
                        class="text-primary">Login now</router-link>
                </p>

                <p class="text-center text-red-500">{{ message }}</p>
            </div>
        </div>
        <!-- ./login -->


        <!-- copyright -->
        <Footer />
        <!-- ./copyright -->

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


const { getRegisterUser, getLoggedinUser } = storeToRefs(myStore);

const message = ref("");
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneNumberRegex = /^(\+?255|0)\d{9}$/;

const fName = ref("");
const lName = ref("");
const email = ref("");
const phoneNo = ref("");
const password = ref("");
const confimPassword = ref("");

const validation = () => {
    if (fName.value == '') {
        message.value = "Please enter a first name";
    } 
    else if (lName.value == '') {
        message.value = "Please enter a Last name";
    } else if (email.value != '') {
        if (!emailPattern.test(email.value)) {
            message.value = "Invalid email";
        }
    } else if (phoneNo.value == '') {
        message.value = "Please enter phone number";
    } else if (!phoneNumberRegex.test(phoneNo.value)) {
        message.value = "Invalid Phone Number format";
    } else if (password.value == '') {
        message.value = "Please enter your password";
    } else if (password.value.length < 8) {
        message.value = "Password must be at least 8 characters";
    } else if (confimPassword.value == '') {
        message.value = "Please enter confirm password";
    } else if (password.value != confimPassword.value) {
        message.value = "Password does not match";
    } else {
      alert(message.value)
      
     const formData = {  fname :fName.value, lname :lName.value, email :email.value, phoneNo: phoneNo.value, password: password.value}
     console.log("0000000000000000000000000000"+getRegisterUser.value[0].name)
        myStore.updateRegisterUser(formData);
        // getRegisterUser.value[0].fname = fName.value;
        // getRegisterUser.value[0].lname = lName.value;
        // getRegisterUser.value[0].email = email.value;
        // getRegisterUser.value[0].phoneNo = phoneNo.value;
        // getRegisterUser.value[0].password = password.value;
        // myStore.updateLoggedInUser(5);
        router.push("/loginView");
    }
}
</script>


<style scoped></style>