export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    if (to.path.includes('admin')){
        if (!user || !user.value.is_admin) {
            return navigateTo('/')
        }
    }
})
