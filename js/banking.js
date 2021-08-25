// ============= update deposit ==============

// getting deposit button
const depositBtn = document.getElementById('deposit-btn');

// getting deposit input field
const depositInput = document.getElementById('deposit-input');

// getting error message id
const errorMessage = document.getElementById('error-message');

// adding an event listener 
depositBtn.addEventListener('click', function () {
    if (depositInput.value > 0) {

        const depositInputValueInText = depositInput.value;
        const depositInputValueInNumber = parseFloat(depositInputValueInText);

        // getting deposit total text 
        const depositTotal = document.getElementById('deposit-total');
        const depositTotalInText = depositTotal.innerText;
        const depositTotalInNumber = parseFloat(depositTotalInText);
        depositTotal.innerText = depositInputValueInNumber;
        const newDepositTotal = depositInputValueInNumber + depositTotalInNumber;

        // clearing the deposit input field
        depositInput.value = "";

        // update deposit total amount
        depositTotal.innerText = newDepositTotal;

        // getting balance total inner-text
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalInText = balanceTotal.innerText;

        // convert balance total in number 
        const balanceTotalInNumber = parseFloat(balanceTotalInText);

        // update new balance total
        const newBalanceTotal = depositInputValueInNumber + balanceTotalInNumber;

        // update balance total inner-text 
        balanceTotal.innerText = newBalanceTotal;

        // error message hidden 
        errorMessage.style.display = "none";
    }

    else {

        // clearing the deposit input field
        depositInput.value = "";

        // error message shown 
        errorMessage.style.display = "block";
    }
})


// ================ update withdraw =============

// getting withdraw button 
const withdrawBtn = document.getElementById('withdraw-btn');

// getting withdraw input field 
const withdrawInput = document.getElementById('withdraw-input');

// adding another event listener 
withdrawBtn.addEventListener('click', function () {
    if (withdrawInput.value > 0) {
        // getting withdraw input field 
        const withdrawInput = document.getElementById('withdraw-input');
        // getting withdraw input value 
        const withdrawInputValueInText = withdrawInput.value;

        // convert withdraw input value in number 
        const withdrawInputValueInNumber = parseFloat(withdrawInputValueInText)

        // getting withdraw total text 
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalInText = withdrawTotal.innerText;
        withdrawTotal.innerText = withdrawInputValueInNumber;
        const withdrawTotalInNumber = parseFloat(withdrawTotalInText);
        // getting new withdraw amount 
        const newWithdrawTotal = withdrawTotalInNumber + withdrawInputValueInNumber;

        // update total withdraw amount 
        withdrawTotal.innerText = newWithdrawTotal;

        // clearing withdraw input field 
        withdrawInput.value = "";

        // getting balance total inner-text
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalInText = balanceTotal.innerText;

        // convert balance total in number 
        const balanceTotalInNumber = parseFloat(balanceTotalInText);

        // update new balance total
        const newBalanceTotal = balanceTotalInNumber - withdrawInputValueInNumber;

        // update balance total inner-text 
        balanceTotal.innerText = newBalanceTotal;

        // error message hidden 
        errorMessage.style.display = "none";
    }

    else {
        // clearing withdraw input field 
        withdrawInput.value = "";

        // error message shown 
        errorMessage.style.display = "block";

    }

})
