<script setup>
import useFetchCar from "~/composables/useFetchCar.js";
import {useFetch} from "#app";
const route = useRoute();

definePageMeta({
  layout: 'custom',
  middleware: ["auth"],
})

const car = useFetchCar(route.params.id)


const {data:messages} = useFetch(`/api/car/listings/${route.params.id}/message`)

</script>
<template>
<div class="rounded shadow mt-20">
  <div>
    <CarMessageCard v-for="message in messages" :key="message.id" :message="message" :car="car" />
  </div>
</div>
</template>