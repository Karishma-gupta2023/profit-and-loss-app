    var initialPrice=document.querySelector("#input-initialprice");
    var noOfStocks=document.querySelector("#input-stocks");
    var currentPrice=document.querySelector("#input-currentprice");
    var btnTellMe=document.querySelector("#btn-tellme");
    var output=document.querySelector("#outputDiv");

    btnTellMe.addEventListener("click", calculateProfitOrLoss);

    function calculateProfitOrLoss(){
    var costPrice = Number(initialPrice.value) * Number(noOfStocks.value);
    var sellPrice = Number(currentPrice.value) * Number(noOfStocks.value);
    if(Number(initialPrice.value)>0 && Number(currentPrice.value)>=0 && Number(noOfStocks.value)>0 )
    {
    if(costPrice>sellPrice)
    {
      var loss = costPrice-sellPrice;
      var lossPer = (loss/costPrice) *100;
      output.innerText="Sorry, you have a loss of " + loss + " and the loss percentage is " +lossPer+ "%";
    }
    else if(costPrice==sellPrice){
        output.innerText="No pain, no gain";
    }
    else{
        var profit = sellPrice-costPrice;
        var profitPer = (profit/costPrice) *100;
        output.innerText="Congratulations, you have a profit of " + profit + " and the profit percentage is " + profitPer+ "%";
    }
    }

    else
    output.innerText="INVALID INPUT ->Check if initial price, no of stocks and current price values are greater than 0";
    }
    

