import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [buttonhandler, setButtonhandler] = useState(1);
  const [idust, setIdust] = useState(0);
  const [greatercosmic, setGreatercosmic] = useState(0);
  const [dreamshard, setDreamshard] = useState(0);
  const [eternalEarth, setEternalEarth] = useState(0);
  const [smallGem, setSmallGem] = useState(0);

  const [Saronite, setSaronite] = useState(0);
  const [Cobalt, setCobalt] = useState(0);
  const [ShadowCrystal, setShadowCrystal] = useState(0);
  const [Chalcedony, setChalcedony] = useState(0);
  const [DarkJade, setDarkJade] = useState(0);
  const [MonarchTopaz, setMonarchTopaz] = useState(0);
  const [ForestEmerald, setForestEmerald] = useState(0);
  const [SkySapphire, setSkySapphire] = useState(0);
  const [AutumnsGlow, setAutumnsGlow] = useState(0);
  const [ScarletRuby, setScarletRuby] = useState(0);
  const [TwilightOpal, setTwilightOpal] = useState(0);

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
  function handleShadowCrystal(e) {
    setShadowCrystal(parseFloat(e.target.value));
  }
  function handleChalcedony(e) {
    setChalcedony(parseFloat(e.target.value));
  }
  function handleDarkJade(e) {
    setDarkJade(parseFloat(e.target.value));
  }
  function handleMonarchTopaz(e) {
    setMonarchTopaz(parseFloat(e.target.value));
  }
  function handleForestEmerald(e) {
    setForestEmerald(parseFloat(e.target.value));
  }
  function handleSkySapphire(e) {
    setSkySapphire(parseFloat(e.target.value));
  }
  function handleAutumnsGlow(e) {
    setAutumnsGlow(parseFloat(e.target.value));
  }
  function handleScarletRuby(e) {
    setScarletRuby(parseFloat(e.target.value));
  }
  function handleTwilightOpal(e) {
    setTwilightOpal(parseFloat(e.target.value));
  }
  function handleCobalt(e) {
    setCobalt(parseFloat(e.target.value));
  }
  function handleSaronite(e) {
    setSaronite(parseFloat(e.target.value));
  }
  function handleSmallButton() {
    setButtonhandler(1);
  }
  function handleBigButton() {
    setButtonhandler(2);
  }
  function handleProspectingButton() {
    setButtonhandler(3);
  }
  return (
    <div className="content">
      <div className="buttons">
        <button onClick={handleSmallButton}>Small</button>
        <button onClick={handleBigButton}>Big</button>
        <button onClick={handleProspectingButton}>Prospecting</button>
      </div>
      <div className="matsprices">
        {buttonhandler == 1 || buttonhandler == 2 ? (
          <MatsPrices
            handleEternalEarth={handleEternalEarth}
            handleSmallGem={handleSmallGem}
            buttonhandler={buttonhandler}
          />
        ) : (
          <Prospecting
            handleCobalt={handleCobalt}
            handleSaronite={handleSaronite}
            handleShadowCrystal={handleShadowCrystal}
            handleChalcedony={handleChalcedony}
            handleDarkJade={handleDarkJade}
            handleMonarchTopaz={handleMonarchTopaz}
            handleForestEmerald={handleForestEmerald}
            handleSkySapphire={handleSkySapphire}
            handleAutumnsGlow={handleAutumnsGlow}
            handleScarletRuby={handleScarletRuby}
            handleTwilightOpal={handleTwilightOpal}
            handleSmallGem={handleSmallGem}
          />
        )}
      </div>
      <div className="resultprices">
        {buttonhandler == 1 || buttonhandler == 2 ? (
          <EnchPrices
            handleIdust={handleIdust}
            handleGreatercosmic={handleGreatercosmic}
            handleDreamshard={handleDreamshard}
          />
        ) : null}
      </div>
      <div className="profit">
        {buttonhandler == 1 ? (
          <SmallItem
            idust={idust}
            greatercosmic={greatercosmic}
            dreamshard={dreamshard}
            eternalEarth={eternalEarth}
            smallGem={smallGem}
          />
        ) : buttonhandler == 2 ? (
          <Bigitem
            idust={idust}
            greatercosmic={greatercosmic}
            dreamshard={dreamshard}
            eternalEarth={eternalEarth}
          />
        ) : (
          <ProspectingResult
            Cobalt={Cobalt}
            Saronite={Saronite}
            smallGem={smallGem}
            ShadowCrystal={ShadowCrystal}
            Chalcedony={Chalcedony}
            DarkJade={DarkJade}
            MonarchTopaz={MonarchTopaz}
            ForestEmerald={ForestEmerald}
            SkySapphire={SkySapphire}
            AutumnsGlow={AutumnsGlow}
            ScarletRuby={ScarletRuby}
            TwilightOpal={TwilightOpal}
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

function MatsPrices({ handleEternalEarth, handleSmallGem, buttonhandler }) {
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
        {buttonhandler == 1 ? (
          <>
            <label htmlFor="smallgem">Small Ring Gem Price - </label>
            <input
              type="number"
              name="smallgem"
              id="smallgem"
              onChange={handleSmallGem}
            />
          </>
        ) : null}
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
  return (
    <>
      <div className="bigitemprofit">
        <p>Profit = {(result - matsprice).toFixed(2)} g</p>
        <p>Profit (AH tax 5%) = {(result - ahTax - matsprice).toFixed(2)} g</p>
      </div>
    </>
  );
}

function Prospecting({
  handleCobalt,
  handleSaronite,
  handleShadowCrystal,
  handleChalcedony,
  handleDarkJade,
  handleMonarchTopaz,
  handleForestEmerald,
  handleSkySapphire,
  handleAutumnsGlow,
  handleScarletRuby,
  handleTwilightOpal,
  handleSmallGem,
}) {
  return (
    <>
      <form className="prospectingForm">
        <label htmlFor="Cobalt">
          Cobalt Price -{" "}
          <input
            type="number"
            name="Cobalt"
            id="Cobalt"
            onChange={handleCobalt}
          />
        </label>
        <label htmlFor="Saronite">
          Saronite Ore Price -{" "}
          <input
            type="number"
            name="Saronite"
            id="Saronite"
            onChange={handleSaronite}
          />
        </label>
        <label htmlFor="smallgem">
          Small Red/Yellow/Orange Price -{" "}
          <input
            type="number"
            name="smallgem"
            id="smallgem"
            onChange={handleSmallGem}
          />
        </label>
        <label htmlFor="ShadowCrystal">
          Shadow Crystal Price -{" "}
          <input
            type="number"
            name="ShadowCrystal"
            id="ShadowCrystal"
            onChange={handleShadowCrystal}
          />
        </label>
        <label htmlFor="Chalcedony">
          Chalcedony Price -{" "}
          <input
            type="number"
            name="Chalcedony"
            id="Chalcedony"
            onChange={handleChalcedony}
          />
        </label>
        <label htmlFor="DarkJade">
          Dark Jade Price -{" "}
          <input
            type="number"
            name="DarkJade"
            id="DarkJade"
            onChange={handleDarkJade}
          />
        </label>
        <label htmlFor="MonarchTopaz">
          Big Orange Price -{" "}
          <input
            type="number"
            name="MonarchTopaz"
            id="MonarchTopaz"
            onChange={handleMonarchTopaz}
          />
        </label>
        <label htmlFor="ForestEmerald">
          Big Green Price -{" "}
          <input
            type="number"
            name="ForestEmerald"
            id="ForestEmerald"
            onChange={handleForestEmerald}
          />
        </label>
        <label htmlFor="SkySapphire">
          Big Blue Price -{" "}
          <input
            type="number"
            name="SkySapphire"
            id="SkySapphire"
            onChange={handleSkySapphire}
          />
        </label>
        <label htmlFor="AutumnsGlow">
          Big Yellow Price -{" "}
          <input
            type="number"
            name="AutumnsGlow"
            id="AutumnsGlow"
            onChange={handleAutumnsGlow}
          />
        </label>
        <label htmlFor="ScarletRuby">
          Big Red Price -{" "}
          <input
            type="number"
            name="ScarletRuby"
            id="ScarletRuby"
            onChange={handleScarletRuby}
          />
        </label>
        <label htmlFor="TwilightOpal">
          Big Purple Price -{" "}
          <input
            type="number"
            name="TwilightOpal"
            id="TwilightOpal"
            onChange={handleTwilightOpal}
          />
        </label>
      </form>
    </>
  );
}

// big gem 12h x1 = 45s
// small gem 12h 1x = 3.75s
function ProspectingResult({
  Cobalt,
  Saronite,
  smallGem,
  ShadowCrystal,
  Chalcedony,
  DarkJade,
  MonarchTopaz,
  ForestEmerald,
  SkySapphire,
  AutumnsGlow,
  ScarletRuby,
  TwilightOpal,
}) {
  const matspriceCobalt = Cobalt * 5;
  const resultCobalt =
    ShadowCrystal * 0.23 +
    Chalcedony * 0.23 +
    DarkJade * 0.23 +
    MonarchTopaz * 0.013 +
    ForestEmerald * 0.013 +
    SkySapphire * 0.013 +
    AutumnsGlow * 0.013 +
    ScarletRuby * 0.013 +
    TwilightOpal * 0.013 +
    smallGem * 3 * 0.23;

  const ahTaxCobalt = resultCobalt * 0.05;
  const PostTaxCobalt = 0.0375 * 6 * 0.23 + 0.45 * 6 * 0.013;
  console.log(resultCobalt);
  console.log(matspriceCobalt);
  console.log(ahTaxCobalt);
  console.log(PostTaxCobalt);

  const matspriceSaronite = Saronite * 5;
  const resultSaronite =
    ShadowCrystal * 0.18 +
    Chalcedony * 0.18 +
    DarkJade * 0.18 +
    MonarchTopaz * 0.04 +
    ForestEmerald * 0.04 +
    SkySapphire * 0.04 +
    AutumnsGlow * 0.04 +
    ScarletRuby * 0.04 +
    TwilightOpal * 0.04 +
    smallGem * 3 * 0.18;

  const ahTaxSaronite = resultSaronite * 0.05;
  const PostTaxSaronite = 0.0375 * 6 * 0.18 + 0.45 * 6 * 0.04;

  return (
    <>
      <div className="CobaltProfit">
        <p>Cobalt Profit = {(resultCobalt - matspriceCobalt).toFixed(2)} g</p>
        <p>
          Cobalt Profit (AH tax 5% + 12h auction) ={" "}
          {resultCobalt == 0
            ? 0
            : (
                resultCobalt -
                matspriceCobalt -
                PostTaxCobalt -
                ahTaxCobalt
              ).toFixed(2)}{" "}
          g
        </p>
      </div>
      <div className="SaroniteProfit">
        <p>
          Saronite Profit = {(resultSaronite - matspriceSaronite).toFixed(2)} g
        </p>
        <p>
          Saronite Ore Profit (AH tax 5% + 12h auction) ={" "}
          {resultSaronite == 0
            ? 0
            : (
                resultSaronite -
                matspriceSaronite -
                PostTaxSaronite -
                ahTaxSaronite
              ).toFixed(2)}{" "}
          g
        </p>
      </div>
    </>
  );
}

export default Calc;
