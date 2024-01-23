import { useData } from "../Context/DataContext";
import { VendaItem } from "../Components/VendaItem";
export function Vendas() {
  const { data } = useData();
  if (data === null) return null;
  return (
    <ul>
      {data.map((venda, index) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}
