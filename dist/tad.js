"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Tad {
  birthDate(day, month, year) {
    const parsedDate = `${day}/${month}/${year}`;
    return parsedDate;
  }

  returnAge(birthYear) {
    const year = new Date().getFullYear();
    return year - birthYear;
  }

  createUser(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  invertUserName(firstName, lastName) {
    return `${lastName} ${firstName}`;
  }

}

var _default = Tad;
exports.default = _default;