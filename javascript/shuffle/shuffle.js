const shuffle = (arr) => {
    for (let i = 0; i < arr.length -1; i++) {
        const j = Math.floor(Math.random() * i + 1);
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

export default shuffle;