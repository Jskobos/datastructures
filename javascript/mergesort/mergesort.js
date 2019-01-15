const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  return _merge(mergeSort(arr.slice(0,middle)), mergeSort(arr.slice(middle,arr.length)));
}

const _merge = (arr1, arr2) => {
  const merged = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      merged.push(arr1.shift());
     } else {
       merged.push(arr2.shift());
     }
  }
  return merged.concat(arr1, arr2);
};

export default mergeSort;