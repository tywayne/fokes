import "normalize.css";
import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("signup_form");

  const handleSuccess = () => {
    form.reset();
    form.querySelector('button[type="submit"]').innerHTML = "Submit";
    form.querySelector('button[type="submit"]').attributes.disabled = false;
    document.getElementById("form_success").classList.remove("hidden");
  };

  const handleError = (err) => {
    document.getElementById("form_error").classList.remove("hidden");
    console.log(err);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);

    let queryString = Object.keys(formData)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]);
      })
      .join("&");

    let url = "https://script.google.com/macros/s/AKfycbxXCMdXfCTcyKdKE7dgmnwVE_BbnL_40mVECslEKMQZVReen89N/exec";

    form.querySelector('button[type="submit"]').innerHTML = "Sending...";
    form.querySelector('button[type="submit"]').attributes.disabled = true;
    fetch(`${url}?${queryString}`).then(handleSuccess).catch(handleError);
  });
});
