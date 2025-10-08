document.getElementById("calcBtn").addEventListener("click", function() {
  const goalPrice = parseFloat(document.getElementById("goalPrice").value);
  const currentMoney = parseFloat(document.getElementById("currentMoney").value);
  const targetDate = new Date(document.getElementById("targetDate").value);
  const today = new Date();

  if (isNaN(goalPrice) || isNaN(currentMoney) || !targetDate) {
    alert("Please fill all fields correctly!");
    return;
  }

  const daysLeft = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
  const moneyLeft = goalPrice - currentMoney;

  if (moneyLeft <= 0) {
    document.getElementById("result").innerHTML = "🎉 You already have enough money!";
    return;
  }

  const dailySave = (moneyLeft / daysLeft).toFixed(2);

  document.getElementById("result").innerHTML = `
    <h3>💡 Plan:</h3>
    <p>You need to save <strong>${dailySave} EGP</strong> every day to reach your goal!</p>
  `;
});

document.getElementById("autoPlanBtn").addEventListener("click", function() {
  const goalPrice = parseFloat(document.getElementById("goalPrice").value);
  const currentMoney = parseFloat(document.getElementById("currentMoney").value);

  if (isNaN(goalPrice) || isNaN(currentMoney)) {
    alert("Please fill all fields first!");
    return;
  }

  const moneyLeft = goalPrice - currentMoney;
  const months = 6;
  const dailySave = (moneyLeft / (months * 30)).toFixed(2);

  const today = new Date();
  const targetDate = new Date();
  targetDate.setMonth(today.getMonth() + months);

  document.getElementById("result").innerHTML = `
    <h3>🗓 Auto Plan:</h3>
    <p>If you save <strong>${dailySave} EGP</strong> daily, you can buy it in <strong>6 months</strong> by <strong>${targetDate.toDateString()}</strong>.</p>
  `;
});