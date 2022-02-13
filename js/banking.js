document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    // Update Deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeText =  depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText)
    const newDepositTotal =(previousDepositeAmount) + newdepositAmount;

    depositTotal.innerText= newDepositTotal;

// Update account Balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText)
const newBalanceTotal = previousBalanceTotal + newdepositAmount;
balanceTotal.innerText = newBalanceTotal;

    // clear Input field
    depositInput.value ='';
});
// handle Withdraw Event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText)
   console.log(newWithdrawAmount);


//    set Withdraw Total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;


// Update Balance
const balanceTotal= document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const PreviousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = PreviousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

// clear Withdraw input\
withdrawInput.value = '';
})
document.getElementsByClassName