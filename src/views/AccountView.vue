<template>
    <div>
        <!-- header -->
        <Header/>
        <!-- header end -->
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
            <p class="text-gray-600 font-medium">Account</p>
        </div>
        <!-- ./breadcrumb -->
    
        <!-- account wrapper -->
        <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16 ">
    
            <!-- sidebar -->
            <Sidebar/>
            <!-- ./sidebar -->
    
            <!-- info -->
            <div class="grid col-span-12 md:col-span-8 lg:col-span-9 ">
                <RouterView/>
            </div>
            <!-- ./info -->
    
        </div>
        <!-- ./account wrapper -->
    
    
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
import Sidebar from "../components/Sidebar.vue";
</script>


<style scoped>

</style>