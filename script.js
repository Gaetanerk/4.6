const cand1 = document.querySelector("#cand1");
const cand2 = document.querySelector("#cand2");
const cand3 = document.querySelector("#cand3");
const cand4 = document.querySelector("#cand4");
const btnCheck = document.querySelector("#btnCheck");

btnCheck.addEventListener("click", () => {
  if (
    cand1.value < 12.5 ||
    (cand2.value || cand3.value || cand4.value) > 50 ||
    (cand1.value >= 12.5 &&
      cand1.value < 50 &&
      (cand2.value >= 50 || cand3.value >= 50 || cand4.value >= 50))
  ) {
    alert("Candidat 1 battu au 1er tour");
  } else if (cand1.value >= 50) {
    alert("Candidat 1 Elu au 1er tour");
  } else if (
    cand1.value >= 12.5 &&
    cand1.value < 50 &&
    cand2.value < 50 &&
    cand3.value < 50 &&
    cand4.value < 50 &&
    cand1.value < (cand2.value || cand3.value || cand4.value)
  ) {
    alert("Candidat 1 qualifié au 2nd tour défavorablement");
  } else if (cand1.value > (cand2.value && cand3.value && cand4.value)) {
    alert("Candidat 1 qualifié au 2nd tour favorablement");
  }
});
