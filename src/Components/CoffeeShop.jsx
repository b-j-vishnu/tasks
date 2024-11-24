import React from "react";

const CoffeeShop = () => {
  return <div>
  <nav>
    <div class="logo">
        <h1>Coffee</h1>
    </div>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Details</a></li>
    </ul>
    <div class="menu">
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
    </div>
</nav>
   <div class="backimage">
        <div id="christmas">
            <h1>Christmas at Unicon Coffee</h1>
            <h2 id="line">__________</h2>
            <h5 id="letter">We have a tastfull coffee to suit the coffee lover.</h5>
            <h3 id="letter">Order Your Coffee</h3>
            <span><a  id="firstorder" href="#down">Order</a></span>

        </div>
    </div>
    <form method="POST" name="for">
        <div class="coffeeimages" id="down">
            <div><img src="./images/espresso.jpg" align="center"> </div>
            <h3>ESPRESSO</h3>
            <h4>$3.25</h4>
            <input class="checbox" type="checkbox" id="espr">
            <h3><input value="none" class="quantity" min="1" type="number" id="esp" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>
            <hr/>
            <div><img src="./images/cappucino.jpg" align="center"> </div>
            <h3>CAPPUCCINO</h3>
            <h4>$4.00</h4>
            <input class="checbox" type="checkbox" id="cappuc">

            <h3><input class="quantity" min="1" type="number" id="cappu" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>

            <hr/>
            <div><img src="./images/amaricano22 (1).jpg" align="center"> </div>
            <h3>AMERICANO</h3>
            <h4>$3.25</h4>
            <input class="checbox" type="checkbox" id="ameri">

            <h3><input class="quantity" min="1" class="checbox" type="number" id="ame" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>

            <hr/>
            <div><img src="./images/lateee.jpg" align="center"> </div>
            <h3>LATTE</h3>
            <h4>$4.70</h4>
            <input class="checbox" type="checkbox" id="latteee">

            <h3><input class="quantity" min="1" type="number" id="latte" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>

            <hr/>
            <div><img src="./images/mocha (1).jpg" align="center"> </div>
            <h3>MOCHA</h3>
            <h4>$5.25</h4>
            <input class="checbox" type="checkbox" id="mochaa">

            <h3><input class="quantity" min="1" type="number" id="mocha" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>

            <hr/>
            <div><img src="./images/chocolate coffee (1).jpg" align="center"> </div>
            <h3>HOT CHOCALATE</h3>
            <h4>$4.30</h4>
            <input class="checbox" type="checkbox" id="hotc">

            <h3><input class="quantity" min="1" type="number" id="hot" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>

            <hr/>
            <div><img src="./images/cold brew (2).jpg" align="center"> </div>
            <h3>COLD BREW</h3>

            <h4>$4.00</h4>
            <input class="checbox" type="checkbox" value="on" id="coldb">

            <h3><input class="quantity" min="1" type="number" id="cold" Style="color:black; background-color:aqua;text-align:center;" placeholder="Quantity" ;></h3>
            <hr/>
        </div>
        <div class="footer">

            <button class="clic" type="button">ORDER</button>
            <div id="result">
                <h1 id="tot"></h1>
            </div>
            <div class="tab">

                <table border="1" style=" border-collapse: collapse;" name="table" id="tb1">
                    <thead>

                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <span id="total"></span>
                <span id="amt"></span>

            </div>
            <h1 style="color: cornflowerblue; filter: brightness(820%);">Thank You...</h1>

        </div>
        <div class="contact">
            <div>
                <h1>Contact Us</h1>
                <h2>______</h2>
            </div>
            <div>
                <h3>Location</h3>
                <p>Jaihindpuram,Madurai</p>
            </div>
            <div>
                <h3>Mobile No</h3>
                <p>1234567810</p>
            </div>
            <div>
                <h3>Mail</h3>
                <a style="color:black" href="mailto:vishnubj27@gmail.com">vishnubj27@gmail.com</a>
            </div>
        </div>
    </form>

    
  </div>;
};

export default CoffeeShop;
