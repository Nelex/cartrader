<script setup>
import {useUtilities} from "~/composables/useUtilities.js";

definePageMeta({
  layout: 'custom',
})
const {toTitleCase} = useUtilities()
const route = useRoute();
useHead({
  title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`,
})

</script>
<template>
  <div>
      <div class="mt-32 flex">
        <CarSidebar/>
        <NuxtPage />
      </div>
  </div>
</template>