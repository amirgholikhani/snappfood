import {Queue} from "./Queue";
import * as foo from './sample';
import { age as AgeSample } from './sample'
import my_sample_function from './sample';
import './examples';

export function getValueWithType<T>(arg: T): T {
    const value = `${arg}  ${typeof arg}`;
    console.log(value);
    return arg;
}

export function getQueue() {
    const queueNumber = new Queue<number>();
    queueNumber.push(23);
    queueNumber.push(34);
    queueNumber.push(55);
    queueNumber.pop();
    console.log(queueNumber);

    const queueString = new Queue<string>();
    queueString.push('John');
    queueString.push('Hello');
    queueString.push('Boy');
    queueString.pop();
    console.log(queueString);

    getSample();
    console.log(num(2)(3)(4));

    const numX = num(3);
    console.log(numX(4)(5));
    console.log(numX(2)(2));
}

export function num(x: number) {
    return function (y: number) {
        return function (z: number) {
            return x * y * z;
        }
    }
}


export function getSample() {
    console.log('foo Age ', foo.age);
    console.log('foo Age ', AgeSample);
    console.log('foo Staff ', foo.staff);
    console.log('foo isValid ', my_sample_function('Paint'));
}
