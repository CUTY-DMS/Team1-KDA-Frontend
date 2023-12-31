import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CustomToastContainer() {
    return(
        <ToastContainer
        position="top-left"
        autoClose={2000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    )
}

export default CustomToastContainer;