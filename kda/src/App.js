import { Suspense } from "react";
import { Router } from "./router/router";
import { RecoilRoot } from "recoil";
import CustomToastContainer from "./utils/toast/customToastContainer";
import { Modal } from "./components/common/modal/modal";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<>Loading...</>}>
        <Modal />
        <Router />
        <CustomToastContainer />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
