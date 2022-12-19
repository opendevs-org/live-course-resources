
export const calculateAverage = (arr) => {
    const length = arr.length;
    if (length === 0) {
        throw new Error("Cannot calculate average of an empty array! Please provide at least one number!");
    }

    return arr.reduce((acc, curr) => {
        if (typeof curr !== "number") {
            throw new Error("Cannot calculate average of a non-numeric array! Element: " + curr + " is not a number!");
        }
        return acc + curr
    }, 0) / length;
}
