/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// index.js\n// require('dotenv').config();\n\nconst form = document.getElementById('astrologyForm');\n\nform.addEventListener('submit', async (event) => {\n    event.preventDefault();\n\n    // get form values\n    const name = document.getElementById('name').value;\n    const birthdate = document.getElementById('birthdate').value;\n    const birthtime = document.getElementById('birthtime').value;\n    const latitude = document.getElementById('latitude').value;\n    const longitude = document.getElementById('longitude').value;\n\n    // Create a request payload\n    const requestData = {\n        year: new Date(birthdate).getFullYear(),\n        month: new Date(birthdate).getMonth() + 1,\n        date: new Date(birthdate).getDate(),\n        hours: parseInt(birthtime.slice(0, 2)),\n        minutes: parseInt(birthtime.slice(3, 5)),\n        latitude: parseFloat(latitude),\n        longitude: parseFloat(longitude),\n        timezone: -8, // Adjust this based on the user's timezone\n        settings: {\n            observation_point: 'topocentric',\n            ayanamsha: 'lahiri',\n        },\n    };\n\n    try {\n        const response = await fetch('/api/planets', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n                'Authorization': `Bearer ${process.env.API_KEY}`,\n            },\n            body: JSON.stringify(requestData),\n        });\n\n        if(!response.ok) {\n            throw new Error('Network request potato failed');\n        }\n        const result = await response.json();\n\n        const resultContainer = document.getElementById('resultContainer');\n        resultContainer.innerHTML = JSON.stringify(result, null, 2);\n    }\n    catch (error) {\n        console.error('Error', error);\n    }\n    \n});\n\n//# sourceURL=webpack://front_end_simple/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;