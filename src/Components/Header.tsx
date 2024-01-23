import React from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "./DateRange";
import { Meses } from "./Meses";
export function Header() {
  const location = useLocation();
  const [title, setTitle] = React.useState("Resumo");
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
}
