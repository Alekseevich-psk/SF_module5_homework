import { raiseToDegree } from "../index.js";

describe("tests for raiseToDegree function", () => {
    it("should return a negative number", () => {
        const num = -1;
        const subNum = 4;
        expect(raiseToDegree(num, subNum)).toBe(`Error! Введено отрицательное число`);
    }),
    it("division error by 0 number", () => {
        const num = 0;
        const subNum = 4;
        expect(raiseToDegree(num, subNum)).toBe(`Error! Невозможности деления на ноль`);
    }),
    it("should return a positive natural number", () => {
        const num = 1;
        const subNum = 4;
        expect(raiseToDegree(num, subNum)).toBe(`Успех операции - ${num ** subNum}`);
    });
});
