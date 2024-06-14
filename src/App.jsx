import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [valoreAttualeDelloStato, funzionePerAggiornareLoStato] = useState(0);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
