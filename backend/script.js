document.addEventListener("DOMContentLoaded", () => {

    // INIT EMAILJS
    emailjs.init({
        publicKey: "uJBJVq59L2g0Voa4l",
    });

    // FORM
    const form = document.getElementById("contact-form");

    // BUTTON
    const button = document.querySelector(".button-send");

    // SUBMIT EVENT
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        // DISABLE BUTTON
        button.disabled = true;
        button.textContent = "Sending...";

        // GET DATA
        const data = {
            name: document.getElementById("name").value.trim(),

            email: document.getElementById("email").value.trim(),

            reply_to: document.getElementById("email").value.trim(),

            subject: document.getElementById("subject").value.trim(),

            message: document.getElementById("message").value.trim(),
        };

        // VALIDATION
        if (
            !data.name ||
            !data.email ||
            !data.subject ||
            !data.message
        ) {

            alert("❌ Please fill all fields");

            button.disabled = false;
            button.textContent = "Send Message";

            return;
        }

        try {

            // SEND EMAIL
            const response = await emailjs.send(
                "service_wr4rcg3",
                "template_jbw542k",
                data
            );

            // DEBUG
            console.log("SUCCESS:", response);

            // SUCCESS MESSAGE
            alert("✅ Message sent successfully!");

            // RESET FORM
            form.reset();

        } catch (error) {

            // ERROR DEBUG
            console.error("EMAILJS ERROR:", error);

            alert("❌ Failed to send message");

        } finally {

            // ENABLE BUTTON AGAIN
            button.disabled = false;
            button.textContent = "Send Message";
        }
    });
});