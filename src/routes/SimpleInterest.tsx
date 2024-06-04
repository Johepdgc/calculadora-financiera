import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

const SimpleInterest = () => {
  const [capital, setCapital] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [timeUnit, setTimeUnit] = useState<string>("años");
  const [simpleInterest, setSimpleInterest] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const calculateSimpleInterest = () => {
    let timeInYears = time;

    if (timeUnit === "meses") {
      timeInYears = time / 12;
    } else if (timeUnit === "semestres") {
      timeInYears = time / 2;
    } else if (timeUnit === "trimestres") {
      timeInYears = time / 4;
    } else if (timeUnit === "bimenstres") {
      timeInYears = time / 6;
    } else if (timeUnit === "quincenas") {
      timeInYears = time / 24;
    }

    const simpleInterest = capital * rate * timeInYears;
    setSimpleInterest(simpleInterest);
    const amount = capital * (1 + rate * timeInYears);
    setAmount(amount);
  };

  return (
    <div className="p-4" id="simple-interest">
      <h2 className="text-2xl font-bold mb-4">Interés Simple</h2>
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
          <option value="trimestres">Trimestres</option>
          <option value="bimestres">Bimestres</option>
          <option value="quincenas">Quincenas</option>
        </select>
      </div>
      <Button text="Calcular" type="button" onClick={calculateSimpleInterest} />
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Datos</h2>
        <p className="text-lg text-gray-500 font-bold">
          Interes Simple:{" "}
          <span className="text-green-500 text-lg">
            ${simpleInterest.toFixed(2)}
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
          Monto:{" "}
          <span className="text-green-500 text-lg">${amount.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default SimpleInterest;
