<script setup>
import {useRoute} from "#app";

const message = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
})

const errorMessage = ref("")
const successMessage = ref("")
const route = useRoute()

const disabledButton = computed(() => {
  for (let key in message.value) {
    if (!message.value[key]) {
      return true
    }
  }
  return false
})
const onSubmit = async () => {
  try {
    const response = await $fetch(`/api/car/listings/${route.params.id}/message`,{
      method: "POST",
      body: message.value
    })
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
    successMessage.value = "Message successfully sent!"
    errorMessage.value = "";
  }
  catch (error) {
    errorMessage.value = error.statusMessage
    successMessage.value = "";
  }

}
</script>
<template>
  <div class="mt-10 w-full">
    <div class="flex w-full justify-between">
      <input v-model="message.name" type="text" class="border p-1 mr-5" placeholder="Name">
      <input v-model="message.email" type="text" class="border p-1 mr-5" placeholder="Email">
      <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone">
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="onSubmit" :disabled="disabledButton">Submit</button>
    <p class="mt-3 text-red-400" v-if="errorMessage">{{errorMessage}}</p>
    <p class="mt-3 text-green-400" v-if="successMessage">{{successMessage}}</p>
  </div>
</template>