export const useImages = (path) => {
    const config = useRuntimeConfig();
    return `${config.public.supabase.url}/storage/v1/object/public/images/${path}`
}