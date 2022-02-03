function solve() {

    let decoratorLibrary = {
        hasClima(inputObject) {

            inputObject.temp = 21;
            inputObject.tempSettings = 21;
            inputObject.adjustTemp = function() {
                if(this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if(this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },
        hasAudio(inputObject) {
            inputObject.currentTrack = {
                name: null,
                artist: null
            };

            inputObject.nowPlaying = function() {
                if(currentTrack) {
                    console.log(`Now playing ${this.currentTrack.name} by ${this.currentTrack.atrist}`);
                }
            }
        },

        hasParktronic(inputObject) {
            inputObject.checkDistance = function(number) {
                if(number < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if(0.1 <= number < 0.25) {
                    console.log("Beep! Beep!");
                } else if(0.25 <= number < 0.25) {
                    console.log("Beep!")
                } else {
                    console.log("");
                }
            }
        }
    }

    return decoratorLibrary;
}

const assemblyLine = solve();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
