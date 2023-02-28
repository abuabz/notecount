
function changeword(){
    words= document.getElementById("mail1").value
    var numWords = 0;
    for (var i = 0; i < words.length; i++) {
        var currentCharacter = words[i];
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }
    numWords += 1;
    document.getElementById("mail1")
    .innerHTML = numWords;
    document.getElementById("wrdcount").innerText=numWords
}
