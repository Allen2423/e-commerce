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
                        <input type="text" v-model="Region"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Region">
                    </div>
                    <div>
                        <label for="District" class="text-gray-600">District</label>
                        <input type="text" v-model="District" class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="District">
                    </div>
                    <div>
                        <label for="Ward" class="text-gray-600">Ward</label>
                        <input type="text" v-model="Ward"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Ward">
                    </div>
                    <div>
                        <label for="Street" class="text-gray-600">Street</label>
                        <input type="text" v-model="Street" class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Street">
                    </div>
                    <div>
                        <label for="houeNo" class="text-gray-600">House no.</label>
                        <input type="text" v-model="houeNo"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="House no.">
                    </div>
                    <div>
                        <label for="Postcode" class="text-gray-600">Postcode</label>
                        <input type="text" v-model="Postcode"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="234535">
                    </div>
                </div>
                

                <div class=" mt-5">
                    <label for="Postcode" class="text-gray-600 text-xl font-bold mb-3">Payment</label>
                    <select type="text" v-model="payment"  class="input-box w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="234535">
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
import router from "../router";

const myStore = useAppStore();

const { getSelectedProduct, getCart, getOrder } = storeToRefs(myStore);

const message = ref("");

const Region = ref("");
const District = ref("");
const Ward = ref("");
const Street = ref("");
const Postcode = ref("");
const houeNo = ref("");

const payment = ref("");
const validation = () => {
  const errors = {};

  if (Region.value.trim() === '') {
    message.value = 'Please enter Region';
  }
  
  else if (District.value.trim() === '') {
    message.value        = 'Please enter District';
  }
  
  else if (Ward.value.trim() === '') {
  message.value = 'Please enter Ward';
  }
  
  else if (Street.value.trim() === '') {
    message.value = 'Please enter Street';
  }
  
  else if (Postcode.value.trim() === '') {
  message.value  = 'Please enter Postcode';
  }
  
  else if (houeNo.value.trim() === '') {
    message.value = 'Please enter House Number';
  }
  else if(!Number(houeNo.value) || !Number(Postcode.value)) {
    message.value = "House Number must be a number"
}
  else if(!Number(Postcode.value)) {
    message.value = "Postcode must be a number"
}
  else if (payment.value === '') {
    message.value = 'Please enter select payment';
  }else{
    myStore.updateOrder(getCart.value)
    router.push("/orderView")
  }
}
</script>

<style scoped>

</style>