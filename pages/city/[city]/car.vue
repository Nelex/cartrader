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
      <NuxtErrorBoundary>
        <CarSidebar/>
        <NuxtPage/>
        <template #error="{error}">
          <div class="text-center mx-auto flex flex-col">
            <h1 class="text-5xl text-red-600 mb-4">Sorry, something went wrong</h1>
            <code>{{ error }}</code>
            <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4" @click="error.value = null">
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>