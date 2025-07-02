import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/karantina/400.css";
import classes from "./Watches.module.scss";

import flipClockMP4 from "@/assets/img/flipClock.mp4";
import flipClockWEBM from "@/assets/img/Flipclock.webm";
import watchesPoster from '@/assets/img/watchesPoster.webp';

import Cells from "./Cells/Cells";
import { useProgrammingTime } from "./WatchesHelper";

const Watches = ({ text }) => {
    const time = useProgrammingTime();

    const timeCombined = [time.hours, time.minutes, time.seconds];

    return (
        <div className={classes.watchesContainer}>
            <div className={classes.watches}>
                <video
                    className={classes.video}
                    preload="metadata"
                    poster={watchesPoster}
                    loop
                    muted
                    playsInline
                    autoPlay
                >
                    <source src={flipClockWEBM} type="video/webm" />
                    <source src={flipClockMP4} type="video/mp4" />
                </video>
                <div className={classes.mainWatches}>
                    <div className={classes.textSection}>
                        <div className={classes.textBlock}>
                            <p>{text[0]}</p>
                            <p>{text[1]}</p>
                            <p>
                                {text[2]}
                                <br></br>
                                {text[3]}
                            </p>
                            <p>{text[4]}</p>
                            <p>
                                {text[5]}
                                <br></br>
                                {text[6]}
                                <br></br>
                                {text[7]}
                                <br></br>
                                {text[8]}
                            </p>
                        </div>
                        <div className={classes.bluredBottom}></div>
                    </div>
                    <div className={classes.daysSection}>
                        <h2>Work Experience</h2>
                        <div className={classes.daysContainer}>
                            <Cells number={time.years} type="years" />
                            <Cells number={time.month} type="month" />
                            <Cells number={time.days} type="days" />
                        </div>
                    </div>
                    <div className={classes.timeSection}>
                        <Cells number={timeCombined} type="time" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watches;
