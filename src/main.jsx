import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store/ConfigureStore.js";
import { HelmetProvider } from "react-helmet-async";

import App from "@/App.jsx";

import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/karantina/700.css";
import "@fontsource/karantina/400.css";
import "reset-css";
import "@/css/main.scss";

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </HelmetProvider>,
);
