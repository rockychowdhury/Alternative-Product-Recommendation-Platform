import { toast } from "react-toastify";
import { UIContext } from "./Contexts";
import PropTypes from "prop-types";
import { useState } from "react";

const UIProvider = ({children}) => {
    const [openModal, setOpenModal] = useState(false);
    const [pending,setPending] = useState(true);
    const showToast = (type, message) => {
        if (type === 'success') toast.success(message);
        else if (type === 'error') toast.error(message);
        else toast.info(message);
    }
    const data = {
        showToast,
        openModal,
        setOpenModal,
        pending,
        setPending,
    }
    return <UIContext.Provider value={data}>{children}</UIContext.Provider>
}
UIProvider.propTypes = {
    children: PropTypes.any,
}
export default UIProvider;