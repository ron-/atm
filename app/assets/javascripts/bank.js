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
  deduct = parseInt(deduct);
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
  add = parseInt(add);
  check_balance += add;
  $('#showcheckbalance').css('background-color', 'white');
  $('#showcheckbalance').text(check_balance);
}

function withdraw_saving()
{
  deduct = $('#save_amount').val();
  deduct = parseInt(deduct);
  if(deduct > save_balance)
  {
    alert('You dont have enough money to do this!');
  }
  else
  {
    save_balance -= deduct;
  }
  $('#showsavebalance').text(save_balance);
}

function deposit_saving()
{
  add = $('#save_amount').val();
  add = parseInt(add);
  save_balance += add;
  $('#check_amount').val("");
  $('#showsavebalance').text(save_balance);
}





