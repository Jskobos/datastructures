const permutation = (str) => {
    const _permutation = (n) => {
        if (n === 1) { permutations.push(arr.join('')); }
        for (let i = 0; i < n; i++) {
            _permutation(n-1);
            n % 2 === 0 ? _swap(i, n-1) : _swap(0, n-1);
        }
    };

    const _swap = (x, y) => {
        const tmp = arr[x];
        arr[x] = arr[y];
        arr[y] = tmp;
    };

    const arr = str.split('');
    const permutations = [];
    _permutation(arr.length);
    return permutations;
};

export default permutation;