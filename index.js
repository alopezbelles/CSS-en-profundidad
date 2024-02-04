

function isPalindrom(word){
    let reverseWord = word.split('').reverse().join('');
    reverseWord == word? console.log(true) : console.log(false);
}

isPalindrom("otto");
isPalindrom("adios");