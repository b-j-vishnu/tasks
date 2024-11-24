import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Currency = () => {
  const [currencies, setCurrencies] = useState();
  const [selectedCurrencies, setSelectedCurrencies] = useState({});
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const amountRef = useRef();
  useEffect(() => {
    axios("https://api.frankfurter.app/currencies")
      .then((res) => Object.entries(res.data))
      .then((res) => {
        let currency = [];
        res.forEach(([key, value]) => {
          currency.push(key);
        });
        setCurrencies(currency);
      });
    amountRef.current.focus();
  }, []);
  function convert() {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${amount}&from=${selectedCurrencies?.currency1}&to=${selectedCurrencies?.currency2}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setResult("");
          setError(
            "Cannot Convert Same Currency, please choose different currency "
          );
        } else {
          setError(null);
          setResult(Object.values(data.rates)[0]);
        }
      })
      .catch((err) => console.log(err.message));
  }
  const handleChangeCurrency = (e) => {
    const { name, value } = e.target;
    setSelectedCurrencies((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full text-black bg-slate-900 h-[92vh] flex flex-col justify-center items-center">
      <h4 className="text-white text-2xl my-4">Currency Converter</h4>
      {error && <p className="text-red-600">{error}</p>}
      <div className="my-5 flex  gap-x-8" onChange={handleChangeCurrency}>
        <select
          name="currency1"
          className="rounded-md border-2 px-2 py-1 border-gray-900 focus:outline-none "
        >
          <option className="disabled hidden">Select</option>
          {currencies?.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          name="currency2"
          className="rounded-md border-2  px-2 py-1 border-gray-900 focus:outline-none "
        >
          <option className="disabled hidden">Select</option>
          {currencies?.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-around ">
        <input
          className="rounded-md w-2/5  px-2 py-1 border-2 border-gray-900 focus:outline-none "
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter Amount"
          ref={amountRef}
        />
        <input
          className="rounded-md  w-2/5 px-2 py-1 border-2 border-gray-900 focus:outline-none "
          readOnly
          value={result}
          onChange={()=>{}}
          placeholder="Result"
          type="number"
        />
      </div>
      <button
        className="my-4 bg-green-500 px-3 py-1 rounded-lg"
        onClick={convert}
        id="but"
        type="submit"
      >
        submit
      </button>
    </div>
  );
};

export default Currency;
