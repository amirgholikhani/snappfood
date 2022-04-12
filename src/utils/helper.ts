export function getValueWithType<T>(arg: T): T {
    const value = `${arg}  ${typeof arg}`;
    console.log(value);
    return arg;
}
