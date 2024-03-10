import { useState } from "react";
import Books from "./components/Books";
import BooksCreate from "./components/BooksCreate";

function App() {
  const [doc, setDoc] = useState<object[]>();
  return (
    <div>
      <div className="max-container py-[20px]">
        <BooksCreate set={setDoc} />
        <Books data={doc} />
      </div>
    </div>
  );
}

export default App;
