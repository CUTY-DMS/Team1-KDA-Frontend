import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import PasswordChangeModal from "./passwordChangeModal";

export const Modal = () => {
    const modal = useRecoilValue(modalState)

    switch(modal) {
        case 'none' :
            return null
        case 'password' :
            return <PasswordChangeModal/>
    }
}