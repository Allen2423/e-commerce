<template>
    <div>

        <!-- <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masha Global Link Co Limited</title>
    
    <link rel="shortcut icon" href="../assets/images/favicon/favicon.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="assets/css/main.css">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet">
    
    <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/all.min.css">
</head> -->

        <div>
            <!-- header -->
            <Header />
            <!-- ./header -->

            <!-- navbar -->
            <NavBar />
            <!-- ./navbar -->

            <!-- banner -->
            <!-- <div class="bg-cover bg-no-repeat bg-center banner py-36">
        <div class="container">
            <h1 class="text-5xl md:text-6xl text-gray-800 font-medium mb-4 capitalize">
                Fanya biashara na <br> masha global link ltd
            </h1>
            <p class="text-white">Bidhaa bora na kwa bei rahisi, weka order bidhaa kutoka Dar au China<br>Bidhaa zinafika kwa uharaka na katika ubora wa kuridhisha.</p>
            <div class="mt-12">
                <router-link to="#" class="bg-blue-500 text-white px-8 py-3 font-medium rounded-md hover:bg-blue-700">Shop Now</router-link>
            </div>
        </div>
    </div> -->
            <!-- ./banner -->

            <!-- features
    <div class="container py-16 grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        
        <router-link to="#">
            <-- <div class="w-10/12 grid grid-cols-1 md:grid-cols-2   border-2 border-blue-600 justify-center"> --
                <div class="border-1 border-blue-600 rounded-sm px-3 py-6 mx-auto flex justify-center items-center gap-5">
                    <img src="../assets/images/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">Tunakuletea mlangoni</h4>
                        <p class="text-gray-500 text-sm">Weka order sasa</p>
                    </div>
                <-- </div>     --
            </div>
        </router-link>
        
            <router-link to="#">
                <div class="border-1 border-blue-600 rounded-sm px-3 py-6 flex justify-center items-center gap-2">
                    <img src="../assets/images/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">Kuchangiana </h4>
                        <p class="text-gray-500 text-sm">Onysha upendo</p>
                    </div>
                </div>
            </router-link>
            
            <router-link to="#">
                <div class="border-1 border-blue-600 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <img src="../assets/images/icons/service-hours.svg" alt="Delivery" class="w-12 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">Wasiliana nasi</h4>
                        <p class="text-gray-500 text-sm">Tunakujali mteja</p>
                    </div>
                </div>
            </router-link>
            
        </div> -->
        </div>
        <!-- ./features -->

        <!-- categories -->
        <div class="container py-16">
            <div class="flex mb-6 justify-between">
                <h2 class="text-2xl font-medium text-gray-800 uppercase">shop by category</h2>
                <button @click="allProducts" class="px-3 py-2 bg-blue-500 text-white rounded">All Products</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div @click="categoryFilter('shoes')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/shoes.jpg" alt="category 1"
                        class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40  flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Raba</div>
                </div>
                <div @click="categoryFilter('electronic')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/pc.jpg" alt="category 1" class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Vifaa vya Electronic</div>
                </div>
                <div @click="categoryFilter('perfume')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/perfume4.jpg" alt="category 1"
                        class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Perfume</div>
                </div>
                <div @click="categoryFilter('home')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/Sofa.jpg" alt="category 1" class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Vifaa Vya Nyumbani</div>
                </div>
                <div @click="categoryFilter('bag')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/pcBag.jpg" alt="category 1"
                        class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Bags</div>
                </div>
                <div @click="categoryFilter('jewlleries')" class="relative rounded-sm overflow-hidden group">
                    <img src="../assets/images/products/watch3.jpg" alt="category 1"
                        class="w-full object-cover max-h-[24em]">
                    <div
                        class="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                        Jewllery</div>
                </div>
            </div>
        </div>
        <!-- ./categories -->

        <!-- new arrival -->
        <div class="container pb-16">
            <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6 dark:text-slate-400">Vilivyopo Dar</h2>

            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 ">


                <!-- product -->
                <div v-for="(product, index) of related()" :key="index">
                    <ProductBox @click="currentProduct(product.id, product.category)" :imgPath="product.img" :name=product.name
                        :price="product.price" :stock="product.stock" />
                </div>
                <!-- product end -->


            </div>
        </div>
        <!-- ./new arrival -->

        <!-- footer -->
        <Footer />
        <!-- ./footer -->
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import ProductBox from '../components/ProductBox.vue';
import router from '../router';
import { onMounted } from 'vue';
import { useAppStore } from '../stores/Store';
import { storeToRefs } from 'pinia';

const myStore = useAppStore();
const { getSelectedProduct, getProducts01, filterCategory, getFilterCategory } = storeToRefs(myStore);

const currentProduct = (index, category) => {
    myStore.changeSelectedProduct(index, category);
    router.push('/productView')
}
const categoryFilter = (category) => {
    filterCategory.value = category;
    related();
}

const allProducts = () => {
    filterCategory.value = null
    related();
}
onMounted(() => {
    myStore.getFilterCategory
    related();
})
//  filtering products based on the current getCurrentCategory
const related = () => {
    if (getFilterCategory.value == null) {
        return getProducts01.value
    }
    else {
        return getProducts01.value.filter(p => p.category == getFilterCategory.value)
    }
}

</script>

<style scoped>.banner {
    background-image: linear-gradient(to bottom right, rgba(8, 79, 233, 0.299), rgba(8, 94, 223, 0.39)), url('../assets/images/banner-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}</style>