function foo (num) {
    return function subFoo (subNum) {
        return num + subNum;
    }
}

const res = foo (3)
console.log(res(4));