import "normalize.css";
import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("signup_form");

  const handleSuccess = () => {
    form.reset();
    form.querySelector('button[type="submit"]').innerHTML = "Submit";
    form.querySelector('button[type="submit"]').disabled = false;
    document.getElementById("form_success").classList.remove("hidden");
  };

  const handleError = (err) => {
    document.getElementById("form_error").classList.remove("hidden");
    console.log(err);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(form));
    let url = "https://script.google.com/macros/s/AKfycbxXCMdXfCTcyKdKE7dgmnwVE_BbnL_40mVECslEKMQZVReen89N/exec";

    form.querySelector('button[type="submit"]').innerHTML = "Sending...";
    form.querySelector('button[type="submit"]').disabled = true;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(handleSuccess)
      .catch(handleError);
  });
});
