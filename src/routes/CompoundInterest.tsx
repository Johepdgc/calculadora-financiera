// src/components/InterestCalculator.jsx
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

const CompoundInterest = () => {
  const [capital, setCapital] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [rateUnit, setRateUnit] = useState<string>("anual");
  const [time, setTime] = useState<number>(0);
  const [timeUnit, setTimeUnit] = useState<string>("años");
  const [compoundInterest, setCompoundInterest] = useState<number>(0);
  const [futureValue, setFutureValue] = useState<number>(0);

  const calculateCompoundInterest = () => {
    let timeInYears = time;
    let rateInAnnual = rate;
    let n = 1; // Number of times that interest is compounded per year

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
    } else if (timeUnit === "dias") {
      timeInYears = time / 365;
    } else if (timeUnit === "trimestres") {
      timeInYears = time / 4;
    }

    const futureValue =
      capital * Math.pow(1 + rateInAnnual / n, n * timeInYears);
    setFutureValue(futureValue);
    const compoundInterest = futureValue - capital;
    setCompoundInterest(compoundInterest);
  };

  return (
    <div className="p-4" id="compound-interest">
      <h2 className="text-2xl font-bold mb-4">Interés Compuesto</h2>
      <div className="mb-4">
        <Label text="Capital" />
        <Input
          value={capital}
          onChange={(e) => setCapital(Number(e.target.value))}
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
          <option value="anual">Anual</option>
          <option value="semestral">Semestral</option>
          <option value="trimestral">Trimestral</option>
          <option value="mensual">Mensual</option>
          <option value="diario">Diario</option>
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
      </div>
      <Button
        text="Calcular"
        type="button"
        onClick={calculateCompoundInterest}
      />
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Datos</h2>
        <p className="text-lg text-gray-500 font-bold">
          Monto:{" "}
          <span className="text-green-500 text-lg">
            ${futureValue.toFixed(2)}
          </span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Tasa de Interés:{" "}
          <span className="text-green-500 text-lg">{rate * 100}%</span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Tiempo:{" "}
          <span className="text-green-500 text-lg">
            {time} {timeUnit}
          </span>
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Interes Compuesto:{""}
          <span className="text-green-500 text-lg">
            ${compoundInterest.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CompoundInterest;
