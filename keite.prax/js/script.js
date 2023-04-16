document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".slide-menu").classList.toggle("active");
});

// bodyタグを取得
const documentBody = document.querySelector("body");
// body直下にオーバーレイの要素を作成
var newElement = document.createElement("div");
newElement.setAttribute("class", "fade-layer");
documentBody.prepend(newElement);

// 1.5秒経ったらオーバーレイ非表示
setTimeout(function () {
  newElement.style.display = "none";
}, 1500);

// ページ遷移時にフェードアウト
window.addEventListener(
  "beforeunload",
  () => {
    documentBody.classList.add("fadeout");
    setTimeout(function () {
      documentBody.style.display = "none";
    }, 1000);
  },
  false
);

//////hamburger-menu//////
//////shop la fiestaのショップ名変更
/////sns運用の課題〈コンセプトを決めて提出〉
