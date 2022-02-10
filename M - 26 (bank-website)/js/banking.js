//  banking , withdraw , deposit area script

//  handle deposit button event

function deposit () {
    const depositAmount = document.getElementById('deposit-amount').value;
    const currentDeposit = document.getElementById('total-deposit');
    
    const previousDepositAmountText = currentDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    
    const newDepositAmountText = depositAmount;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const totalNewDeposit = previousDepositAmount + newDepositAmount;
    
    currentDeposit.innerText = totalNewDeposit;

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);

    const totalNewBasance = previousBalance + newDepositAmount;

    balance.innerText = totalNewBasance;



    document.getElementById('deposit-amount').value = '';
}







//  handle withdraw button event

document.getElementById('button-withdraw').addEventListener('click', function() {
    
    const withdrawAmount = document.getElementById('withdraw-amount').value;

    const currentWithdraw = document.getElementById('totalWithdraw');


    const newWithdrawText = withdrawAmount;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const previousWithdrawText = currentWithdraw.innerText;
    const previousWithdrawAbount = parseFloat(previousWithdrawText);

    const newTotalWithdraw = newWithdrawAmount + previousWithdrawAbount;

    currentWithdraw.innerText = newTotalWithdraw;


    const preBalance = document.getElementById('balance');
    const preBalanceText = preBalance.innerText;
    const previousBalanceAmount = parseFloat(preBalanceText);
    
    const exsitingBalance = previousBalanceAmount - newWithdrawAmount;
    console.log(exsitingBalance)
    preBalance.innerText = exsitingBalance;
    //  clear the Withdraw input field
    document.getElementById('withdraw-amount').value = '';
})