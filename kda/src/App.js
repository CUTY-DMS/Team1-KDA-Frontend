import { Suspense } from "react";
import { Router } from "./router/router";
import { RecoilRoot } from "recoil";
import CustomToastContainer from "./utils/toast/customToastContainer";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<>Loading...</>}>
        <Router/>
        <CustomToastContainer/>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;