const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_REPLACE_WITH_YOUR_LINK";

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll(".stripe-link").forEach((link) => {
  link.href = STRIPE_CHECKOUT_URL;
});
