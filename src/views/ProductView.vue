<template>
    <div>
        <!-- header -->
        <Header />
        <!-- ./header -->

        <!-- navbar -->
        <!-- <nav class="bg-gray-800">
            <div class="container flex">
                <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                    <span class="text-white">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                    <span class="capitalize ml-2 text-white">All Categories</span>
    
                    <-- dropdown --
                    <div
                        class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Bed</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/office.svg" alt="office" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">office</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                        </router-link>
                    </div>
                </div>
    
                <div class="flex items-center justify-between flex-grow pl-12">
                    <div class="flex items-center space-x-6 capitalize">
                        <router-link to="../" class="text-gray-200 hover:text-white transition">Home</router-link>
                        <router-link to="pages/shop.html" class="text-gray-200 hover:text-white transition">Shop</router-link>
                        <router-link to="#" class="text-gray-200 hover:text-white transition">About us</router-link>
                        <router-link to="#" class="text-gray-200 hover:text-white transition">Contact us</router-link>
                    </div>
                    <router-link to="#" class="text-gray-200 hover:text-white transition">Login/Register</router-link>
                </div>
            </div>
        </nav> -->
        <NavBar />
        <!-- ./navbar -->

        <!-- breadcrumb -->
        <div class="container py-4 flex items-center gap-3">
            <router-link to="#" class="text-primary text-base">
                <i class="fa-solid fa-house"></i>
            </router-link>
            <span class="text-sm text-gray-400">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
            <p class="text-gray-600 font-medium">Product Details</p>
        </div>
        <!-- ./breadcrumb -->

        <!-- product-detail -->
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="overflow-hidden">
                <img :src="getImgPath()" class="max-h-[34em]  object-cover w-full">
            </div>

            <div>
                <h2 class="text-3xl font-medium uppercase mb-2">{{ selectedProducte()[0].name }}</h2>
                <div class="space-y-2">
                    <p class="text-gray-800 font-semibold space-x-2">
                        <span>Availability: </span>
                        <span class="text-green-600">{{ selectedProducte()[0].stock }}</span>
                    </p>
                    <p class="space-x-2">
                        <span class="text-gray-800 font-semibold">Category: </span>
                        <span class="text-gray-600">{{ selectedProducte()[0].category }}</span>
                    </p>
                </div>
                <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-1">
                    <span class="text-gray-800 font-semibold">Price: </span>
                    <p class="text-xl text-primary font-semibold">Tsh {{ selectedProducte()[0].price }}</p>
                </div>

                <!-- <p class="mt-4 text-gray-600">{{ Products[getSelectedProduct].description }}</p> -->

                <div class="pt-4">
                    <h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
                    <div class="flex items-center gap-2">
                        <div class="size-selector border-1 hover:border-blue-500">
                            <input type="radio" v-model="size" id="size-xs" value="xs" class="hidden">
                            <label for="size-xs"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                        </div>
                        <div class="size-selector border-1 hover:border-blue-500">
                            <input type="radio" v-model="size" id="size-sm" value="sm" class="hidden">
                            <label for="size-sm"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                        </div>
                        <div class="size-selector border-1 hover:border-blue-500">
                            <input type="radio" v-model="size" id="size-m" value="m" class="hidden">
                            <label for="size-m"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                        </div>
                        <div class="size-selector border-1 hover:border-blue-500">
                            <input type="radio" v-model="size" id="size-l" value="l" class="hidden">
                            <label for="size-l"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                        </div>
                        <div class="size-selector border-1 hover:border-blue-500">
                            <input type="radio" v-model="size" id="size-xl" value="xl" class="hidden">
                            <label for="size-xl"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                        </div>
                    </div>
                </div>

                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                    <div class="flex items-center gap-2">
                        <div class="color-selector border-2 hover:border-blue-500">
                            <input type="radio" v-model="color" id="red" value="red" class="hidden">
                            <label for="red"
                                class="border rounded-sm h-6 w-6 hover:border-blue-500  cursor-pointer shadow-sm block"
                                style="background-color: #fc3d57;"></label>
                        </div>
                        <div class="color-selector  border-2 hover:border-blue-500">
                            <input type="radio" v-model="color" id="black" value="black" class="hidden">
                            <label for="black"
                                class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style="background-color: #000;"></label>
                        </div>
                        <div class="color-selector border-2 hover:border-blue-500">
                            <input type="radio" v-model="color" id="white" value="white" class="hidden">
                            <label for="white"
                                class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style="background-color: #fff;"></label>
                        </div>

                    </div>
                </div>

                <div class="mt-4">
                    <h3 class="text-sm text-gray-800 uppercase mb-1">quantity</h3>
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                        <div @click="substract"
                            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-8 text-base flex items-center justify-center">{{ quantity }}</div>
                        <div @click="add"
                            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                </div>

                <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                    <div @click="checkLogin('c')"
                        class="bg-primary border cursor-pointer border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                        <i class="fa-solid fa-bag-shopping"></i> Add to cart
                    </div>
                    <div @click="checkLogin('t')"
                        class="border border-gray-300 cursor-pointer text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                        <i class="fa-solid fa-heart"></i> Checkout
                    </div>
                </div>

                <div class="flex gap-3 mt-4">
                    <router-link to="#"
                        class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i class="fa-brands fa-facebook-f"></i>
                    </router-link>
                    <router-link to="#"
                        class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i class="fa-brands fa-twitter"></i>
                    </router-link>
                    <router-link to="#"
                        class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                        <i class="fa-brands fa-instagram"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- ./product-detail -->

        <!-- description -->
        <div class="container pb-16">
            <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
            <div class="w-full md:w-3/5 pt-6">
                <div class="text-gray-600">
                    <p>{{ selectedProducte()[0].description }}</p>
                </div>
            </div>
        </div>
        <!-- ./description -->

        <!-- related product -->
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">

                <!-- product -->
                <div v-for="(product, index) of related" :key="index">
                    <ProductBox @click="currentProduct(product.id, product.getCurrentCategory)" :imgPath="product.img"
                        :name=product.name :price="product.price" :stock="product.stock" />
                </div>
                <!-- product end -->

            </div>
        </div>
    </div>
    <!-- ./related product -->

    <!-- footer -->
    <Footer />
    <!-- footer end -->
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import router from '../router';
import ProductBox from '../components/ProductBox.vue';
import { useAppStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';
import { ref } from 'vue';
const myStore = useAppStore();


const { getSelectedProduct, getCurrentCategory, getIsLoggedIn, getProducts01 } = storeToRefs(myStore);


const currentProduct = (index, getCurrentCategory) => {
    myStore.changeSelectedProduct(index, getCurrentCategory);
    selectedProducte();
}

//  filtering related products based on the current getCurrentCategory
const related = getProducts01.value.filter(p => p.category == getCurrentCategory.value)

//  filtering  products based on their id
const selectedProducte = () => getProducts01.value.filter(p => p.id == getSelectedProduct.value)

onMounted(() => {
    myStore.getCart
})

const checkLogin = (value) => {
    if (getIsLoggedIn) {
        getProducts01.value[getSelectedProduct.value].size = size.value;
        getProducts01.value[getSelectedProduct.value].color = color.value;
        getProducts01.value[getSelectedProduct.value].quantity = quantity.value;
        if (value == "c") {
            // alert(value)
            myStore.cartUpdate(getSelectedProduct.value);
            router.push("/cartView")
        } else {
            router.push("/checkoutView")
        }
    } else {
        alert("Please login")
    }
}


const size = ref('sm')
const color = ref('white')
const quantity = ref(1)

const add = () => {
    quantity.value++
}

const substract = () => {
    quantity.value--
}


const getImgPath = () => {
    return new URL('../assets/images/products/' + selectedProducte()[0].img, import.meta.url)
}


</script>