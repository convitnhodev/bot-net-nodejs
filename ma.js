const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");
const path = require("path");
const {Base64} = require("js-base64");
const pathDecode = path.join(__dirname,"goc.js");
const pathSave = path.join(__dirname,"app.js");

const  source  = fs.readFileSync(pathDecode).toString("utf-8");
//decode.js
var obfuscationResult = JavaScriptObfuscator.obfuscate(source,{target: "node",ignoreImports:true,ignoreRequireImports:true,disableConsoleOutput:true});
var sourcDecode = obfuscationResult.getObfuscatedCode();
console.log(sourcDecode);
fs.writeFileSync(pathSave,sourcDecode);