"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftPad = (currentPage, size) => {
    const left = currentPage - size;
    return Math.max(0, 1 - left);
};
const rightPad = (currentPage, size, length) => {
    const right = currentPage + size;
    return Math.max(0, right - length + 1);
};
exports.getPages = (length, currentPage, size) => {
    if (length === 1)
        return [];
    let center = currentPage;
    center -= rightPad(currentPage, size, length);
    center += leftPad(currentPage, size);
    const around = Array(2 * size + 1).fill(center - size + 1)
        .map((v, i) => v + i);
    return [1, ...around, length];
};
//# sourceMappingURL=codewars.js.map