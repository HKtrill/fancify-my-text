function makeBigger() {
    var textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function changeStyle() {
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancyShmancy");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        alert("Hello World!");
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    var textArea = document.getElementById("userText");
    var text = textArea.value;
    
    // Convert text to uppercase
    text = text.toUpperCase();
    
    // Add "-Moo" to the end of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        if (sentences[i].trim().length > 0) {
            // Find the last word in the sentence and add "-Moo" to it
            var words = sentences[i].trim().split(" ");
            if (words.length > 0) {
                var lastWordIndex = words.length - 1;
                words[lastWordIndex] = words[lastWordIndex] + "-MOO";
                sentences[i] = words.join(" ");
            }
        }
    }
    
    // Join sentences back together with periods
    text = sentences.join(". ");
    
    // Set the modified text back to the textarea
    textArea.value = text;
}
