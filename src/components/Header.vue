<template>
    <header class="py-4 shadow-sm bg-white ">
        <div class="container flex items-center justify-between">
            <router-link to="index.html">
                <!-- <img src="../assets/images/logo.svg" alt="Logo" class="w-32"> -->
            <span Class="text-2xl md:text-3xl font-bold" >MASHAGLOBAL</span>
            </router-link>
            
            <!-- search input  -->
            <slot/>
            <!-- end search inpt -->
            
            <div class="flex items-center space-x-4 ">
                <router-link to="/cartView" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        2</div>
                </router-link>
                <router-link to="/accountView" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </router-link>
            </div>
        </div>
    </header>
</template>
    
