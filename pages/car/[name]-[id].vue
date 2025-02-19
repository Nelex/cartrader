<script setup>
import {useUtilities} from "~/composables/useUtilities.js";
import useCars from "~/composables/useCars.js";

definePageMeta({
  layout: 'custom'
})
const {toTitleCase} = useUtilities();
const {cars} = useCars();

const route = useRoute();
useHead({
  title: toTitleCase(route.params.name)
})

const car = computed(() => {
  return cars.find((c) => {
        return c.id === parseInt(route.params.id);
      }
  );
})

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID ${route.params.id} not found.`
  });
}

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