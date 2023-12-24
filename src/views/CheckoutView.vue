<template>
    <div>
        <!-- header -->
        <Header/>
        <!-- ./header -->
    
        <!-- navbar -->
        <NavBar/>
        <!-- ./navbar -->
    
        <!-- breadcrumb -->
        <div class="container py-4 flex items-center gap-3">
            <a href="../index.html" class="text-primary text-base">
                <i class="fa-solid fa-house"></i>
            </a>
            <span class="text-sm text-gray-400">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
            <p class="text-gray-600 font-medium">Checkout</p>
        </div>
        <!-- ./breadcrumb -->
    
        <!-- wrapper -->
        <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
    
            <div class="col-span-12 lg:col-span-8 border border-gray-200 p-4 rounded bg-white">
                <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
                <form>
                <div class=" grid grid-cols-1 lg:grid-cols-1 gap-3 ">
                    <div>
                        <label for="Region" class="text-gray-600">Region</label>
                        <input type="text" v-model="inputFields[0].Region"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Region">
                    </div>
                    <div>
                        <label for="District" class="text-gray-600">District</label>
                        <input type="text" v-model="inputFields[0].District" class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="District">
                    </div>
                    <div>
                        <label for="Ward" class="text-gray-600">Ward</label>
                        <input type="text" v-model="inputFields[0].Ward"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Ward">
                    </div>
                    <div>
                        <label for="Street" class="text-gray-600">Street</label>
                        <input type="text" v-model="inputFields[0].Street" class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Street">
                    </div>
                    <div>
                        <label for="houeNo" class="text-gray-600">House no.</label>
                        <input type="text" v-model="inputFields[0].houeNo"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="House no.">
                    </div>
                    <div>
                        <label for="Postcode" class="text-gray-600">Postcode</label>
                        <input type="text" v-model="inputFields[0].Postcode"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="234535">
                    </div>
                </div>
                

                <div class=" mt-5">
                    <label for="Postcode" class="text-gray-600 text-xl font-bold mb-3">Payment</label>
                    <select type="text" v-model="inputFields[0].payment"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="234535">
                        <option value="" selected>--Select Payment--</option>
                        <option value="M-Pesa" >M-Pesa</option>
                        <option value="tigo-Pesa">Tigo-Pesa</option>
                        <option value="Airtel Money" >Airtel Money</option>
                        <option value="Halopesa">Halopesa</option>
                        <option value="T-Pesa" >T-Pesa</option> 
                    </select>
                </div>
                <p class="text-center text-red-500">{{ message }}</p>
            </form>
            </div>
    
            <div class="col-span-12 lg:col-span-4 border border-gray-200 p-4 rounded bg-white">
                <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
                <div class="space-y-2">
                    
                <ProductBox  :imgPath="Products[getSelectedProduct].img" :v-model=Products[getSelectedProduct].v-model :price="Products[getSelectedProduct].price" :stock="Products[getSelectedProduct].stock"/>
                
                </div>
    
                <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                    <p>subtotal</p>
                    <p>Tsh 1280</p>
                </div>
    
                <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                    <p>shipping</p>
                    <p>Free</p>
                </div>
    
                <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
                    <p class="font-semibold">Total</p>
                    <p>Tsh 1280</p>
                </div>
    
    
                <div @click="validation"
                    class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                    order</div>
            </div>
    
        </div>
        <!-- ./wrapper -->
    
    
        <!-- footer -->
        <!-- <div class="absolute w-full bottom-0"> -->
            <Footer/>
        <!-- </div> -->
        <!-- footer end -->
    
    </div>
</template>


<script setup>
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import ProductBox from "../components/ProductBox.vue";
import Products from '../Api/Products.json'
import { useAppStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const myStore = useAppStore();

const { getSelectedProduct } = storeToRefs(myStore);


const message = ref("");

const Region = ref("");
const District = ref("");
const Ward = ref("");
const Street = ref("");
const Postcode = ref("");
const houeNo = ref("");

const payment = ref("");
const inputFields = [
    {Region:'mmmm', District:'', Ward:'', Street:'', Postcode:'', houeNo:'', payment:''},
];
const validation = () => {
    for (const field of inputFields) {
    
    if (field == '') {
        message.value = "Please enter $field";
    } 
    else {
        message.value = "";
        message.value = "Sussessfull "
    }
}
    // else if (email.value != '') {
    //     if (!emailPattern.test(email.value)) {
    //         message.value = "Invalid email";
    //     }
    // } else if (phoneNo.value == '') {
    //     message.value = "Please enter phone number";
    // } else if (!phoneNumberRegex.test(phoneNo.value)) {
    //     message.value = "Invalid Phone Number format";
    // } else if (password.value == '') {
    //     message.value = "Please enter your password";
    // } else if (password.value.length < 8) {
    //     message.value = "Password must be at least 8 characters";
    // } else if (confimPassword.value == '') {
    //     message.value = "Please enter confirm password";
    // } else if (password.value != confimPassword.value) {
    //     message.value = "Password does not match";
    // } 
    // else {
    //     message.value = "";
    //     message.value = "Sussessfull "
    // }
}
</script>

<style scoped>

</style>