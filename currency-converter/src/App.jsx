import React,{ useCallback, useEffect, useState } from 'react'
import { InputBlock } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {
  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [from,setFrom] = useState('USD');
  const [to,setTo] = useState('USD');

  const exchangeRates = useCurrencyInfo();
  const currencyCodes = Object.keys(exchangeRates)
  const getConvertedAmount = useCallback(()=>{
    setConvertedAmount(exchangeRates[to].value/exchangeRates[from].value * amount);
  },[from,to,amount]);

  useEffect(getConvertedAmount,[from,to,amount]);
  
  return (
    <>
    <div className='w-full h-lvh bg-pink-300 text-center'>
     <h1 className='text-yellow-200 text-3xl'>Currency Convertor</h1>
      <div>
        <InputBlock
        label="from"
        amount={amount}
        onAmountChange={(amount)=>setAmount(amount)}
        selectedCurrency={from}
        onCurrencyChange={(currency)=>setFrom(currency)}
        currencyOptions={currencyCodes}
        />
      </div>
      <div>
        <InputBlock
        label="to"
        amount={convertedAmount}
        selectedCurrency={to}
        onCurrencyChange={(currency)=>setTo(currency)}
        currencyOptions={currencyCodes}
        amountDisabled
        />
      </div>
    </div>

    </>
  )
}

export default App
