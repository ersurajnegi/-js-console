import { constants } from './default.js';

export class JSConsole {
    defaults: any;
    constructor() {
        this.defaults = constants;
    }

    log(message: string) {
        console.log(`%c ${message}`, this.getStyleFromObject('log'));
    }

    error(message: string) {
        console.log(`%c ${message}`, this.getStyleFromObject('error'));
    }

    header(message: string) {
        console.log(`%c ${message}`, this.getStyleFromObject('header'));
    }

    warn(message: string) {
        console.log(`%c ${message}`, this.getStyleFromObject('warn'));
    }

    getStyleFromObject(type: string) {
        let style = '';
        Object.keys(this.defaults[type]).forEach((key) => {
            style = style + key + ':' + this.defaults[type][key] + ';';
        });
        return style;
    }
}