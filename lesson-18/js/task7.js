function getTotalPrice() {
  const transport = parseInt(document.getElementById("transport").value);
  const breakfast = document.getElementById("breakfast").checked ? parseInt(document.getElementById("breakfast").value) : 0;
  const lunch = document.getElementById("lunch").checked ? parseInt(document.getElementById("lunch").value) : 0;
  const dinner = document.getElementById("dinner").checked ? parseInt(document.getElementById("dinner").value) : 0;
  const guide = parseInt(document.querySelector(".guide:checked").value);
  const total = transport + breakfast + lunch + dinner + guide;
  document.getElementById("result").innerText = `Загальна вартість = ${total}`;
}
const button = document.getElementById("sum").addEventListener("click", getTotalPrice);
