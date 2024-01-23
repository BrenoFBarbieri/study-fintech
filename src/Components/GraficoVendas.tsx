import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";
export function GraficoVendas({ data }: { data: IVenda[] }) {
  const processedData = transformData(data);
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={processedData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};
function transformData(data: IVenda[]): VendaDia[] {
  const days = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});
  return Object.values(days).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}
