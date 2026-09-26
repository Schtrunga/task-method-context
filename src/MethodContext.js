import { EventEmitter } from './EventEmitter';

const emitter = EventEmitter;
let clickHandler = null;

export const obj = {
    count: 0,
    subscribe() {
        clickHandler = () => {
            this.count += 1;
        };
        emitter.on('click', clickHandler);
    },
    unsubscribe() {
        if (clickHandler) {
            emitter.off('click', clickHandler);
        }
    },
};

export const obj1 = {
    first(...args) {
        const reversedArgs = args.slice().reverse();
        return this.second(...reversedArgs);
    },
    second(...args) {
        return args;
    },
};
