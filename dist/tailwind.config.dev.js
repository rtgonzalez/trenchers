"use strict";

var _colors;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: (_colors = {
        clrgolden: '#dcca87',
        clrorange: '#e8993d',
        crlalabaster: '#edeade',
        crlyellow: '##ffff00',
        crlblack: '#0c0c0c',
        clrgray: {
          dark: '#545454',
          light: '#d3d3d3'
        },
        clrcrimson: '#f5efdb',
        clrgrey: '#aaaaaa',
        clrwhite: '#ffffff',
        clrwine: '#722f37'
      }, _defineProperty(_colors, "crlblack", '#0c0c0c'), _defineProperty(_colors, "clrred", {
        dark: '#8b0000'
      }), _defineProperty(_colors, "clryelp", '#d32323'), _defineProperty(_colors, "clrfacebook", '#ffffff'), _colors)
    }
  },
  variants: {
    extend: {}
  }
};