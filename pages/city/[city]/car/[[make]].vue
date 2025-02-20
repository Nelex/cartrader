<script setup>

const route = useRoute()
const cars = await useFetchCars(route.params.city,{
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
})
</script>
<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h1 class="text-red-600" v-else>No cars found with filters</h1>
  </div>
</template>
