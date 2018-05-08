class BinarySearch {
    constructor(data) {
        this.arr = data;
        this.arr.sort();
    }

    search(target) {
        let m, left = 0, right = this.arr.length;
        while (left <= right) {
            m = Math.floor((right + left) / 2);
            if (this.arr[m] < target) left = m + 1;
            else if (this.arr[m] > target) right = m - 1;
            else return m;
        }
        return false;
    }
}

export default BinarySearch;