export const getShortestStringFromArr = arr => {
    return arr.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, arr[0]);
};
