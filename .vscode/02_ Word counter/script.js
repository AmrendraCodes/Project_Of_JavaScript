const textInput = document.getElementById("textInput");
const resultDiv = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

textInput.addEventListener("input", updateMetrics);

function updateMetrics(){
    const text = textInput.value;
    const trimmed = text.trim()

    const words = trimmed.length ? trimmed.split(/\s+/).filter(Boolean) : [];

    const character = text.length;

    const sentence = (text.match(/[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/g) || []).length;

    const readTime =    Math.ceil(words.length/200);

    const paragraphs = trimmed ? trimmed.split(/\n+/).filter(Boolean).length : 0;

    resultDiv.innerHTML =`<p>Words: ${words.length}</p>
    <p>Character: ${character}</p>
    <p>sentence: ${sentence}</p>
    <p>paragraphs : ${paragraphs}</p>
    <p>Estimated Read Time: ${readTime} min</p>`;

}

if (copyBtn) {
    copyBtn.addEventListener("click", function() {
        // Remove HTML tags for plain text copy
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = resultDiv.innerHTML;
        const textToCopy = tempDiv.innerText;
        navigator.clipboard.writeText(textToCopy);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy Results", 1500);
    });
}



