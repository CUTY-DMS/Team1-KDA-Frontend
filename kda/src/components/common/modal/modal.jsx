import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import PasswordChangeModal from "./passwordChangeModal";
import InformationChangeModal from "./informationChangeModal";

export const Modal = () => {
    const modal = useRecoilValue(modalState)

    switch(modal) {
        case 'none' :
            return null
        case 'information' :
            return <InformationChangeModal/>;
        case 'password' :
            return <PasswordChangeModal/>
        default :
            return null;
    }
}