document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const params = {
        from_name: document.querySelector("input[name='Name']").value,
        from_email: document.querySelector("input[name='Email']").value,
        message: document.querySelector("textarea[name='Message']").value
      };

      emailjs.send("service_grvdxtq", "template_4kjhvzh", params)
        .then(function() {
          alert("Your message has been sent successfully!");
          document.getElementById("contactForm").reset();
          const modal = bootstrap.Modal.getInstance(document.getElementById('contactFormModal'));
          modal.hide();
        })
        .catch(function(error) {
          alert("Failed to send message. Please try again.");
          console.log("EmailJS Error:", error);
        });
    });