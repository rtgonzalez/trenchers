"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _path = _interopRequireDefault(require("path"));

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var jsonDirectory, fileContents;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //Find the absolute path of the data directory
          jsonDirectory = _path["default"].join(process.cwd(), 'data'); //Read the json data file

          _context.next = 4;
          return regeneratorRuntime.awrap(_fs.promises.readFile(jsonDirectory + '/happyhours.json', 'utf8'));

        case 4:
          fileContents = _context.sent;
          //Return the content of the data file in json format
          res.status(200).json(fileContents);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // Sends error to the client side
          res.status(500).send('Internal Server Error.');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}