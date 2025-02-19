<script setup>
const route = useRoute();
useHead({
  title: toTitleCase(route.params.name)
})

function toTitleCase(str) {
  return str[0].toUpperCase() + str.substring(1);
}
</script>
<template>
  <div>
    <NavBar/>
    <div>
      <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
        <CarDetailHero/>
        <CarDetailAttributes/>
        <CarDetailAttributes/>
        <CarDetailContact/>
      </div>
    </div>
  </div>
</template>