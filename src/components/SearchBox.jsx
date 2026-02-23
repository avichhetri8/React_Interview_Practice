import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchBox({ onSearch }) {
  const [text, setText] = useState("");
   const debounced = useDebounce(text, 400);

//   // Push debounced value upward
   if (debounced !== text) {
     onSearch(debounced);
   }

  return (
    <input
      placeholder="Search users..."
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}