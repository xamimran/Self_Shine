jQuery(document).ready(function ($) {
    "use strict";
  
    // Initialize EmailJS with your user ID
    emailjs.init("oXJq6x97ZV2lo1k8l");
  
    // Contact form submission
    $(".contactForm").submit(function (event) {
      event.preventDefault();
      var formData = $(this).serializeArray();
      var data = {};
      $(formData).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      console.log("formData:", data);
  
      // Check if all expected fields are present
      if (!data.from_name || !data.from_email || !data.date || !data.time || !data.service) {
        console.error("Form data is incomplete:", data);
        alert("Please fill in all the fields.");
        return;
      }
  
      emailjs.send("service_cvv2wpb", "template_bty0e56", data).then(
        function (response) {
          // Handle success
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $(".contactForm").find("input, textarea").val("");
        },
        function (error) {
          // Handle errors
          console.error("Email sending failed:", error);
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $("#errormessage").html(error);
        }
      );
      alert("Thanks for choosing us, we will get back to you soon");
      return false; // Prevent further propagation of the submit event
    });
  });
  