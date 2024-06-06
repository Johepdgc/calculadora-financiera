import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

const PresentValue = () => {
  const [interestType, setInterestType] = useState<string>("simple");
  const [futureValue, setFutureValue] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [rateUnit, setRateUnit] = useState<string>("anual");
  const [time, setTime] = useState<number>(0);
  const [timeUnit, setTimeUnit] = useState<string>("años");
  const [presentValue, setPresentValue] = useState<number>(0);
  const [simpleInterest, setSimpleInterest] = useState<number>(0);
  const [hasTime, setHasTime] = useState(true);
  const [capital, setCapital] = useState<number>(0);

  const calculatePresentValue = () => {
    let timeInYears = time;
    let rateInAnnual = rate;
    let n = 1; // Number of times that interest is compounded per year
    let presentValueType;

    if (rateUnit === "semestral") {
      rateInAnnual = rate * 2;
      n = 2;
    } else if (rateUnit === "trimestral") {
      rateInAnnual = rate * 4;
      n = 4;
    } else if (rateUnit === "mensual") {
      rateInAnnual = rate * 12;
      n = 12;
    } else if (rateUnit === "diario") {
      rateInAnnual = rate * 365;
      n = 365;
    }

    if (timeUnit === "meses") {
      timeInYears = time / 12;
    } else if (timeUnit === "semestres") {
      timeInYears = time / 2;
    } else if (timeUnit === "trimestres") {
      timeInYears = time / 4;
    } else if (timeUnit === "bimestres") {
      timeInYears = time / 6;
    } else if (timeUnit === "quincenas") {
      timeInYears = time / 24;
    }
    // VERIFICAR PORQUE HAY UN MARGEN DE ERROR
    if (interestType === "simple") {
      presentValueType = futureValue / (1 + rateInAnnual * timeInYears);
    } else if (interestType === "compound") {
      // Compound interest formula: A = P (1 + r/n)^(nt)
      presentValueType =
        futureValue / Math.pow(1 + rateInAnnual / n, n * timeInYears);
    }
    setPresentValue(presentValueType as number);
    const simpleInteres = futureValue - (presentValueType as number);
    setSimpleInterest(simpleInteres);
  };

  function calculateTime() {
    if (futureValue && capital && rate) {
      const timeValue = (futureValue / capital - 1) / rate;
      // const integerPart = Math.floor(timeValue);
      // const decimalPart = timeValue - integerPart;

      // let months = 0;
      // if (rateUnit === "años") {
      //   months = Math.round(decimalPart * 12);
      // } else if (rateUnit === "semestres") {
      //   months = Math.round(decimalPart * 6);
      // }

      // const finalTime = integerPart + months / 12;
      setTime(Number(timeValue.toFixed(2)));
      setTimeUnit(rateUnit);
    }
  }

  return (
    <div className="p-4" id="present-value">
      <h2 className="text-2xl font-bold mb-4">Valor Actual</h2>
      <div className="mb-4">
        <Label text="Tipo de Interés" />
        <select
          value={interestType}
          onChange={(e) => setInterestType(e.target.value)}
          className="mt-1 block w-1/8 py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="simple">Simple</option>
          <option value="compound">Compuesto</option>
        </select>
      </div>
      <div className="mb-4">
        <Label text="Monto" />
        <Input
          value={futureValue}
          onChange={(e) => setFutureValue(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <Label text="Tasa de Interés" />
        <Input value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        <select
          value={rateUnit}
          onChange={(e) => setRateUnit(e.target.value)}
          className="mt-1 block w-1/8 py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="años">Años</option>
          <option value="meses">Meses</option>
          <option value="semestres">Semestres</option>
          <option value="trimestres">Trimestres</option>
          <option value="bimestres">Bimestres</option>
          <option value="quincenas">Quincenas</option>
        </select>
      </div>
      <div className="mb-4">
        <Label text="Tiempo" />
        <Input value={time} onChange={(e) => setTime(Number(e.target.value))} />
        <select
          value={timeUnit}
          onChange={(e) => setTimeUnit(e.target.value)}
          className="mt-1 block w-1/8 py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="años">Años</option>
          <option value="meses">Meses</option>
          <option value="semestres">Semestres</option>
          <option value="dias">Días</option>
          <option value="trimestres">Trimestres</option>
        </select>
        <Label text="Tienes el valor del tiempo?" />
        <input
          type="checkbox"
          checked={hasTime}
          onChange={(e) => setHasTime(e.target.checked)}
        />
        {!hasTime && (
          <>
            <div className="mb-4">
              <Label text="Capital" />
              <Input
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
              />
            </div>
            <Button
              text="Calcula el Tiempo"
              type="button"
              onClick={calculateTime}
            />
          </>
        )}
      </div>
      <Button text="Calcular" type="button" onClick={calculatePresentValue} />
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Datos</h2>
        <p className="text-lg text-gray-500 font-bold">
          Valor total:{" "}
          <span className="text-green-500 text-lg">
            ${presentValue.toFixed(2)}
          </span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Tasa de Interes:{" "}
          <span className="text-green-500 text-lg">{rate * 100}%</span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Tiempo:{" "}
          <span className="text-green-500 text-lg">
            {time} {timeUnit}
          </span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Interes Simple:{" "}
          <span className="text-green-500 text-lg">
            ${simpleInterest.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PresentValue;
