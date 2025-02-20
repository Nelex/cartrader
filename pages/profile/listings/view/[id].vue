<script setup>
import useFetchCar from "~/composables/useFetchCar.js";
const route = useRoute();

definePageMeta({
  layout: 'custom',
  middleware: ["auth"],
})

const car = useFetchCar(route.params.id)

</script>
<template>
<div class="rounded shadow mt-20">
  <div>
    <CarMessageCard :car="car" />
  </div>
</div>
</template>