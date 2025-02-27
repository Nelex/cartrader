export default async (city, filters) => {
    const route = useRoute();
    const {data, error, refresh} = await useFetch(`/api/cars/${city}`, {
        params: {
            ...filters,
        }
    });
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: 'Unable to fetch cars',
        })
    }
    watch(() => route.query, () => { window.location.reload(true) });
    return data;
}