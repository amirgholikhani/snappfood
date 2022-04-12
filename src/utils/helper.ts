import {Queue} from "./Queue";

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
}
