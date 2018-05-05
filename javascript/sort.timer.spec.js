import quickSort from './quicksort/quicksort';
import mergeSort from './mergesort/mergesort';

const sorts = [
    {
        'name': 'Mergesort',
        'sort': mergeSort,
        'history': []
    },
    {
        'name': 'Quicksort',
        'sort': quickSort,
        'history': []
    }
]

const generateRandomArray = (n) => {
    const randomArray = [];
    for (let i = 0; i < n; i++) {
        randomArray.push(Math.floor(Math.random()*1000));
    }
    return randomArray;
} 

const compareNumbers = (a,b) => { return a - b; }

const arrayMean = (arr) => {
    const sum = arr.reduce(function(a, b) { return a + b; });
    return sum / arr.length;
}

// This is a "test" because Node still doesn't handle imports natively.

xit("Should sort random arrays effectively", () => {
    const numTrials = 5;
    for (let i = 0; i < numTrials; i++) {
        console.log(`Randomized trial run ${i}/${numTrials}`);
        const longArray = generateRandomArray(1000);
        sorts.forEach((sort) => {
            const t0 = performance.now();
            const sorted = sort.sort(longArray);
            const t1 = performance.now();
            const systemSorted = longArray.sort(compareNumbers);
            expect(sorted).toEqual(systemSorted);
            const delta = t1 - t0;
            console.log(`${sort.name} completed in about ${delta} milliseconds.`);
            sort.history.push(delta);
        });
    };
    console.log('Average runtime for each sort:');
    sorts.forEach((sort) => {
        console.log(`${sort.name}: average run time of ${arrayMean(sort.history)}`);
    });
});