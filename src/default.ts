export const constants = {
    header: {
        ['background-color']: '#000000',
        ['color']: '#FFFFFF',
        ['font-style']: 'italic',
        ['font-size']: '20px'
    },
    log: {
        ['background-color']: '#00cc96',
        ['color']: '#FFFFFF',
        ['font-size']: '20px'
    },
    error: {
        ['background-color']: '#FF3333',
        ['color']: '#FFFFFF',
        ['font-size']: '20px'
    },
    warn: {
        ['background-color']: '#FFa31a',
        ['color']: '#FFFFFF',
        ['font-size']: '20px'
    }
}

export interface methodParams {
    message: string;
    styles?: any
}
