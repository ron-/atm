$(function(){

  $('#showcheckbalance').text(check_balance);
  $('#showsavebalance').text(save_balance);

  $('#withdrawchecking').click(withdraw_checking);
  $('#depositchecking').click(deposit_checking);
  $('#withdrawsavings').click(withdraw_saving);
  $('#depositsavings').click(deposit_saving);

});

save_balance = 10000;
check_balance = 5000;

function withdraw_checking()
{
  deduct = $('#check_amount').val();
  deduct = parseInt(deduct, 10);
  if(deduct > check_balance)
  {
    overdraft = deduct - check_balance;

    if(save_balance > overdraft)
    {
      save_balance -= overdraft;
      check_balance = 0;
      $('#showcheckbalance').css('background-color', 'red');
    }
    else
    {
      alert('You dont have enough money to do this!');
    }
  }
  else
  {
    check_balance -= deduct;
  }
  $('#check_amount').val("");
  $('#showcheckbalance').text(check_balance);
  $('#showsavebalance').text(save_balance);
}

function deposit_checking()
{
  add = $('#check_amount').val();
  add = parseInt(add, 10);
  check_balance += add;

  $('#showcheckbalance').css('background-color', 'white');
  $('#showcheckbalance').text(check_balance);
  $('#check_amount').val("");
}

function withdraw_saving()
{
  deduct = $('#save_amount').val();
  deduct = parseInt(deduct, 10);
  if(deduct > save_balance)
  {
    alert('Your maximum withdrawl is ' + save_balance + '!');
  }
  else
  {
    save_balance -= deduct;
  }
  $('#check_amount').val("");
  $('#showsavebalance').text(save_balance);
}

function deposit_saving()
{
  add = $('#save_amount').val();
  add = parseInt(add, 10);
  save_balance += add;
  $('#check_amount').val("");
  $('#showsavebalance').text(save_balance);
}





