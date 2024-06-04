import { useState } from "react";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Button } from "../components/Button";

function Home() {
  const [futureValue, setFutureValue] = useState(0);
  const [capital, setCapital] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [rateUnit, setRateUnit] = useState("");
  const [timeUnit, setTimeUnit] = useState("");
  const [simpleInterest, setSimpleInterest] = useState(0);

  function calculateRateFutureValue() {
    const timeUnit = rateUnit;
    if (futureValue && capital && time) {
      const rateValue = (futureValue / capital - 1) / time;
      setRate(Number(rateValue));
      setRateUnit(timeUnit);
    }
  }

  function calculateRateSimpleInterest() {
    const timeUnit = rateUnit;
    if (capital && simpleInterest && time) {
      const rateValue = simpleInterest / (capital * time);
      setRate(Number(rateValue));
      setRateUnit(timeUnit);
    }
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-start p-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Tasa de interés con Valor Futuro
          </h2>
          <div className="mb-4">
            <Label text="Monto" />
            <Input
              value={futureValue}
              onChange={(e) => setFutureValue(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <Label text="Capital" />
            <Input
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <Label text="Tiempo" />
            <Input
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
            />
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
          <Button
            text="Calcular"
            type="button"
            onClick={calculateRateFutureValue}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">
            Tasa de interés con Interés Simple
          </h2>
          <div className="mb-4">
            <Label text="Interés Simple" />
            <Input
              value={simpleInterest}
              onChange={(e) => setSimpleInterest(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <Label text="Capital" />
            <Input
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <Label text="Tiempo" />
            <Input
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
            />
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
          <Button
            text="Calcular"
            type="button"
            onClick={calculateRateSimpleInterest}
          />
        </div>
      </div>
      <div className="p-4 mt-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Datos</h2>
        <p className="text-lg text-gray-500 font-bold">
          Tasa de Interés:{" "}
          <span className="text-green-500 text-lg">
            {rate * 100}% en {timeUnit}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
