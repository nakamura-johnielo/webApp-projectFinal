const button_login = document.getElementById("login-button");

// ボタンがクリックされた時の処理
button_login.addEventListener("click", function () {
  // ページの遷移（リダイレクト）を行う
  console.log("クリック");
  window.location.href = "/home.html";
});
