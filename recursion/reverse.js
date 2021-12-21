function reverse(str) {
    if (str.length <= 1) return str;
    // instead of trying to take the last value
        // take the first value and return the str minus that first string
        // this will ensure the last value 
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'