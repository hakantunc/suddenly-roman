import assert from "assert";

const romanOrders = [
  ["I", "V", "X"],
  ["X", "L", "C"],
  ["C", "D", "M"],
  ["M", "Q", "Q"],
];

export function toRoman(n: number): string | undefined {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return undefined;
  }
  return n
    .toString()
    .split("")
    .reverse()
    .map(Number)
    .map((digit, order) => {
      const romanOrder = romanOrders[order];
      if (digit === 0) {
        return "";
      } else if (digit < 4) {
        return romanOrder[0].repeat(digit);
      } else if (digit === 4) {
        return romanOrder[0] + romanOrder[1];
      } else if (digit === 5) {
        return romanOrder[1];
      } else if (digit < 9) {
        return romanOrder[1] + romanOrder[0].repeat(digit - 5);
      } else {
        return romanOrder[0] + romanOrder[2];
      }
    })
    .reverse()
    .join("");
}

assert(toRoman(-5) === undefined);
assert(toRoman(-3.2) === undefined);
assert(toRoman(0) === undefined);
assert(toRoman(3.5) === undefined);
assert(toRoman(4000) === undefined, (4000).toString());

assert(toRoman(1) === "I", (1).toString());
assert(toRoman(2) === "II", (2).toString());
assert(toRoman(3) === "III", (3).toString());
assert(toRoman(4) === "IV", (4).toString());
assert(toRoman(5) === "V", (5).toString());
assert(toRoman(6) === "VI", (6).toString());
assert(toRoman(7) === "VII", (7).toString());
assert(toRoman(8) === "VIII", (8).toString());
assert(toRoman(9) === "IX", (9).toString());
assert(toRoman(10) === "X", (10).toString());
assert(toRoman(11) === "XI", (11).toString());
assert(toRoman(103) === "CIII", (103).toString());
assert(toRoman(314) === "CCCXIV", (314).toString());
assert(toRoman(499) === "CDXCIX", (499).toString());
assert(toRoman(500) === "D", (500).toString());
assert(toRoman(555) === "DLV", (555).toString());
assert(toRoman(1234) === "MCCXXXIV", (1234).toString());
assert(toRoman(3421) === "MMMCDXXI", (3421).toString());

console.log("all good");
