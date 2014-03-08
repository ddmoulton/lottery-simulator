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
var intervalNum = getIntervalNum();


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
    var prepender = "<div class='numSet'>";
    for (var i = 0; i < 5; i++) {
        prepender = prepender.concat("<div class='col-xs-2 randomNum active'>" + newNums[i] + "</div>");
    }
    prepender = prepender.concat("<div class='col-xs-2 randomNum2 active2'>" + randomNumberGenerator2() + "</div>");
    prepender = prepender.concat("</div>");
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


window.setInterval(function() {
    totalCount++;
    newNums();
    swapNumbers();
    removeDivs();
}, interval);



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
    $('#average').html("Return on the $<br />$" + (earned/spent));
    $('#net').html("Net Gain<br>$" + (earned-spent))
}

function winnings() {

    var winningsPlus = PlusOne * 1;
    var winningsOnePlus = oneTotalPlusOne * 2;
    var winningsTwoPlus = twoTotalPlusOne * 5;
    var winningsThree = threeTotal * 5;
    var winningsThreePlus = threeTotalPlusOne * 50;
    var winningsFour = fourTotal * 500;
    var winningsFourPlus = fourTotalPlusOne * 5000;
    var winningsFive = fiveTotal * 1000000;
    var winningsFivePlus = fiveTotalPlusOne * 99000000;
    var winnings = winningsPlus + winningsOnePlus + winningsTwoPlus + winningsThree + winningsThreePlus + winningsFour + winningsFourPlus + winningsFive + winningsFivePlus;

    return winnings;
}
function removeDivs() {
    $('.numSet:nth-child(20)').remove();
}



function getIntervalNum(sliderInput) {

    
}
