import classes from "./CustomCursor.module.scss";
import Icon from "@/components/Icon";
import { useRenderWithHideDelay } from "./CustomCursorHelper";

export default function CustomCursor({ x, y, type, visible, isList }) {
    const { shouldRender, isHiding } = useRenderWithHideDelay(visible, 100);
    const listTranslate = isList ? "translate(20%, 80%)" : 'translate(-50%, -80%)';

    if (!shouldRender) return null;

    const cursorClass = `${classes.cursor} ${isHiding ? classes.hiding : ""}`;

    return (
        <div
            key={isHiding ? "hiding" : "showing"}
            className={cursorClass}
            style={{
                top: y,
                left: x,
                transform: listTranslate
            }}
        >
            {type === "case" && (
                <>
                    <Icon type="chamomile" />
                    <span>View Site</span>
                </>
            )}
            {type === "soon" && (
                <>
                    <Icon type="musonry" />
                    <span>Coming Soon</span>
                </>
            )}
            {type !== "case" && type !== "soon" && (
                <>
                    <Icon type="cratoss" />
                    <span>View on GitHub</span>
                </>
            )}
        </div>
    );
}
