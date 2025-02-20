<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const logout = async () => {
  const {error} = supabase.auth.signOut();
  navigateTo('/');
  if (error) {
    return console.log(error);
  }
}
</script>
<template>
  <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
    <NuxtLink class="text-3xl font-mono" to="/">CarTrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink class="mr-5" to="/profile/listings" v-if="user">{{user.email}}</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink class="mr-5" to="/login" v-else>Login</NuxtLink>
  </header>
</template>