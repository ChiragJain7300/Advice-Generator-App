const adviceNum = document.querySelector(".adviceNum");
const adviceText = document.querySelector(".adviceText");
const adviceHead = adviceNum.parentElement;

const getAdvice = async () => {
  const slipRes = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await slipRes.json();
  adviceNum.textContent = slip.id;
  adviceText.textContent = slip.advice;
  adviceHead.textContent = adviceHead.textContent.toUpperCase();
};
getAdvice();
