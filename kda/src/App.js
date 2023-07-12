import { Suspense } from "react";
import { Router } from "./router/router";

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router/>
    </Suspense>
  );
}

export default App;