document.addEventListener("DOMContentLoaded", () => {
    const nameEl = document.getElementById("typed-name");
    const taglineEl = document.getElementById("typed-tagline");

    const fixed = "Aspiring ";
    const words = ["Full Stack Web Developer.", "Android App Developer."];
    const altPhrase = "Always ready to learn!";

    const typingDelay = 100;
    const erasingDelay = 70;
    const holdTime = 2000;

    let wordIndex = 0;
    let charIndex = 0;
    let mode = "aspiring";
    let fixedIndex = fixed.length;
    let altIndex = 0;

    function setCursor(on) {
        if (on) taglineEl.classList.add("cursor");
        else taglineEl.classList.remove("cursor");
    }

    function typeWord() {
        setCursor(true);
        if (charIndex < words[wordIndex].length) {
            taglineEl.innerHTML = fixed + "<i>" + words[wordIndex].substring(0, charIndex + 1) + "</i>";
            charIndex++;
            setTimeout(typeWord, typingDelay);
        } else {
            setCursor(false);
            setTimeout(deleteWord, holdTime);
        }
    }

    function deleteWord() {
        setCursor(true);
        if (charIndex > 0) {
            charIndex--;
            taglineEl.innerHTML = fixed + "<i>" + words[wordIndex].substring(0, charIndex) + "</i>";
            setTimeout(deleteWord, erasingDelay);
        } else {
            if (wordIndex < words.length - 1) {
                wordIndex++;
                setTimeout(typeWord, typingDelay);
            } else {
                deleteFixed();
            }
        }
    }

    function deleteFixed() {
        setCursor(true);
                if (fixedIndex > 0) {
            fixedIndex--;
            taglineEl.textContent = fixed.substring(0, fixedIndex);
            setTimeout(deleteFixed, erasingDelay);
        } else {
            mode = "alt";
            altIndex = 0;
            setTimeout(typeAlt, typingDelay);
        }
    }

    function typeAlt() {
        setCursor(true);
        if (altIndex < altPhrase.length) {
            taglineEl.textContent = altPhrase.substring(0, altIndex + 1);
            altIndex++;
            setTimeout(typeAlt, typingDelay);
        } else {
            setCursor(false);
            setTimeout(deleteAlt, holdTime);
        }
    }

    function deleteAlt() {
        setCursor(true);
        if (altIndex > 0) {
            altIndex--;
            taglineEl.textContent = altPhrase.substring(0, altIndex);
            setTimeout(deleteAlt, erasingDelay);
        } else {
            mode = "aspiring";
            fixedIndex = 0;
            setTimeout(typeFixedBack, typingDelay);
        }
    }

    function typeFixedBack() {
        setCursor(true);
        if (fixedIndex < fixed.length) {
            fixedIndex++;
            taglineEl.textContent = fixed.substring(0, fixedIndex);
            setTimeout(typeFixedBack, typingDelay);
        } else {
            wordIndex = 0;
            charIndex = 0;
            setCursor(false);
            setTimeout(typeWord, holdTime);
        }
    }

    function typeName(text, delay, callback) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                nameEl.textContent += text.charAt(i);
                i++;
                setTimeout(typing, delay);
            } else if (callback) {
                callback();
            }
        }
        typing();
    }

    typeName("Tanay Shah", 120, () => {
        taglineEl.innerHTML = fixed + "<i></i>";
        wordIndex = 0;
        charIndex = 0;
        fixedIndex = fixed.length;
        setTimeout(typeWord, holdTime);
    });
});