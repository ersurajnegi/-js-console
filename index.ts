export class JSConsole {
    constructor() {
        console.log('ji');
    }

    log(message: string) {
        console.log(`%c ${message}`, 'color:red');
    }

    alert() {
        alert('HI from Lib');
    }
}