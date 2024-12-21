const calculateBtn= document.getElementById("calculate-btn");
const accountCurrency= document.getElementById("account-currency").value;
const accountBalance= parseFloat(document.getElementById("account-balance").value);
const riskPercentage= parseFloat(document.getElementById("risk-percentage").value);
const stopLoss= parseFloat(document.getElementById("stop-loss").value);
const exchangeRate = parseFloat(document.getElementById("exchange-rate").value);
const  currencyPair = document.getElementById("currency-pair").value;

calculateBtn.addEventListener("click", forexCalculator =()=>{
    const accountCurrency= document.getElementById("account-currency").value;
    const accountBalance= parseFloat(document.getElementById("account-balance").value);
    const riskPercentage= parseFloat(document.getElementById("risk-percentage").value);
    const stopLoss= parseFloat(document.getElementById("stop-loss").value);
    const exchangeRate = parseFloat(document.getElementById("exchange-rate").value);
    const riskAmountElement= document.getElementById("risk-amount");
    const positionSizeElement= document.getElementById("position-size");
    const standardLotElement = document.getElementById("standard-lot");
    const macroLotElement =  document.getElementById("macro-lot");
    const microLotElement = document.getElementById("micro-lot");
    const lotSizeOption= document.getElementById("lot-size").value;
   const  currencyPair = document.getElementById("currency-pair").value;
    console.log("pair", currencyPair)
    const pipValueElement = document.getElementById("pip-value");


    if(isNaN(accountBalance) || accountBalance <=0){
        alert("enter a number");
    }
    if(isNaN(riskPercentage) || riskPercentage <=0){
        alert("enter a percentage");
    }
    if(isNaN(stopLoss) || stopLoss <=0){
        alert("enter a stoploss");
    }
    if(isNaN(exchangeRate) || exchangeRate <=0){
        alert("Enter the exchange of the currency pair you enter")
    };

    let pipSize;
    if(currencyPair === "usd/jpy"){
        pipSize = 0.01;
    }else{
        pipSize = 0.0001;
    }
    console.log("Pip Size:", pipSize)

    let lotSize;
    if (lotSizeOption === 'standard'){
        lotSize = 100000;
    } else if (lotSizeOption === 'mini'){
        lotSize = 10000;
    } else if (lotSizeOption === 'micro'){
        lotSize = 1000;
        console.log("is in mini")
    } else {
        lotSize = 100000;
    }

    console.log("Lot Size:", lotSize);

    const riskAmount= (riskPercentage/100) * accountBalance ;
    const  pipValue= pipSize * lotSize * exchangeRate;

    // if (document.getElementById("currency-pair").value.includes("JPY")){
    //     pipValue = 0.01 * exchangeRate;
    // }

    const positionSize= riskAmount / (stopLoss * pipValue ) * lotSize;

    const standardLots= positionSize/100000;
    
    const macroLots= positionSize /10000;

    const microLots = positionSize /1000;

    
    console.log({accountBalance, standardLots, macroLots, microLots, stopLoss, riskAmount, positionSize});

    if(riskAmountElement && positionSizeElement && standardLotElement && macroLotElement && microLotElement){
        riskAmountElement.textContent= "Risk Amount:" + riskAmount.toFixed(2)+ accountCurrency;

        positionSizeElement.textContent = "Position Size:" + " " + positionSize.toFixed(2) + "units";
        standardLotElement.textContent = "Standard Lot:" +  " " + standardLots.toFixed(2);
        macroLotElement.textContent = "Macro Lot:" +  " " + macroLots.toFixed(2);
        microLotElement.textContent = "Micro Lot:" +  " " + microLots.toFixed(2);
        pipValueElement.textContent = "Pip Value:" + " " + pipValue.toFixed(2)
                                                
    }
    
});