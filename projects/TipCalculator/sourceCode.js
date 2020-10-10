function tipCalculate() {
  var billAmount = document.querySelector("#bv").value;
  var tippercent = document.querySelector("#tip").value;
  var perons = document.querySelector("#per").value;

  if (billAmount === "" || tippercent == 0) {
    alert("Please Enter value");
    return;
  }
  if (perons == 0 || perons <= 1) {
    perons = 1;

    document.querySelector("#one").style.display = "none";
  } else {
    document.querySelector("#one").style.display = "block";
  }

  var total = (billAmount * tippercent) / perons;
  total = total.toFixed(2);
  document.querySelector("#showtip").style.display = "block";
  document.querySelector("#actualtip").innerHTML = total;
}
//action on click
document.querySelector("#clickbtn").onclick = function Calculate() {
  tipCalculate();
};

//Hide tip on load
document.querySelector("#showtip").style.display = "none";
