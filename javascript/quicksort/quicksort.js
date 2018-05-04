const swap = (arr, x, y) => {
	const tmp = arr[y];
	arr[y] = arr[x];
	arr[x] = tmp;
	return arr;
};

const partition = (arr, lo, hi) => {
  const pivot = arr[lo];
  let [i, j] = [lo, hi+1];
  while (true) {
    while (arr[++i] <= pivot ) {
      if (i === hi) break;
    }
    while (arr[--j] >= pivot ) {
      if (j === lo) break;
    }
    if (i >= j) break;
    swap(arr, i, j);
  }
  swap(arr, lo, j);
  return j;
};

const shuffle = (arr) => {
  return arr;
}

const sort = (arr) => {
  arr = shuffle(arr);
  return _sort(arr, 0, arr.length - 1);
};

const _sort = (arr, lo, hi) => {
  if (hi <= lo) return;
  const p = partition(arr, lo, hi);
  _sort(arr,lo, p - 1);
  _sort(arr,p + 1, hi);
  return arr;
};
