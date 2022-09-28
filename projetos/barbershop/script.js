const cttImg = document.querySelectorAll(".ctt-img img");
const cttInfos = document.querySelectorAll(".ctt-infos a");

function activeTab(index) {
  cttInfos.forEach((a) => {
    a.classList.remove("ativo");
  });
  cttInfos[index].classList.add("ativo");
}

cttImg.forEach((a, index) => {
  a.addEventListener("click", () => {
    activeTab(index);
  });
});
