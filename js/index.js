document.addEventListener("DOMContentLoaded", () => {
    const nameEl = document.getElementById("typed-name");
    const taglineEl = document.getElementById("typed-tagline");

    const taglines = [
        "an AI Engineer",
        "a Full-Stack Developer",
        "a Research Enthusiast",
        "building the future"
    ];

    let taglineIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typingSpeed = 90;
    const deletingSpeed = 55;
    const holdDelay = 1800;

    function typeName(text, speed, callback) {
        let i = 0;

        function type() {
            if (i < text.length) {
                nameEl.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }

        type();
    }

    function animateTagline() {
        const current = taglines[taglineIndex];

        taglineEl.classList.add("cursor");

        if (!deleting) {
            taglineEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                deleting = true;
                setTimeout(animateTagline, holdDelay);
                return;
            }

            setTimeout(animateTagline, typingSpeed);
        } else {
            taglineEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                taglineIndex = (taglineIndex + 1) % taglines.length;
            }

            setTimeout(animateTagline, deletingSpeed);
        }
    }

    typeName("Tanay Shah", 120, () => {
        setTimeout(animateTagline, 500);
    });
});