// Укажите действующую публичную HTTPS-ссылку провайдера на оплату интенсива за 9 €.
const checkoutUrl = "";

document.querySelector("#year").textContent = new Date().getFullYear();

if (URL.canParse(checkoutUrl) && new URL(checkoutUrl).protocol === "https:") {
  const purchase = document.createElement("a");
  purchase.className = "button button-light";
  purchase.href = checkoutUrl;
  purchase.textContent = "Купить интенсив за 9 €";
  document.querySelector("#checkout").replaceChildren(purchase);
  for (const link of document.querySelectorAll('a[href="#join"]')) {
    link.href = checkoutUrl;
    link.textContent = "Купить за 9 €";
  }
}
