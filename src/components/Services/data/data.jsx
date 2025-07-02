import Service from "@/components/Services/Service";
import Button from "@/components/Button/Button";

import servicesData from "./services.json";
import technologiesData from "./technologies.json";
import Icon from '@/components/Icon'

function getServices(lang = "ukr") {
  if (!servicesData[lang]) return null;

  return Object.values(servicesData[lang]).map((service) => (
    <Service
      key={service.name}
      name={service.name}
      iconName={service.iconName}
      stack={service.stack.map((stack) => (
        <Button color="white" text={stack} key={stack} />
      ))}
    />
  ));
}

function getTechnologies(lang = "ukr") {
  if (!technologiesData[lang]) return null;

  const technologiesRaw = Object.entries(technologiesData[lang]);

  const technologies = [];

  technologies.push(<h3 key={technologiesRaw[0][0]}><Icon type="cesar" /><span>{technologiesRaw[0][0]}</span></h3>);
  technologies.push(<h3 key={technologiesRaw[1][0]}><Icon type="rose" /><span>{technologiesRaw[1][0]}</span></h3>);

  const rowLength = Math.max(
    technologiesRaw[0][1].length,
    technologiesRaw[1][1].length
  );

  for (let i = 0; i < rowLength; i++) {
    const frontEndTechnology = technologiesRaw[0][1][i] || "";
    technologies.push(<p key={`frontend-${i}`}>{frontEndTechnology}</p>);

    const backEndTechnology = technologiesRaw[1][1][i] || "";
    technologies.push(<p key={`other-${i}`}>{backEndTechnology}</p>);
  }

  return technologies;
}

export { getServices, getTechnologies };
