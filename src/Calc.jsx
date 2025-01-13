import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [buttonhandler, setButtonhandler] = useState(true);
  const [idust, setIdust] = useState(0);
  const [greatercosmic, setGreatercosmic] = useState(0);
  const [dreamshard, setDreamshard] = useState(0);
  const [eternalEarth, setEternalEarth] = useState(0);
  const [smallGem, setSmallGem] = useState(0);

  function handleIdust(e) {
    setIdust(parseFloat(e.target.value));
  }
  function handleGreatercosmic(e) {
    setGreatercosmic(parseFloat(e.target.value));
  }
  function handleDreamshard(e) {
    setDreamshard(parseFloat(e.target.value));
  }
  function handleEternalEarth(e) {
    setEternalEarth(parseFloat(e.target.value));
  }
  function handleSmallGem(e) {
    setSmallGem(parseFloat(e.target.value));
  }
  function handleSmallButton() {
    setButtonhandler(true);
  }
  function handleBigButton() {
    setButtonhandler(false);
  }
  return (
    <div className="content">
      <div className="buttons">
        <button onClick={handleSmallButton}>Small</button>
        <button onClick={handleBigButton}>Big</button>
      </div>
      <div className="matsprices">
        <MatsPrices
          handleEternalEarth={handleEternalEarth}
          handleSmallGem={handleSmallGem}
        />
      </div>
      <div className="enchprices">
        <EnchPrices
          handleIdust={handleIdust}
          handleGreatercosmic={handleGreatercosmic}
          handleDreamshard={handleDreamshard}
        />
      </div>
      <div className="profit">
        {buttonhandler == true ? (
          <SmallItem
            idust={idust}
            greatercosmic={greatercosmic}
            dreamshard={dreamshard}
            eternalEarth={eternalEarth}
            smallGem={smallGem}
          />
        ) : (
          <Bigitem
            idust={idust}
            greatercosmic={greatercosmic}
            dreamshard={dreamshard}
            eternalEarth={eternalEarth}
          />
        )}
      </div>
    </div>
  );
}

function EnchPrices({ handleIdust, handleGreatercosmic, handleDreamshard }) {
  return (
    <>
      <form>
        <label htmlFor="idust">Infinite Dust Price - </label>
        <input type="number" name="idust" id="idust" onChange={handleIdust} />
        <label htmlFor="essence">Greater Cosmic Essence Price - </label>
        <input
          type="number"
          name="essence"
          id="essence"
          onChange={handleGreatercosmic}
        />
        <label htmlFor="dreamshard">Dream Shard Price - </label>
        <input
          type="number"
          name="dreamshard"
          id="dreamshard"
          onChange={handleDreamshard}
        />
      </form>
    </>
  );
}

function MatsPrices({ handleEternalEarth, handleSmallGem }) {
  return (
    <>
      <form>
        <label htmlFor="eternalearth">Eternal Earth Price - </label>
        <input
          type="number"
          name="eternalearth"
          id="eternalearth"
          onChange={handleEternalEarth}
        />
        <label htmlFor="smallgem">Small Gem Price - </label>
        <input
          type="number"
          name="smallgem"
          id="smallgem"
          onChange={handleSmallGem}
        />
      </form>
    </>
  );
}

function SmallItem({
  idust,
  greatercosmic,
  dreamshard,
  smallGem,
  eternalEarth,
}) {
  const matsprice = eternalEarth * 0.2 + smallGem;
  const result =
    idust * 2.5 * 0.74 + (greatercosmic / 2) * 0.23 + (dreamshard / 3) * 0.3;
  const ahTax = result * 0.05;
  return (
    <>
      <div className="smallitemprofit">
        <p>Profit = {(result - matsprice).toFixed(2)} g</p>
        <p>Profit (AH tax 5%) = {(result - ahTax - matsprice).toFixed(2)} g</p>
      </div>
    </>
  );
}

function Bigitem({ idust, greatercosmic, dreamshard, eternalEarth }) {
  const matsprice = eternalEarth * 2;
  const result =
    idust * 5.5 * 0.74 + greatercosmic * 1.5 * 0.23 + dreamshard * 0.3;
  const ahTax = result * 0.05;
  console.log(matsprice);
  console.log(result);
  console.log(ahTax);
  return (
    <>
      <div className="bigitemprofit">
        <p>Profit = {(result - matsprice).toFixed(2)} g</p>
        <p>Profit (AH tax 5%) = {(result - ahTax - matsprice).toFixed(2)} g</p>
      </div>
    </>
  );
}

export default Calc;
