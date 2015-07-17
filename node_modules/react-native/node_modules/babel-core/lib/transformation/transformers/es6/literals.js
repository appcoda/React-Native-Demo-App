"use strict";

exports.__esModule = true;
var metadata = {
  group: "builtin-pre"
};

exports.metadata = metadata;
var visitor = {
  Literal: function Literal(node) {
    // number octal like 0b10 or 0o70
    if (typeof node.value === "number" && node.raw[0] === "0" && (node.raw[1] === "o" || node.raw[1] === "b")) {
      node.raw = undefined;
    }

    // unicode escape
    if (typeof node.value === "string") {}
  }
};
exports.visitor = visitor;

//node.raw = undefined;