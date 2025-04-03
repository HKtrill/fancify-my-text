function makeBigger() {
    // Change text area font size to 24pt
    document.getElementById("userText").style.fontSize = "24pt";
}

function changeStyle() {
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancyShmancy");
    
    if (fancyRadio.checked) {
        // Apply FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Apply BoringBetty styles (reset to normal)
        textArea.style.fontWeight = "normal";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    }
}
