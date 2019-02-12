﻿//ProgressBar

function createProgressBar() {

    for (var i = 0; i < 4; i++) {

        var divStep = document.createElement("div");
        divStep.classList.add("divTabCahierProgressStep");
        divStep.style.left = (6 + 26 * i) + "%";
        divStep.addEventListener("click", function () {
            var c = (parseInt(this.style.left) - 6) / 26;
            if (c < currentProgress) {
                switch (c) {
                    case 0: newTab("divTabCahier");
                break;
                    case 1: newTab("divTabCahierMaterielCategories");
                break;
                   case 2: newTab("divTabCahierInfos");
                break;
                    default:
                break;
                }
            }
           
        });
        $("divTabCahierProgress").appendChild(divStep);

        divStep.classList.add("divTabCahierProgressStepCompleted");

        var divCircle = document.createElement("div");
        divCircle.classList.add("divTabCahierProgressCircle");
        divStep.appendChild(divCircle);

        var divNumber = document.createElement("div");
        divNumber.classList.add("divTabCahierProgressNumber");
        divNumber.innerHTML = (i + 1);
        divStep.appendChild(divNumber);

        var divText = document.createElement("div");
        divText.classList.add("divTabCahierProgressText");
        divText.innerHTML = Cahier.ProgressBarTexts[i];
        divStep.appendChild(divText);
    }

    var divBar = document.createElement("div");
    divBar.id = "divTabCahierProgressBar";
    divBar.style.left = (11 + 26 * 0) + "%";
    $("divTabCahierProgress").appendChild(divBar);

    var divBarBlue = document.createElement("div");
    divBarBlue.id = "divTabCahierProgressBarBlue";
    divBarBlue.style.left = (11 + 26 * 0) + "%";
    $("divTabCahierProgress").appendChild(divBarBlue);

}

var currentProgress = 0;
function changeProgress(c) {

    var sign;
    if (c == currentProgress) {
       // alert("c == currentProgress !!");
    }
    else {
        sign = Math.abs(c - currentProgress) / (c - currentProgress);
    }

    //alert(c + " current: " + currentProgress);
     
    currentProgress = c;
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName("divTabCahierProgressStep")[i].className = "divTabCahierProgressStep";
        if (i < c) {
            document.getElementsByClassName("divTabCahierProgressStep")[i].classList.add("divTabCahierProgressStepCompleted");
        }
        else if (i == c) {
            document.getElementsByClassName("divTabCahierProgressStep")[i].classList.add("divTabCahierProgressStepCurrent");
        }
        else {
            document.getElementsByClassName("divTabCahierProgressStep")[i].classList.add("divTabCahierProgressStepIncompleted");
        }
    }
    //if (c == 0) {
    //    changeTab($("divTabCahier"), sign);
    //    document.documentElement.scrollTop = 0; //scroll up
    //}
    //if (c == 1) {
    //    changeTab($("divTabCahierMaterielOptions"), sign);
    //    setTimeout(function () {

    //      //  $("divTabCahierMaterielCodeEmbarcation").getElementsByTagName("input")[0].focus();
    //    }, changeTime);
        
    //}
    //if (c == 2) {
    //    changeTab($("divTabCahierInfos"), sign);

    //} 
    //if (c == 3) {
    //    changeTab($("divTabCahierConfirmation"), sign);
    //} 
    $("divTabCahierProgressBarBlue").style.width = (c * 26) + "%";
}