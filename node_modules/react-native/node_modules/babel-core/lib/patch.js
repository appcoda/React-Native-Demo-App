"use strict";

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _estraverse = require("estraverse");

var _estraverse2 = _interopRequireDefault(_estraverse);

var _lodashObjectExtend = require("lodash/object/extend");

var _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);

var _types = require("./types");

var t = _interopRequireWildcard(_types);

_lodashObjectExtend2["default"](_estraverse2["default"].VisitorKeys, t.VISITOR_KEYS);