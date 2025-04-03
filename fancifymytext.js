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
    
    // Split the text into sentences
    var sentences = text.split(".");
    
    // Process each sentence
    for (var i = 0; i < sentences.length; i++) {
        // If this isn't an empty string
        if (sentences[i].trim().length > 0) {
            // Split the sentence into words
            var words = sentences[i].trim().split(" ");
            
            // Add "-MOO" to the last word
            if (words.length > 0) {
                var lastIndex = words.length - 1;
                words[lastIndex] = words[lastIndex] + "-MOO";
            }
            
            // Join the words with underscores instead of spaces
            sentences[i] = words.join("_");
        }
    }
    
    // Join the sentences back with periods
    text = sentences.join(".");
    
    // Update the textarea
    textArea.value = text;
}
}
