import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import getText from "@/lib/text";

import lenis from '@/lib/lenis';

import MetaTags from "./components/MetaTags";
import CookieBlock from "./components/CookieBlock";
import Header from "@/components/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import VisibilityObserver from '@/lib/customHooks/sectionsBlur';

function MainPage({ currentLanguage }) {
    const text = getText(currentLanguage, lenis);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const onLoad = () => {
            setIsPageLoaded(true);

            setTimeout(() => {
                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }

                requestAnimationFrame(raf);
            }, 1400);
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
        }

        return () => {
            window.removeEventListener('load', onLoad);
        };
    }, []);

    return (
        <>
            <div className={`screenAnimation ${isPageLoaded ? 'active' : ''}`}>
                <div className="inner"></div>
            </div>
            <MetaTags currentLanguage={currentLanguage} text={text.meta} />
            <Header text={text.header} lenis={lenis} />
            <MobileMenu text={text.mobileMenu} lenis={lenis} />
            <Hero text={text.hero} visible={isPageLoaded ? true : false} />
            <TextSection text={text.textSection} />
            <Portfolio text={text.portfolio} currentLanguage={currentLanguage} />
            <Services text={text.services} />
            <Footer text={text.footer} lenis={lenis} />
            <VisibilityObserver />
            <CookieBlock text={text.cookie} lenis={lenis} />
        </>
    );
}

function AppContent() {
    const navigate = useNavigate();

    const currentLanguage = useSelector(
        (state) => state.language.currentLanguage,
    );

    useEffect(() => {
        if (currentLanguage === "eng") {
            navigate(`/`, { replace: true });
        } else {
            navigate(`/${currentLanguage}`, { replace: true });
        }
    }, [currentLanguage, navigate]);

    return (
        <Routes>
            <Route path="/" element={<MainPage currentLanguage="eng" />} />
            <Route path="/ukr" element={<MainPage currentLanguage="ukr" />} />
            <Route path="/rus" element={<MainPage currentLanguage="rus" />} />
            <Route path="/czk" element={<MainPage currentLanguage="czk" />} />
            <Route path="*" element={<MainPage currentLanguage="eng" />} />
        </Routes>
    );
}

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
