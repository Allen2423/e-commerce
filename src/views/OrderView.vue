<template>
    <div >
        <!-- header -->
        <Header/>
        <!-- header end -->
        
        <!-- navbar -->
        <NavBar />
        <!-- navbar end -->
        
        <!-- Orders -->
        <div class="container    mt-6">
            <span class="text-xl font-bold">My Orders</span>
            <div class="w-full overflow-x-auto">
                <table class="mt-3 rounded-lg  min-w-[1050px] md:min-w-[1000px] lg:min-w-[800px]">
                    <thead class="grid h-16 text-xl mb-4 rounded-xl shadow-md  bg-blue-500 ">
                        <tr class='grid grid-cols-8'>
                            <th class="py-2 pl-4 flex items-center  text-white text-left">Product</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Name </th>
                            <th class="py-2 pl-4 flex items-center text-white text-left ">size</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Color</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Unit Price</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Quantity</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Status</th>
                            <th class="py-2 pl-4 flex items-center text-white text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                      <tr  class='mb-4 text-lg grid grid-cols-8 shadow-md  rounded-lg overflow-hidden  bg-white' v-for="product of getOrder" :key="product.id" >
                        <td class="max-h-40 w-40 overflow-hidden group">
                            <div class="overflow-hidden">
                                <img src="../assets/images/products/Headset.jpg" alt="product 1" class="w-full object-cover max-h-32 ">
                            </div>
                        </td>
                        <td class="px-8 py-3 flex items-center ">{{ getProducts01[0].name }}</td>
                        <td class="px-8 py-3   flex items-center">{{ getProducts01[0].size }}</td>
                        <td class="px-8 py-3   flex items-center">{{ getProducts01[0].color }}</td>
                        <td class="px-8 py-3   flex items-center">{{ getProducts01[0].price }}</td>
                        <td class="px-8 py-3   flex items-center">{{ getProducts01[0].quantity }}</td>
                        <td class="px-8 py-3   flex items-center"> in transit</td>
                        <td class="sm:px-8 px-3 py-3  text-left   flex  items-center">12/08/2024</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- orders end -->
        
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
import { useAppStore } from '../stores/Store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const myStore = useAppStore();
const { selectedProduct, getOrder, getProducts01} = storeToRefs(myStore);
// console.log("from orrsssssssssssssssss"+getOrder.value)
</script>