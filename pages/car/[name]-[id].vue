<script setup>
import {useUtilities} from "~/composables/useUtilities.js";
import useFetchCar from "~/composables/useFetchCar.js";
const route = useRoute();

const {data: car} = await useFetchCar(route.params.id);

definePageMeta({
  layout: 'custom',
  car: Object
})
const {toTitleCase} = useUtilities();

useHead({
  title: toTitleCase(route.params.name)
})

</script>
<template>
  <div v-if="car">
    <div>
      <CarDetailHero :car="car" />
      <CarDetailAttributes :features="car.features" />
      <CarDetailDescription :description="car.description" />
      <CarDetailContact :car="car" />
    </div>
  </div>
</template>