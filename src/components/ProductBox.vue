<template>
    <div>
        <div >
        <div  class="relative bg-white shadow-sm  rounded overflow-hidden group flex flex-col">
            <div class="relative overflow-hidden">
                <img :src="getImgPath(imgPath)" alt="product 1" class="w-full object-cover h-[10em] md:h-[18em]">
                <div class="absolute inset-0 bg-blue-500 bg-opacity-5 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                </div>
            </div>
            <div class="flex-grow"> <!-- Add flex-grow class to make this div grow and push the next div to the bottom -->
                <div class="pt-4 pb-3 px-3 md:px-4">
                    <router-link to="productView">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{{ name }}</h4>
                    </router-link>
                    <div class="flex items-baseline mb-1 space-x-1 md:space-x-2 justify-between flex-col md:flex-row">
                        <p class="text-primary font-semibold">Tsh {{ price }}</p>
                        <p class="text-sm text-slate-400 font-semibold">{{ stock }} remain</p>
                    </div>
                </div>
            </div>
            <!-- <router-link @click="currentProduct(index,product.category)" to="productView" class="block w-full py-2 text-center text-white bg-blue-500 border border-blue-600 rounded-b-md mt-auto hover:bg-blue-500 transition">
                Add to cart
            </router-link> -->
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    imgPath: String,
    name:"",
    price:"",
    stock:""
})

 // const imgPath = "CameraNikon.jpg";

const getImgPath = (path)=>{
    return new URL('../assets/images/products/'+path, import.meta.url)
}

</script>
