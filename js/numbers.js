var baseNumbers = new Array();
var baseNum2 = 0;
var totalCount = 0;
var nothing = 0;
var oneTotal = 0;
var twoTotal = 0;
var threeTotal = 0;
var fourTotal = 0;
var fiveTotal = 0;
var oneTotalPlusOne = 0;
var twoTotalPlusOne = 0;
var threeTotalPlusOne = 0;
var fourTotalPlusOne = 0;
var fiveTotalPlusOne = 0;
var PlusOne = 0;
var basePool = 75;
var basePool2 = 15;
var rate = 100;



var nonePlus = 1;
var onePlus = 2;
var twoPlus = 5;
var three = 5;
var threePlus = 50;
var four = 500;
var fourPlus = 5000;
var five = 1000000;
var fivePlus = 990000000;

$('td').data("title", "Prize");
$('#nothing').data("content", "$0");
$('#plusOne').data("content", "$" + nonePlus);


function baseNums() {
    var usedNums = new Array();
    var randomNum = randomNumberGenerator();
    $('.num').each(function() {
        while (!(jQuery.inArray(randomNum, usedNums) === -1)) {
            randomNum = randomNumberGenerator();
        }
        usedNums.push(randomNum);
        baseNumbers.push(randomNum * 1);
        $(this).html(randomNum);
    });
    $('.num2').each(function() {
        baseNum2 = randomNumberGenerator2();
        $(this).html(baseNum2 * 1);
    });
}
function newNums() {
    var newNums = new Array();
    var randomNum = randomNumberGenerator();
    var correctNums = 0;
    var num2Present = false;
    for (var i = 0; i < 5; i++) {
        while (!(jQuery.inArray(randomNum, newNums) === -1)) {
            randomNum = randomNumberGenerator();
        }
        newNums.push(randomNum);
    }
    var prepender = "<table class='numSet table'><tbody><tr>";
    for (var i = 0; i < 5; i++) {
        prepender = prepender.concat("<td class='randomNum active'>" + newNums[i] + "</td>");
    }
    prepender = prepender.concat("<td class='randomNum2 active2'>" + randomNumberGenerator2() + "</td>");
    prepender = prepender.concat("</tr></tbody></table");
    $(prepender).prependTo($('#newNumberArea'));
    $('.active').each(function() {
        var currentNumber = $(this).text() * 1;
        if (jQuery.inArray(currentNumber, baseNumbers) === -1) {
        }
        else {
            $(this).addClass('contains');
            correctNums++;
        }
    });
    $('.active2').each(function() {
        var currentNumber = $(this).text() * 1;
        if (currentNumber === baseNum2) {
            $(this).addClass('contains');
            num2Present = true;
        }
        else {
        }
    });
    if (num2Present) {
        if (correctNums === 1) {
            oneTotalPlusOne++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 2) {
            twoTotalPlusOne++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 3) {
            threeTotalPlusOne++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 4) {
            fourTotalPlusOne++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 5) {
            fiveTotalPlusOne++;
            correctNums = 0;
            num2Present = false;
        }
        else {
            PlusOne++;
            correctNums = 0;
            num2Present = false;
        }
    }
    else {
        if (correctNums === 0) {
            nothing++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 1) {
            oneTotal++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 2) {
            twoTotal++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 3) {
            threeTotal++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 4) {
            fourTotal++;
            correctNums = 0;
            num2Present = false;
        }
        else if (correctNums === 5) {
            fiveTotal++;
            correctNums = 0;
            num2Present = false;
        }
    }
    $('.active').removeClass('active');
    $('.active2').removeClass('active2');
}
function randomNumberGenerator() {
    var randomNum = Math.floor(Math.random() * basePool) + 1;
    return randomNum;
}
function randomNumberGenerator2() {
    var randomNum = Math.floor(Math.random() * basePool2) + 1;
    return randomNum;
}
$(document).ready(function() {
    baseNums();
});
$('#iterate').click(function() {
//    for (var i = 0; i < 1000; i++)
//    {
    totalCount++;
    newNums();
    swapNumbers();
    removeDivs();
//    }
});


var simulatorInterval = window.setInterval(function() {
    totalCount++;
    newNums();
    swapNumbers();
    removeDivs();
}, rate);



function swapNumbers() {
    $('#one').text(oneTotal);
    $('#two').text(twoTotal);
    $('#three').text(threeTotal);
    $('#four').text(fourTotal);
    $('#five').text(fiveTotal);
    $('#onePlusOne').text(oneTotalPlusOne);
    $('#twoPlusOne').text(twoTotalPlusOne);
    $('#threePlusOne').text(threeTotalPlusOne);
    $('#fourPlusOne').text(fourTotalPlusOne);
    $('#fivePlusOne').text(fiveTotalPlusOne);
    $('#plusOne').text(PlusOne);
    $('#nothing').text(nothing);
    $('#count').html(totalCount);
    var spent = totalCount;
    var earned = winnings();
    
    $('#spent').html("Spent<br />$" + spent);
    $('#earned').html("Winnings<br />$" + earned);
    var rateOfReturn = earned/spent;
    var n = rateOfReturn.toFixed(3);
    $('#average').html("Return/$<br />$" + (n));
    $('#net').html("Net Gain<br>$" + (earned-spent))
}

function winnings() {

    var winningsPlus = PlusOne * nonePlus;
    var winningsOnePlus = oneTotalPlusOne * onePlus;
    var winningsTwoPlus = twoTotalPlusOne * twoPlus;
    var winningsThree = threeTotal * three;
    var winningsThreePlus = threeTotalPlusOne * threePlus;
    var winningsFour = fourTotal * four;
    var winningsFourPlus = fourTotalPlusOne * fourPlus;
    var winningsFive = fiveTotal * five;
    var winningsFivePlus = fiveTotalPlusOne * fivePlus;
    var winnings = winningsPlus + winningsOnePlus + winningsTwoPlus + winningsThree + winningsThreePlus + winningsFour + winningsFourPlus + winningsFive + winningsFivePlus;

    return winnings;
}


function removeDivs() {
    $('.numSet:nth-child(2)').remove();
}


function setIntervalNum(inputNum) {
    clearInterval(simulatorInterval);    
    rate = 1000 / inputNum;
    simulatorInterval = window.setInterval(function() {
        totalCount++;
        newNums();
        swapNumbers();
        removeDivs();
    }, rate);


    console.log(rate);
//            interval = inputNum;
//            interval = 100 / interval;
//            console.log(interval);
}
        
