// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        '@vueuse/nuxt',
        "@nuxtjs/supabase",
    ],
    supabase: {
        redirect: false,
        cookieOptions: {
            maxAge: 60 * 60 * 8,
            sameSite: 'lax',
            secure: true
        }
    }
})
