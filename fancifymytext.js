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
        alert("Fancy style activated!");
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    var textArea = document.getElementById("userText");
    var text = textArea.value;
    
    text = text.toUpperCase();
    
    // Add "-Moo" to the end of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length - 1; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    text = sentences.join(". ");
    
    textArea.value = text;
}
