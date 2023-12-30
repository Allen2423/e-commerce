<template>
    <form class="bg-white px-8 py-3 rounded-lg">
        <p class="my-6 font-bold text-xl">Shipping Address</p>
    <div class=" grid grid-cols-1 lg:grid-cols-2 gap-3 ">
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
        <input class="bg-blue-500 w-32 py-2 text-white rounded" type="submit" value="submit">
    </div>
</form>
</template>
<script setup>
import { ref } from 'vue';
const message = ref("");

const Region = ref("");
const District = ref("");
const Ward = ref("");
const Street = ref("");
const Postcode = ref("");
const houeNo = ref("");

const payment = ref("");
const validation = () => {
  
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
