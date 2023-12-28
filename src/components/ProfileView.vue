<template>
    <div>
            <!-- info -->
            <div class="col-span-12 md:col-span-8 lg:col-span-8  bg-white rounded px-6 xl:px-10 pt-5 pb-7">
                <h4 class="text-lg font-medium capitalize mb-4">
                    Profile information
                </h4>
                <div class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="first">First name</label>
                            <input type="text" name="first" id="first" class="w-[100%] input-box bg-slate-300 py-3 rounded px-2" placeholder="First Name">
                        </div>
                        <div>
                            <label for="last">Last name</label>
                            <input type="text" name="last" id="last" class="w-[100%]  bg-slate-300 py-3 rounded px-2" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div >
                            <label for="email">Email Address</label>
                            <input type="email" name="email" id="email" class="w-[100%] bg-slate-300 py-3 rounded px-2" placeholder="Email">
                        </div>
                        <div>
                            <label for="phone">Phone number</label>
                            <input type="text" name="phone" id="phone" class="w-[100%] bg-slate-300 py-3 rounded px-2" placeholder="Phone Number">
                        </div>
                    </div>
                </div>
    
                <div class="mt-4">
                    <button type="submit"
                        class="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">save
                        changes</button>
                </div>
            </div>
            <!-- ./info -->
    
        </div>
        <!-- ./wrapper -->
    
        
        <!-- copyright -->
            <!-- <Footer/> -->
        <!-- ./copyright -->
</template>


<script setup>
import NavBar from './NavBar.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Sidebar from './Sidebar.vue';
</script>


<style scoped>

</style>