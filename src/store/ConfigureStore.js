import { createStore, combineReducers } from "redux";

import ScreenReducer from "@/store/footerScreen/ScreenReducer";
import menuReducer from "@/store/menu/menuReducer";
import languageSwitcherReducer from "@/store/languageSwitcher/languageSwitcherReducer";

const rootReducer = combineReducers({
    screen: ScreenReducer,
    menu: menuReducer,
    language: languageSwitcherReducer,
});

const store = createStore(rootReducer);

export default store;
