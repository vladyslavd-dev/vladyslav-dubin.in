import data from "./data.json";
import TextTransition from "@/components/TextTransition";

const mapNestedValues = (obj, callback, parentKey = null) => {
    if (parentKey === "form") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => mapNestedValues(item, callback));
    } else if (obj !== null && typeof obj === "object") {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key,
                mapNestedValues(value, callback, key),
            ]),
        );
    }
    return callback(obj);
};

const getText = (currentLanguage, lenis) => {
    const currentText = data[currentLanguage];

    const transformedCurrentText = mapNestedValues(currentText, (value) => (
        <TextTransition text={value} lenis={lenis} />
    ));

    return {
        header: transformedCurrentText["header"],
        mobileMenu: transformedCurrentText["header"]["menu"],
        hero: transformedCurrentText["hero"],
        textSection: transformedCurrentText["textsection"],
        portfolio: transformedCurrentText["portfolio"],
        services: transformedCurrentText["services"],
        footer: transformedCurrentText["footer"],
        meta: transformedCurrentText["meta"],
        cookie: transformedCurrentText["cookie"],
    };
};

export default getText;
