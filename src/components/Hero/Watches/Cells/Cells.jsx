import classes from "../Watches.module.scss";

import getFormatted from "./cellsHelper";

import Cell from "../Cell/Cell";

const Cells = (props) => {
    const timeFormat = props.type === "time" ? true : false;

    return (
        <div className={classes.cellsContainer}>
            <Cell
                timeFormat={timeFormat}
                content={getFormatted(props.number, props.type)}
            />
        </div>
    );
};

export default Cells;
