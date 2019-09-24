let RabbitHole = function () {
    this.status = false;

    this.checkRabbitOnHole = function () {
        return this.status = true;
    };

    this.checkRabbitOffHole = function () {
        return this.status = false;
    };

    this.getImageRabbit = function () {
        return `<img src="rabit-in-hole.png" width="150" height="150" onclick="increaseScore()">`
    };
};
