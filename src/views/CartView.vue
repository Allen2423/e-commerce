<template>
    <div>
        <!-- header -->
        <Header/>
        <!-- header end -->
        
        <!-- navbar -->
        <NavBar />
        <!-- navbar end -->
        
        <!-- cart items -->
        <div class="container mt-9">
            <div class="text-xl font-bold  mb-2 ">My Cart</div>
        <div class="  w-full  overflow-x-auto">
            <table class="table-auto w-full text-left text-gray-600 text-sm mb-9 min-w-[800px]">
                <thead class="grid h-16 text-xl mb-4 rounded-xl shadow-md  bg-blue-500 ">
                    <tr class='grid grid-cols-6'>
                        <th class="py-2 pl-4 flex items-center text-white text-left">Product</th>
                        <th class="py-2 pl-4 flex items-center text-white text-left">Name</th>
                        <th class="py-2 pl-4 flex items-center text-white text-left ">Unit Price</th>
                        <th class="py-2 pl-4 flex items-center text-white text-left">Quantity</th>
                        <th class="py-2 pl-4 flex items-center text-white text-left">Total Price</th>
                        <th class="py-2 pl-4 flex items-center text-white text-left ">Action</th>
                    </tr>
                </thead>
                <!-- v-for="n of 4" :key="n" -->
                <tbody>
                    <tr class='mb-4 text-lg grid grid-cols-6 shadow-md  rounded-lg overflow-hidden  bg-white' v-for="(cart, index) in getCart" :key="cart">
                        <td class="max-h-40 w-40 overflow-hidden group">
                            <div class="overflow-hidden">
                                <img src="../assets/images/products/Headset.jpg" alt="product 1" class="w-full object-cover max-h-32 ">
                            </div>
                        </td>
                        <td class="px-8 py-3 flex items-center ">
                            <h1 class="font-extrabold text-xl mb-2">{{ Products[cart].name }}</h1>
                        </td>
                        <td class="px-8 py-3 flex items-center ">Tsh {{ Products[cart].price }}</td>
                        <td class="px-8 py-3 flex items-center ">{{ Products[cart].quantity }}</td>
                        <td class="px-8 py-3 flex items-center ">Tsh {{ Products[cart].quantity * Products[cart].price}}</td>
                        <td class="px-8 py-3 flex items-center ">
                            <!-- <input class="h-6 w-6" type="checkbox"> -->
                            <button @click="deleteCartItem(index)" class="ml-2 bg-red-500 text-white px-3 py-2 rounded-lg">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <!-- summary -->
        </div>

        <div class="mb-9">
            <div class=" w-[100%] md:w-[25em] rounded-xl bg-white">
                <div class="text-2xl font-bold bg-blue-500 text-white px-4 py-1 rounded-t-xl">Cart items Summary</div>
                <div class="px-4 py-3">
                    <div class="grid grid-cols-3 text-xl mb-4">
                        <span class="font-extrabold text-xl col-span-2">Items total price:</span>
                        <span>Tsh {{ itemsTotalPrice }}</span>
                    </div>
                    <div class="grid grid-cols-3 text-xl mb-4">
                        <span class="font-extrabold text-xl col-span-2">Shipping:</span>
                        <span>Tsh 500</span>
                    </div>
                    <!-- <hr class="font-extrabold"/> -->
                    <div class="grid grid-cols-3 text-xl mb-4 border-t-2 ">
                        <span class="font-extrabold text-xl col-span-2">Cart total price:</span>
                        <span>Tsh {{500+itemsTotalPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
            <!-- summary end -->
            
            <div class="w-[100%] md:w-[25em] flex justify-between text-white mb-5">
                <router-link to="checkoutView">
                <button class="bg-blue-500 px-3 py-2 mr-2 rounded">Checkout</button>
                </router-link>
            <router-link to="/">
                <button class="bg-blue-500 px-3 py-2 rounded">continue shoping</button>
            </router-link>
            </div>
        </div>
        <!-- cart items end -->
        
        <!-- footer -->
        <!-- <div class="absolute w-full bottom-0"> -->
            <Footer />
        <!-- </div> -->
        <!-- footer ends -->
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Search from '../components/Search.vue';
import Products from '../Api/Products.json';
import { useAppStore } from '../stores/Store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { onMounted } from 'vue';

const myStore = useAppStore();
const { selectedProduct, getCart} = storeToRefs(myStore);

var itemsPrice = ref([])
var itemsTotalPrice = ref(0)

const deleteCartItem = (index) => {
    getCart.value.splice(index,1)
}

for(const item of getCart.value) {
    itemsPrice.value.push(Products[item].quantity * Products[item].price)
}

for(var i = 0; i < itemsPrice.value.length; i++) {
    itemsTotalPrice.value += itemsPrice.value[i]
}
onMounted(()=>{
    myStore.getCart
})
</script>

<style  scoped></style>
