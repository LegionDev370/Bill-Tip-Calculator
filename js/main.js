let inputBill = document.querySelector(".bill-input");
let billAmount = document.querySelector("#bill-amount");
let billPeople = document.querySelector(".bill-people-active");
let calculateTip = document.querySelector(".calculate-tip-amount");
let calculateTotalAmount = document.querySelector(".calculate-total-amount-span");
let resetBtn = document.querySelector(".reset-contents")
let btn = document.querySelectorAll(".input-precentage")[0];
let btn1 = document.querySelectorAll(".input-precentage")[1];
let btn2 = document.querySelectorAll(".input-precentage")[2];
let btn3 = document.querySelectorAll(".input-precentage")[3];
let btn4 = document.querySelectorAll(".input-precentage")[4];
let btnClick = document.querySelector(".reset-btn-active");
const precentValue = [5, 10, 15, 25, 50];
let valuePrecent = 0;
btn.addEventListener("click", () => {
  btn.classList.toggle("active-select");
  btn1.classList.remove("active-select");
  btn2.classList.remove("active-select");
  btn3.classList.remove("active-select");
  btn4.classList.remove("active-select");
  valuePrecent = btn.value;
});
btn1.addEventListener("click", () => {
  btn1.classList.toggle("active-select");
  btn.classList.remove("active-select");
  btn2.classList.remove("active-select");
  btn3.classList.remove("active-select");
  btn4.classList.remove("active-select");
  valuePrecent = btn1.value;
});
btn2.addEventListener("click", () => {
  btn2.classList.toggle("active-select");
  btn.classList.remove("active-select");
  btn1.classList.remove("active-select");
  btn3.classList.remove("active-select");
  btn4.classList.remove("active-select");
  valuePrecent = btn2.value;
});
btn3.addEventListener("click", () => {
  btn3.classList.toggle("active-select");
  btn.classList.remove("active-select");
  btn1.classList.remove("active-select");
  btn2.classList.remove("active-select");
  btn4.classList.remove("active-select");
  valuePrecent = btn3.value;
});
btn4.addEventListener("click", () => {
  btn4.classList.toggle("active-select");
  btn.classList.remove("active-select");
  btn1.classList.remove("active-select");
  btn2.classList.remove("active-select");
  btn3.classList.remove("active-select");
  valuePrecent = btn4.value;
});

btnClick.addEventListener("click", () => {
  let valueBillAmount = billAmount.value;
  let valuePeople = billPeople.value;
  function calculateAmountTip() {
    let tip =
      (Number(valueBillAmount) * Number(valuePrecent)) /
      100 /
      Number(valuePeople);
    return tip.toFixed(2);
  }
  calculateTip.textContent = calculateAmountTip() + "$";

  function calculateTotalAmountFunc(){
    let total = (Number(valueBillAmount) + (Number(valueBillAmount) * Number(valuePrecent) / 100)) / valuePeople;
    return total.toFixed(2);
  }
  calculateTotalAmount.textContent = calculateTotalAmountFunc() + "$";
});
resetBtn.addEventListener("click", () => {
    calculateTip.textContent = "";
    calculateTotalAmount.textContent = "";
    btn.classList.remove("active-select");
    btn1.classList.remove("active-select");
    btn2.classList.remove("active-select");
    btn3.classList.remove("active-select");
    btn4.classList.remove("active-select");
})