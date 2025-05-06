emailjs.init("RZ1IEAWgYiAVKzxTr");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_n4wzuz9", "template_ar3cmdo", this).then(
      () => {
        alert("message sent successfully!");
        this.reset();
      },
      (error) => {
        alert("Failed to send message, please try again.");
        console.log(error);
      }
    );
  });
