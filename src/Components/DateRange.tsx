import { DateInput } from "./DateInput";
import { useData } from "../Context/DataContext";
export function DateRange() {
  const { inicio, setInicio, final, setFinal, data } = useData();
  return (
    <form className="flex box" onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}
