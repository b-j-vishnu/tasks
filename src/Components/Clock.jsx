import React from "react";
import { useEffect } from "react";

const Clock = () => {
useEffect(()=>{
 let id =  setInterval(displaytime, 1000);
 return () =>{
    clearInterval(id)
 }
},[])
  function displaytime() {
    let datetime = new Date();
    let hour = paddzero(datetime.getHours());
    let min = paddzero(datetime.getMinutes());
    let sec = paddzero(datetime.getSeconds());
    let date = dates(datetime?.getDay());
    if (hour > 12) {
      hour = hour - 12;
      document.getElementById("ampm").innerHTML = "PM";
    } else {
      document.getElementById("ampm").innerHTML = "PM";
    }
    let h = document.getElementById("hours");
    h.innerHTML = hour;
    let m = document.getElementById("minutes");
    m.innerHTML = min;
    let s = document.getElementById("seconds");
    s.innerHTML = sec;
  }

  function paddzero(num) {
    return num < 10 ? "0" + num : num;
  }

  function dates(num) {
    switch (num) {
      case 0:
        document.getElementById("date").innerHTML = "Sunday";
        break;
      case 1:
        document.getElementById("date").innerText = "Monday";
        break;
      case 2:
        document.getElementById("date").innerText = "Tuesday";
        break;
      case 3:
        document.getElementById("date").innerText = "Wednesdat";
        break;
      case 4:
        document.getElementById("date").innerText = "Thirsday";
        break;
      case 5:
        document.getElementById("date").innerText = "Friday";
        break;
      case 6:
        document.getElementById("date").innerText = "Saturday";
        break;
    }
  }
  return (
    <div
      id="wrapper"
      className="w-full bg-slate-900 flex justify-around text-white py-3 "
    >
      <div id="date">Day</div>
      <div>
        <span id="hours">00</span>
        <span>:</span>
        <span id="minutes">00</span>
        <span>:</span>
        <span id="seconds">00</span>
        <span id="ampm">AM</span>
      </div>
    </div>
  );
};

export default Clock;
