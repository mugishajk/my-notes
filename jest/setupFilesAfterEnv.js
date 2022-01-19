import "@testing-library/jest-dom/extend-expect";
import 'whatwg-fetch';
// to fix the Text Encoder undefined error
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
