"use strict";

exports.__esModule = true;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _normalizeAst = require("./normalize-ast");

var _normalizeAst2 = _interopRequireDefault(_normalizeAst);

var _estraverse = require("estraverse");

var _estraverse2 = _interopRequireDefault(_estraverse);

var _babylon = require("babylon");

var babylon = _interopRequireWildcard(_babylon);

/**
 * Parse `code` with normalized options, collecting tokens and comments.
 */

exports["default"] = function (code) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var commentsAndTokens = [];
  var comments = [];
  var tokens = [];

  var parseOpts = {
    allowImportExportEverywhere: opts.looseModules,
    allowReturnOutsideFunction: opts.looseModules,
    allowHashBang: true,
    ecmaVersion: 6,
    strictMode: opts.strictMode,
    sourceType: opts.sourceType,
    locations: true,
    features: opts.features || {},
    plugins: opts.plugins || {},
    onToken: tokens,
    ranges: true
  };

  /**
   * Collect all tokens.
   */
  parseOpts.onToken = function (token) {
    tokens.push(token);
    commentsAndTokens.push(token);
  };

  /**
   * Collection all comments.
   */
  parseOpts.onComment = function (block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "CommentBlock" : "CommentLine",
      value: text,
      start: start,
      end: end,
      loc: new babylon.SourceLocation(this, startLoc, endLoc),
      range: [start, end]
    };

    commentsAndTokens.push(comment);
    comments.push(comment);
  };

  if (opts.nonStandard) {
    parseOpts.plugins.jsx = true;
    parseOpts.plugins.flow = true;
  }

  var ast = babylon.parse(code, parseOpts);
  _estraverse2["default"].attachComments(ast, comments, tokens);
  ast = _normalizeAst2["default"](ast, comments, commentsAndTokens);
  return ast;
};

module.exports = exports["default"];