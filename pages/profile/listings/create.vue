<script setup>
import {useState} from "#app";

definePageMeta({
  layout: "custom",
  middleware: ["auth"],
})

const {makes} = useCars();
const info = useState('adInfo', () => {
  return {
    make: '',
    model: '',
    year: '',
    miles: '',
    price: '',
    city: '',
    seats: '',
    description: '',
    image: "url",
  }
})

const errorMessage = ref("");
const user = useSupabaseUser();
const supabase = useSupabaseClient();

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
    title: 'Price *',
    name: 'price',
    placeholder: '12000',
  },
  {
    id: 4,
    title: 'Miles *',
    name: 'miles',
    placeholder: '1000',
  },
  {
    id: 5,
    title: 'City *',
    name: 'city',
    placeholder: 'Austin',
  },
  {
    id: 6,
    title: 'Seats *',
    name: 'seats',
    placeholder: '5',
  },
  {
    id: 7,
    title: 'Features *',
    name: 'features',
    placeholder: 'Leather Interion, No Accidents',
  },
]

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) {
      console.log(`empty: ${key}`);
      return true;
    }
  }
  return false;
});

const handleSubmit = async () => {
  const fileName = Math.floor(Math.random() * 100000000);
  const {data, error} = await supabase.storage.from("images").upload("public/"+fileName,info.value.image)

  if (error) {
    errorMessage.value = "Can't upload the image";
  }
  const body = {
    ...info.value,
    city: info.value.city.toLowerCase(),
    features: info.value.features.split(', '),
    numberOfSeats: parseInt(info.value.seats),
    year: parseInt(info.value.year),
    price: parseInt(info.value.price),
    miles: parseInt(info.value.miles),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    image: data.path
  }
  delete body.seats;

  try {
    const response = await $fetch('/api/car/listings', {
      method: 'POST',
      body,
    })
    navigateTo('/profile/listings',);
  } catch (error) {
    errorMessage.value = error.statusMessage;
    await supabase.storage.from("images").remove(data.path)
  }
}

</script>
<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a new listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAddSelect title="Make *" :options="makes" name="make" @change-input="onChangeInput"/>
      <CarAddInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name"
                   :placeholder="input.placeholder" @change-input="onChangeInput"/>
      <CarAddTextarea title="Description" name="description" placeholder="" @change-input="onChangeInput"/>
      <CarAddImage @change-input="onChangeInput"/>
      <div>
        <button class="bg-blue-400 text-white rounded py-2 px-7 mt-3" :disabled="isButtonDisabled"
                @click="handleSubmit"
        >Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>