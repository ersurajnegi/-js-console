import { constants, methodParams } from './default.js';

export class JSConsole {
    defaults: any;
    constructor() {
        this.defaults = constants;
    }

    log(params: methodParams) {
        if (this.isParamsValid(params)) {
            let { message, styles = {} } = params;
            if (!message) { throw new Error('Message is required!') }
            styles = this.mergeStyle({ defaults: this.defaults['log'], styles });
            console.log(`%c ${message}`, this.getStyleFromObject(styles));
        };
    }

    error(params: methodParams) {
        if (this.isParamsValid(params)) {
            let { message, styles = {} } = params;
            if (!message) { throw new Error('Message is required!') }
            styles = this.mergeStyle({ defaults: this.defaults['error'], styles });
            console.error(`%c ${message}`, this.getStyleFromObject(styles));
        }
    }

    header(params: methodParams) {
        if (this.isParamsValid(params)) {
            let { message, styles = {} } = params;
            if (!message) { throw new Error('Message is required!') }
            styles = this.mergeStyle({ defaults: this.defaults['header'], styles });
            console.log(`%c ${message}`, this.getStyleFromObject(styles));
        }
    }

    warn(params: methodParams) {
        if (this.isParamsValid(params)) {
            let { message, styles = {} } = params;
            if (!message) { throw new Error('Message is required!') }
            styles = this.mergeStyle({ defaults: this.defaults['warn'], styles });
            console.warn(`%c ${message}`, this.getStyleFromObject(styles));
        }
    }

    mergeStyle(args: any) {
        let { defaults, styles } = args
        return Object.assign({}, defaults, styles);
    }

    isParamsValid(params: methodParams) {
        if (!params) { throw new Error('No Parameters Passed for Logging') }
        return true;
    }
    getStyleFromObject(styles: any) {
        let style = '';
        Object.keys(styles).forEach((key) => {
            style = style + key + ':' + styles[key] + ';';
        });
        return style;
    }
}