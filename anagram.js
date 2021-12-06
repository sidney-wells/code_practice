// anagram challenge 

function validAnagram(str1, str2) {
    // if the lengths are not equal, they are not anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyStr1 = {};
    let frequencyStr2 = {};
    
    // determine the char and frequency of str1
    for (let str of str1) {
        frequencyStr1[str] = (frequencyStr1[str] || 0) + 1;
    }
    // determine the char and frequency of str2
    for (let str of str2) {
        frequencyStr2[str] = (frequencyStr2[str] || 0) + 1;
    }

    // compare the char and frequency to str2
    for (let key in frequencyStr1) {
        if (!(key in frequencyStr2)) {
            return false;
        }
        if (frequencyStr1[key] !== frequencyStr2[key]) {
            return false;
        }
    }
    return true;
}
console.log(validAnagram("hello", "hello"))
console.log(validAnagram(" ", " "));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("anagram", "nagaram"));