import { assert } from 'chai';
import {divisors} from "./7kyu/Find-the-divisors.js";

describe("Sample tests", () => {
    it("integer = 15", () => assert.deepEqual(divisors(15), [3, 5]));
     it("integer = 12", () => assert.deepEqual(divisors(12), [2, 3, 4, 6]));
     it("integer = 13", () => assert.deepEqual(divisors(13), "13 is prime"));
});