import { MesBtn } from "./MesBtn";
export function Meses() {
  return (
    <div className="flex">
      <MesBtn month={-3} />
      <MesBtn month={-2} />
      <MesBtn month={-1} />
      <MesBtn month={0} />
    </div>
  );
}
