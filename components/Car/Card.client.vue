<script setup>
import hearFilled from "/public/img/heartFilled.png";
import hearOutline from "/public/img/heartOutline.png";
import {useImages} from "~/composables/useImages.js";

const props = defineProps({
  car: Object,
  favored: Boolean,
})

const emit = defineEmits(['favor'])
</script>
<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img class="absolute w-7 right-5 top-2 z-20" alt="" :src="favored ? hearFilled : hearOutline" @click="emit('favor', car.id)">
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg :src="useImages(car.image)" alt="car 1" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">{{car.description}}</p>
        </div>
        <h1 class="mt-auto text-xl">${{car.price}}</h1>
      </div>
    </div>
  </div>
</template>