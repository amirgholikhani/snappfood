let staff = 5;
let x = 10;

let industries = ["Music", "Paint", "Driving", "Gardening"];

function isValid(industry: string) {
    return industries.indexOf(industry) > -1;
}

export {
    staff,
    industries,
    isValid,
    // x as age
}

export {x as age};

export default isValid;
