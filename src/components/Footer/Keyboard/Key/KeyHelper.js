import { useState } from "react";
import { useSelector } from "react-redux";

import data from "../Screen/data.json";
import { change } from "@/store/footerScreen/screenActions";

import policyUa from '@/assets/policy/policy_ua.pdf';
import policyEn from '@/assets/policy/policy_en.pdf';
import policyRu from '@/assets/policy/policy_ru.pdf';
import policyCz from '@/assets/policy/policy_cz.pdf';

import CVUa from '@/assets/CV/Dubinin_CV_UA.pdf';
import CVEn from '@/assets/CV/Dubinin_CV_EN.pdf';
import CVRu from '@/assets/CV/Dubinin_CV_RU.pdf';
import CVCz from '@/assets/CV/Dubinin_CV_CZ.pdf';

const policies = {
    eng: policyEn,
    rus: policyRu,
    czk: policyCz,
    urk: policyUa,
};

const cvs = {
    eng: CVEn,
    rus: CVRu,
    czk: CVCz,
    urk: CVUa,
};

const getPolicyLink = (lang) => policies[lang] || policyEn;
const getCVLink = (lang) => cvs[lang] || CVEn;

export const useKeyLogic = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const currentLanguage = useSelector(state => state.language.currentLanguage);

    const triggerClickAnimation = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    const handleClick = (e) => {
        e.preventDefault();
        triggerClickAnimation();

        setTimeout(() => {
            switch (props.link) {
                case "privacy":
                    window.open(getPolicyLink(currentLanguage), '_blank');
                    break;
                case "CV":
                    window.open(getCVLink(currentLanguage), '_blank');
                    break;
                case "#contact":
                    props.lenis.scrollTo("#contact", { duration: 2, offset: -700 });
                    break;
                default:
                    window.open(props.link, '_blank');
                    break;
            }
        }, 600);
    };

    const handleHover = (e) => {
        e.preventDefault();
        triggerClickAnimation();
    };

    return {
        isClicked,
        handleClick,
        handleHover,
    };
};

const formattedScreenRows = Object.values(data);

let lastCalled = 0;

export const updateScreen = (dispatch) => {
    const now = Date.now();
    if (now - lastCalled < 300) return;
    lastCalled = now;

    let randomNumber = Math.floor(Math.random() * formattedScreenRows.length);

    dispatch(change([formattedScreenRows[randomNumber]]));
};