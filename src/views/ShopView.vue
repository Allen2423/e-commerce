<template>
    <div>
        <!-- header -->
        <Header />
        <!-- ./header -->

        <!-- navbar -->

        <!-- <nav class="bg-sky-600">
            <div class="container flex">
                <-- <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden border-2 border-red-600">
                    <span class="text-white">
                        <i class="fa-solid fa-bars"></i>
                    </span>
    
    
                    <span class="capitalize ml-2 text-white hidden">All Categories</span>
    
                    <-- dropdown --
                    <div
                        class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Bed</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/office.svg" alt="office" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">office</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </router-link>
                        <router-link to="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                        </router-link>
                    </div>
                </div> --
    
                <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div class="flex items-center space-x-6 capitalize">
                        <router-link  class="text-gray-200 hover:text-white transition">Home</router-link>
                        <router-link to="pages/shop.html" class="text-gray-200 hover:text-white transition">Shop</router-link>
                        <router-link to="#" class="text-gray-200 hover:text-white transition">About us</router-link>
                        <router-link to="#" class="text-gray-200 hover:text-white transition">Contact us</router-link>
                    </div>
                    <router-link to="login.html" class="text-gray-200 hover:text-white transition">Login</router-link>
                </div>
            </div>
        </nav> -->
        <NavBar />
        <!-- ./navbar -->

        <!-- breadcrumb -->
        <div class="container py-4 flex items-center gap-3 ">
            <div class="text-primary text-base">
                <i class="fa-solid fa-house"></i>
            </div>
            <span class="text-sm text-gray-400">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
            <p class="text-gray-600 font-medium">Shop</p>
        </div>
        <!-- ./breadcrumb -->

        <!-- shop wrapper -->
        <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
            <!-- sidebar -->
            <!-- drawer init and toggle -->
            <div class="text-center md:hidden">
                <button
                    class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                    type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
                    aria-controls="drawer-example">
                    <ion-icon name="grid-outline"></ion-icon>
                </button>
            </div>

            <!-- drawer component -->
            <div id=" drawer-example"
                class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
                tabindex="-1" aria-labelledby="drawer-label">
                <h5 id="drawer-label"
                    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg
                        class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>Info</h5>
                <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only bg-green-600">Close menu</span>
                </button>
                <div class="divide-y divide-gray-200 space-y-5">
                    <div>
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="checkbox" name="cat-1" id="cat-1"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-1" class="text-gray-600 ml-3 cusror-pointer">Bedroom</label>
                                <div class="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" name="cat-2" id="cat-2"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-2" class="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                                <div class="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" name="cat-3" id="cat-3"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-3" class="text-gray-600 ml-3 cusror-pointer">Office</label>
                                <div class="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" name="cat-4" id="cat-4"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-4" class="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                                <div class="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                        <div class="mt-4 flex items-center">
                            <input type="text" name="min" id="min"
                                class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min">
                            <span class="mx-3 text-gray-500">-</span>
                            <input type="text" name="max" id="max"
                                class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max">
                        </div>
                    </div>



                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                        <div class="flex  items-center flex-wrap gap-2">
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-xs" class="hidden">
                                <label for="size-xs"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-sm" class="hidden">
                                <label for="size-sm"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-m" class="hidden">
                                <label for="size-m"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-l" class="hidden">
                                <label for="size-l"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-xl" class="hidden">
                                <label for="size-xl"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>



                    <div class="pt-4 ">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div class="flex items-center gap-2">
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="red" class="hidden">
                                <label for="red"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #fc3d57;"></label>
                            </div>
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="black" class="hidden">
                                <label for="black"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #000;"></label>
                            </div>
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="white" class="hidden">
                                <label for="white"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #fff;"></label>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="grid grid-cols-2 gap-4">
                    <router-link to="#"
                        class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
                        more</router-link>
                    <router-link to="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get
                        access <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg></router-link>
                </div>
            </div>

            <!-- ./sidebar -->
            <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
                <div class="divide-y divide-gray-200 space-y-5">
                    <div>
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium pt-3">Categories</h3>
                        <form class="space-y-2">
                            <div class="flex items-center">
                                <input type="radio" name="cat-1" id="cat-1"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-1" class="text-gray-600 ml-3 cusror-pointer">Home</label>
                                <div class="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" name="cat-2" id="cat-2"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-2" class="text-gray-600 ml-3 cusror-pointer">Electronic devices</label>
                                <div class="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" name="cat-3" id="cat-3"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-3" class="text-gray-600 ml-3 cusror-pointer">Office</label>
                                <div class="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" name="cat-4" id="cat-4"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-4" class="text-gray-600 ml-3 cusror-pointer">clothes</label>
                                <div class="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" name="cat-4" id="cat-4"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                                <label for="cat-4" class="text-gray-600 ml-3 cusror-pointer">Shoes</label>
                                <div class="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </form>
                    </div>


                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                        <div class="mt-4 flex items-center">
                            <input type="text" name="min" id="min"
                                class="w-full bg-slate-300 focus:bg-gray-300 rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min">
                            <span class="mx-3 text-gray-500">-</span>
                            <input type="text" name="max" id="max"
                                class="w-full bg-slate-300 focus:bg-gray-300 rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max">
                        </div>
                    </div>

                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                        <div class="flex items-center gap-2">
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-xs" class="hidden">
                                <label for="size-xs"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-sm" class="hidden">
                                <label for="size-sm"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-m" class="hidden">
                                <label for="size-m"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-l" class="hidden">
                                <label for="size-l"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div class="size-selector">
                                <input type="checkbox" name="size" id="size-xl" class="hidden">
                                <label for="size-xl"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div class="flex items-center gap-2">
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="red" class="hidden">
                                <label for="red"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #fc3d57;"></label>
                            </div>
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="black" class="hidden">
                                <label for="black"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #000;"></label>
                            </div>
                            <div class="color-selector">
                                <input type="checkbox" name="color" id="white" class="hidden">
                                <label for="white"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style="background-color: #fff;"></label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <!-- products -->
            <div class="col-span-3">
                <div class="flex items-center mb-4">
                    <select name="sort" id="sort" @click="sortProducts" v-model="selectedOrder"
                        class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded bg-slate-300 focus:bg-gray-300">
                        <option value="default" selected>Default sorting</option>
                        <option value="lowToHigh">Price low to high</option>
                        <option value="highToLow">Price high to low</option>
                    </select>
                    <div class="flex gap-2 ml-auto">
                        <div
                            class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                            <i class="fa-solid fa-grip-vertical"></i>
                        </div>
                        <div
                            class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                            <i class="fa-solid fa-list"></i>
                        </div>
                    </div>
                </div>

                <!-- product -->
                <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
                    <div v-for="(product, index) of getProducts01" :key="index">
                        <ProductBox @click="currentProduct(index, product.category)" :imgPath="product.img"
                            :name=product.name :price="product.price" :stock="product.stock" />
                    </div>
                </div>
            </div>
            <!-- ./products -->

        </div>
        <!-- ./shop wrapper -->

        <!-- footer -->
        <Footer />
        <!-- footer end -->
        <!--     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script> -->
    </div>
</template>


<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Header from '../components/Header.vue';
import Search from "../components/Search.vue";
import ProductBox from "../components/ProductBox.vue";
import router from "../router";
import Products from '../Api/Products.json'
import { useAppStore } from "../stores/Store";
import { storeToRefs } from "pinia";
import { ref } from 'vue';

const myStore = useAppStore();

const { selectedProduct, getProducts01 } = storeToRefs(myStore);

const currentProduct = (index, category) => {
    myStore.changeSelectedProduct(index, category);
    router.push('/productView')
}

// const selectedOrder = ref('default')

// const sortProducts = () => {
//     // const sorted = getProducts01.value.slice().sort((a, b) => a.price - b.price)
//     // console.log('Sorting products'+sorted[0].price)
//     switch (selectedOrder.value) {
//         case 'lowToHigh':
//             return getProducts01.value.slice().sort((a, b) => a.price - b.price);
//             break;
//         case 'highToLow':
//             return getProducts01.value.slice().sort((a, b) => b.price - a.price);
//             break;
//         default:
//             return getProducts01.value.slice();
//     }
// }

// console.log("soooooooorted", sortProducts()[0].price);
</script>


<style scoped></style>