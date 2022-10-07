import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");

  const open = (q: string) => {
    window.open(
      `https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=${q}`,
      "_blank"
    );
    window.open(
      `https://www.ozon.ru/search/?text=${q}&from_global=true`,
      "_blank"
    );
    window.open(`https://market.yandex.ru/search?text=${q}`, "_blank");
    window.open(
      `https://aliexpress.ru/wholesale?catId=&SearchText=${q}`,
      "_blank"
    );
    window.open(`https://www.citilink.ru/search/?text=${q}`, "_blank");
    window.open(`https://www.dns-shop.ru/search/?q=${q}`, "_blank");
  };

  return (
    <div className="App">
      <h1>Rocket shopping</h1>
      <div> надо разрешить открытие новых вкладок\всплывающих окон! </div>
      <input onChange={(event) => setValue(event.target.value)} value={value} />
      <div onClick={() => open(value)}> нажми на меня!</div>
    </div>
  );
}
