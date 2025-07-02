import classes from "./Icon.module.scss";

import Pigeon from './Icons/Pigeon';
import Swords from './Icons/swords';
import Flower from './Icons/Flower';
import Cicada from './Icons/Cicada';
import Lion from './Icons/Lion';
import HeraldicLily from './Icons/HeraldicLily';
import Bird from './Icons/Bird';
import Shuriken from './Icons/Shuriken';
import Chamomile from './Icons/Chamomile';
import Shuriken2 from './Icons/Shuriken2';
import Crown from './Icons/Crown';
import Cesar from './Icons/Cesar';
import Rose from './Icons/Rose';
import Cratoss from './Icons/Cratoss';
import Musonry from './Icons/Musonry';

const iconMap = {
    pigeon: Pigeon,
    swords: Swords,
    flower: Flower,
    cicada: Cicada,
    lion: Lion,
    heraldicLily: HeraldicLily,
    bird: Bird,
    shuriken: Shuriken,
    chamomile: Chamomile,
    shuriken2: Shuriken2,
    crown: Crown,
    cesar: Cesar,
    rose: Rose,
    cratoss: Cratoss,
    musonry: Musonry,
};

const Icon = ({ type }) => {

    const Component = iconMap[type] || Pigeon;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className={`${classes.icon} ${classes[type]}`}
        ><Component /></svg>
    )
};

export default Icon;
