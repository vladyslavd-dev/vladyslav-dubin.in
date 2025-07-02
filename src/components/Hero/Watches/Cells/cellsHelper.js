const getFormatted = (number, text) => {
    let sectors = [];

    if (text !== "time") {
        const strNum = String(number).padStart(2, "0");
        strNum.split("").forEach((char) => sectors.push(char));

        text.split("").forEach((letter) => {
            sectors.push(letter);
        });

        while (sectors.length < 7) {
            sectors.push(" ");
        }
    } else {
        number.forEach((num) => {
            let preparedNum = String(num);

            if (preparedNum.length < 2) {
                preparedNum = "0" + preparedNum;
            }

            preparedNum.split("").forEach((sector) => {
                sectors.push(sector);
            });
        });

        [1, 3].forEach((index) => {
            if (sectors[index]) {
                sectors[index] += ":";
            }
        });
    }

    return sectors;
};

export default getFormatted;
