// =======================================
// 1. subArrayJumlahK(arr, k)
// =======================================

function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (let num of arr) {
        prefixSum += num;

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}

console.log("Subarray Jumlah K:");
console.log(subArrayJumlahK([1, 1, 1], 2));


// =======================================
// 2. karakterPertamaUnik(s)
// =======================================

function karakterPertamaUnik(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

console.log("\nKarakter Pertama Unik:");
console.log(karakterPertamaUnik("leetcode"));


// =======================================
// 3. topKFrequent(arr, k)
// =======================================

function topKFrequent(arr, k) {
    const freqMap = new Map();

    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    return [...freqMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

console.log("\nTop K Frequent:");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));