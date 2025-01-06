import { useContext } from "react";
import { UIContext } from "../contexts/Contexts";

const useUIContext = () => {
    return useContext(UIContext);
};

export default useUIContext;