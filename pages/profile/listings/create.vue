<script setup>
import {useState} from "#app";

definePageMeta({
  layout: "custom",
  middleware: ["auth"],
})

const {makes} = useCars();
const info = useState('adInfo', () =>{
  return {
    make: '',
    model: '',
    year: '',
    miles: '',
    price: '',
    city: '',
    seats: '',
    description: '',
    image: null,
  }
})

const onChangeInput = (data, name) => {
  info.value[name] = data;
}

const inputs = [
  {
    id: 1,
    title: 'Model *',
    name: 'model',
    placeholder: 'Civic',
  },
  {
    id: 2,
    title: 'Year *',
    name: 'year',
    placeholder: '2019',
  },
  {
    id: 3,
    title: 'Miles *',
    name: 'miles',
    placeholder: '1000',
  },
  {
    id: 4,
    title: 'City *',
    name: 'city',
    placeholder: 'Austin',
  },
  {
    id: 5,
    title: 'Seats *',
    name: 'seats',
    placeholder: '5',
  },
  {
    id: 1,
    title: 'Features *',
    name: 'features',
    placeholder: 'Leather Interion, No Accidents',
  },
]

</script>
<template>
<div>
  <div class="mt-24">
    <h1 class="text-6xl">Create a new listing</h1>
  </div>
  <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
    <CarAddSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput"/>
    <CarAddInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder" @change-input="onChangeInput"/>
    <CarAddTextarea title="Description" name="description" placeholder="" @change-input="onChangeInput"/>
    <CarAddImage @change-input="onChangeInput"/>
  </div>
</div>
</template>