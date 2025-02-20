import cars from '@/data/cars.json'

export default defineEventHandler((event) => {
    const { id } = event.context.params;

    const car = cars.find((car) => {
        return car.id === parseInt(id)
    });
    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID ${id} not found.`,
        })
    }
    return car;
})