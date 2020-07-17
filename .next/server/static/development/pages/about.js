module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @xstate/react */ \"@xstate/react\");\n/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_xstate_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CountrySelector */ \"./src/components/CountrySelector.js\");\n/* harmony import */ var _src_components_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/stat */ \"./src/components/stat.js\");\n/* harmony import */ var _src_components_CountrySearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/CountrySearch */ \"./src/components/CountrySearch.js\");\nvar _jsxFileName = \"/Users/phonxaychampasouk/Desktop/Github/PhonxayChampasouk.com/pages/about.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst statsApi = \"https://coronavirus-19-api.herokuapp.com/countries\"; //when page is loaded the machine will fetch the initial stats first.\n\nconst statsMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"])({\n  id: \"statsMachine\",\n  initial: \"fetchStats\",\n  context: {\n    countriesSelected: [],\n    stats: null\n  },\n  states: {\n    fetchStats: {\n      invoke: {\n        src: () => new Promise(async (resolve, reject) => {\n          try {\n            const stats = await fetch(statsApi).then(response => response.json());\n            return resolve(stats);\n          } catch (error) {\n            console.log(\"error in fetching stats: \", error);\n            return reject(error);\n          }\n        }),\n        //onDone's target is the next target state, actions is how the state saves the returned promise to the machine\n        //actions simutaneously assigns the stats and the state moves to the target state\n        onDone: {\n          target: \"ready\",\n          actions: \"assignStats\"\n        },\n        onError: \"error\"\n      }\n    },\n    ready: {\n      on: {\n        COUNTRY_SELECTED: {\n          actions: \"updateSelectedCountry\"\n        }\n      }\n    },\n    error: {}\n  }\n}, {\n  // assign keyword is letting you know it is assigning a new prop, context is what is in you state\n  //event is the returned promise\n  actions: {\n    assignStats: Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"assign\"])((_context, event) => ({\n      stats: event.data\n    })),\n    updateSelectedCountry: Object(xstate__WEBPACK_IMPORTED_MODULE_1__[\"assign\"])((context, event) => ({\n      countriesSelected: context.stats.reduce((acc, stat) => stat.country.toLowerCase().match(event.country.target.value.toLowerCase()) ? [...acc, stat] : acc, [])\n    }))\n  }\n});\n\nconst IndexPage = () => {\n  const [current, send] = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_2__[\"useMachine\"])(statsMachine);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 10\n    }\n  }, \"CoronaVirus Information\"), current.matches(\"fetchStats\") && __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 43\n    }\n  }, \"Loading Stats\\u2026\"), current.matches(\"error\") && __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 38\n    }\n  }, \"Error fetching stats\\u2026\"), current.matches(\"ready\") && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    stats: current.context.stats,\n    handleChange: country => send(\"COUNTRY_SELECTED\", {\n      country\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }), __jsx(_src_components_CountrySearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    handleChange: country => send(\"COUNTRY_SELECTED\", {\n      country\n    }),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  })), current.context.countriesSelected.length > 0 && __jsx(_src_components_stat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    stats: current.context.countriesSelected,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbInN0YXRzQXBpIiwic3RhdHNNYWNoaW5lIiwiTWFjaGluZSIsImlkIiwiaW5pdGlhbCIsImNvbnRleHQiLCJjb3VudHJpZXNTZWxlY3RlZCIsInN0YXRzIiwic3RhdGVzIiwiZmV0Y2hTdGF0cyIsImludm9rZSIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25Eb25lIiwidGFyZ2V0IiwiYWN0aW9ucyIsIm9uRXJyb3IiLCJyZWFkeSIsIm9uIiwiQ09VTlRSWV9TRUxFQ1RFRCIsImFzc2lnblN0YXRzIiwiYXNzaWduIiwiX2NvbnRleHQiLCJldmVudCIsImRhdGEiLCJ1cGRhdGVTZWxlY3RlZENvdW50cnkiLCJyZWR1Y2UiLCJhY2MiLCJzdGF0IiwiY291bnRyeSIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJ2YWx1ZSIsIkluZGV4UGFnZSIsImN1cnJlbnQiLCJzZW5kIiwidXNlTWFjaGluZSIsIm1hdGNoZXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxvREFBakIsQyxDQUVBOztBQUNBLE1BQU1DLFlBQVksR0FBR0Msc0RBQU8sQ0FDeEI7QUFDRUMsSUFBRSxFQUFFLGNBRE47QUFFRUMsU0FBTyxFQUFFLFlBRlg7QUFHRUMsU0FBTyxFQUFFO0FBQ1BDLHFCQUFpQixFQUFFLEVBRFo7QUFFUEMsU0FBSyxFQUFFO0FBRkEsR0FIWDtBQU9FQyxRQUFNLEVBQUU7QUFDTkMsY0FBVSxFQUFFO0FBQ1ZDLFlBQU0sRUFBRTtBQUNOQyxXQUFHLEVBQUUsTUFDSCxJQUFJQyxPQUFKLENBQVksT0FBT0MsT0FBUCxFQUFnQkMsTUFBaEIsS0FBMkI7QUFDckMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJKLENBREY7QUEwQkQsQ0E1QkQ7O0FBNkJlb0Msd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgYXNzaWduLCBNYWNoaW5lIH0gZnJvbSBcInhzdGF0ZVwiXG5pbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIlxuaW1wb3J0IENvdW50cnlTZWxlY3RvciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ291bnRyeVNlbGVjdG9yXCJcbmltcG9ydCBTdGF0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zdGF0XCJcbmltcG9ydCBDb3VudHJ5U2VhcmNoIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Db3VudHJ5U2VhcmNoXCJcblxuY29uc3Qgc3RhdHNBcGkgPSBcImh0dHBzOi8vY29yb25hdmlydXMtMTktYXBpLmhlcm9rdWFwcC5jb20vY291bnRyaWVzXCJcblxuLy93aGVuIHBhZ2UgaXMgbG9hZGVkIHRoZSBtYWNoaW5lIHdpbGwgZmV0Y2ggdGhlIGluaXRpYWwgc3RhdHMgZmlyc3QuXG5jb25zdCBzdGF0c01hY2hpbmUgPSBNYWNoaW5lKFxuICAgIHtcbiAgICAgIGlkOiBcInN0YXRzTWFjaGluZVwiLFxuICAgICAgaW5pdGlhbDogXCJmZXRjaFN0YXRzXCIsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGNvdW50cmllc1NlbGVjdGVkOiBbXSxcbiAgICAgICAgc3RhdHM6IG51bGwsXG4gICAgICB9LFxuICAgICAgc3RhdGVzOiB7XG4gICAgICAgIGZldGNoU3RhdHM6IHtcbiAgICAgICAgICBpbnZva2U6IHtcbiAgICAgICAgICAgIHNyYzogKCkgPT5cbiAgICAgICAgICAgICAgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IGF3YWl0IGZldGNoKHN0YXRzQXBpKS50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShzdGF0cylcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBmZXRjaGluZyBzdGF0czogXCIsIGVycm9yKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAvL29uRG9uZSdzIHRhcmdldCBpcyB0aGUgbmV4dCB0YXJnZXQgc3RhdGUsIGFjdGlvbnMgaXMgaG93IHRoZSBzdGF0ZSBzYXZlcyB0aGUgcmV0dXJuZWQgcHJvbWlzZSB0byB0aGUgbWFjaGluZVxuICAgICAgICAgICAgICAgIC8vYWN0aW9ucyBzaW11dGFuZW91c2x5IGFzc2lnbnMgdGhlIHN0YXRzIGFuZCB0aGUgc3RhdGUgbW92ZXMgdG8gdGhlIHRhcmdldCBzdGF0ZVxuICAgICAgICAgICAgb25Eb25lOiB7IHRhcmdldDogXCJyZWFkeVwiLCBhY3Rpb25zOiBcImFzc2lnblN0YXRzXCIgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IFwiZXJyb3JcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICByZWFkeToge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBDT1VOVFJZX1NFTEVDVEVEOiB7IGFjdGlvbnM6IFwidXBkYXRlU2VsZWN0ZWRDb3VudHJ5XCIgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICAvLyBhc3NpZ24ga2V5d29yZCBpcyBsZXR0aW5nIHlvdSBrbm93IGl0IGlzIGFzc2lnbmluZyBhIG5ldyBwcm9wLCBjb250ZXh0IGlzIHdoYXQgaXMgaW4geW91IHN0YXRlXG4gICAgICAgIC8vZXZlbnQgaXMgdGhlIHJldHVybmVkIHByb21pc2VcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYXNzaWduU3RhdHM6IGFzc2lnbigoX2NvbnRleHQsIGV2ZW50KSA9PiAoe1xuICAgICAgICAgIHN0YXRzOiBldmVudC5kYXRhLFxuICAgICAgICB9KSksXG5cbiAgICAgICAgdXBkYXRlU2VsZWN0ZWRDb3VudHJ5OiBhc3NpZ24oKGNvbnRleHQsIGV2ZW50KSA9PiAoe1xuICAgICAgICAgIGNvdW50cmllc1NlbGVjdGVkOiBjb250ZXh0LnN0YXRzLnJlZHVjZShcbiAgICAgICAgICAgIChhY2MsIHN0YXQpID0+XG4gICAgICAgICAgICAgIHN0YXQuY291bnRyeVxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLm1hdGNoKGV2ZW50LmNvdW50cnkudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgPyBbLi4uYWNjLCBzdGF0XVxuICAgICAgICAgICAgICAgIDogYWNjLFxuICAgICAgICAgICAgW11cbiAgICAgICAgICApLFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgIH1cbiAgKVxuICBjb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnQsIHNlbmRdID0gdXNlTWFjaGluZShzdGF0c01hY2hpbmUpXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8aDM+Q29yb25hVmlydXMgSW5mb3JtYXRpb248L2gzPiBcbiAgICAgICAge2N1cnJlbnQubWF0Y2hlcyhcImZldGNoU3RhdHNcIikgJiYgPGRpdj5Mb2FkaW5nIFN0YXRz4oCmPC9kaXY+fSBcbiAgICAgICAge2N1cnJlbnQubWF0Y2hlcyhcImVycm9yXCIpICYmIDxkaXY+RXJyb3IgZmV0Y2hpbmcgc3RhdHPigKY8L2Rpdj59IFxuICAgICAgICB7Y3VycmVudC5tYXRjaGVzKFwicmVhZHlcIikgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q291bnRyeVNlbGVjdG9yXG4gICAgICAgICAgICAgIHN0YXRzPXtjdXJyZW50LmNvbnRleHQuc3RhdHN9XG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17KGNvdW50cnkpID0+IHNlbmQoXCJDT1VOVFJZX1NFTEVDVEVEXCIsIHsgY291bnRyeSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q291bnRyeVNlYXJjaFxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9eyhjb3VudHJ5KSA9PiBzZW5kKFwiQ09VTlRSWV9TRUxFQ1RFRFwiLCB7IGNvdW50cnkgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICAgXG4gICAgICAgIHtjdXJyZW50LmNvbnRleHQuY291bnRyaWVzU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFN0YXQgc3RhdHM9e2N1cnJlbnQuY29udGV4dC5jb3VudHJpZXNTZWxlY3RlZH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgIFxuICAgICAgPC8+XG4gICAgKVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "./src/components/CountrySearch.js":
/*!*****************************************!*\
  !*** ./src/components/CountrySearch.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/phonxaychampasouk/Desktop/Github/PhonxayChampasouk.com/src/components/CountrySearch.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CountrySearch = ({\n  handleChange\n}) => {\n  return __jsx(\"input\", {\n    onChange: handleChange,\n    placeholder: \"Search for a country\",\n    type: \"search\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountrySearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudHJ5U2VhcmNoLmpzP2RiOTciXSwibmFtZXMiOlsiQ291bnRyeVNlYXJjaCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBc0I7QUFDMUMsU0FDRTtBQUNFLFlBQVEsRUFBRUEsWUFEWjtBQUVFLGVBQVcsRUFBQyxzQkFGZDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQU9ELENBUkQ7O0FBVWVELDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRyeVNlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ291bnRyeVNlYXJjaCA9ICh7IGhhbmRsZUNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY291bnRyeVwiXG4gICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CountrySearch.js\n");

/***/ }),

/***/ "./src/components/CountrySelector.js":
/*!*******************************************!*\
  !*** ./src/components/CountrySelector.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/phonxaychampasouk/Desktop/Github/PhonxayChampasouk.com/src/components/CountrySelector.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst CountrySelector = ({\n  handleChange,\n  stats\n}) => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(Selector, {\n  onChange: handleChange,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}, __jsx(\"option\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}, \"Select a country\"), stats.map((stat, i) => __jsx(\"option\", {\n  key: `${stat.country}-${i}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 11\n  }\n}, stat.country))));\n\nconst Selector = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select`\n    -webkit-box-align: center;\n    align-items: center;\n    background-color: rgb(255, 255, 255);\n    cursor: default;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    min-height: 38px;\n    position: relative;\n    box-sizing: border-box;\n    border-color: rgb(204, 204, 204);\n    border-radius: 4px;\n    border-style: solid;\n    border-width: 1px;\n    transition: all 100ms ease 0s;\n    outline: 0px !important;\n    font-size: 15px;\n    margin-bottom: 10px;\n  `;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountrySelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudHJ5U2VsZWN0b3IuanM/NmIwNSJdLCJuYW1lcyI6WyJDb3VudHJ5U2VsZWN0b3IiLCJoYW5kbGVDaGFuZ2UiLCJzdGF0cyIsIm1hcCIsInN0YXQiLCJpIiwiY291bnRyeSIsIlNlbGVjdG9yIiwic3R5bGVkIiwic2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQyxjQUFGO0FBQWdCQztBQUFoQixDQUFELEtBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFFBQUQ7QUFBVSxVQUFRLEVBQUVELFlBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUdDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxLQUNUO0FBQVEsS0FBRyxFQUFHLEdBQUVELElBQUksQ0FBQ0UsT0FBUSxJQUFHRCxDQUFFLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBc0NELElBQUksQ0FBQ0UsT0FBM0MsQ0FERCxDQUZILENBREYsQ0FESjs7QUFXRSxNQUFNQyxRQUFRLEdBQUdDLHdEQUFNLENBQUNDLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQS9CO0FBc0JlVCw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NvdW50cnlTZWxlY3Rvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cblxuY29uc3QgQ291bnRyeVNlbGVjdG9yID0gKHsgaGFuZGxlQ2hhbmdlLCBzdGF0cyB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWxlY3RvciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgPG9wdGlvbj5TZWxlY3QgYSBjb3VudHJ5PC9vcHRpb24+XG4gICAgICAgIHtzdGF0cy5tYXAoKHN0YXQsIGkpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17YCR7c3RhdC5jb3VudHJ5fS0ke2l9YH0+e3N0YXQuY291bnRyeX08L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlbGVjdG9yPlxuICAgIDwvZGl2PlxuICApXG4gIFxuICBjb25zdCBTZWxlY3RvciA9IHN0eWxlZC5zZWxlY3RgXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogMzhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZSAwcztcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYFxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQ291bnRyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CountrySelector.js\n");

/***/ }),

/***/ "./src/components/stat.js":
/*!********************************!*\
  !*** ./src/components/stat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/phonxaychampasouk/Desktop/Github/PhonxayChampasouk.com/src/components/stat.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Stat = ({\n  stats\n}) => {\n  return stats.map((stat, i) => __jsx(\"div\", {\n    key: `${stat.country}-${i}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"b\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, stat.country), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }), \"Cases: \", stat.cases, \" | Today: \", stat.todayCases, \" | Active: \", stat.active, ' ', __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), \"Deaths: \", stat.deaths, \" | Recovered: \", stat.recovered, \" | Critical:\", ' ', stat.critical));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stat);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0LmpzP2RkZDAiXSwibmFtZXMiOlsiU3RhdCIsInN0YXRzIiwibWFwIiwic3RhdCIsImkiLCJjb3VudHJ5IiwiY2FzZXMiLCJ0b2RheUNhc2VzIiwiYWN0aXZlIiwiZGVhdGhzIiwicmVjb3ZlcmVkIiwiY3JpdGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDMUIsU0FBT0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ2Y7QUFBSyxPQUFHLEVBQUcsR0FBRUQsSUFBSSxDQUFDRSxPQUFRLElBQUdELENBQUUsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUQsSUFBSSxDQUFDRSxPQUFULENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsYUFJVUYsSUFBSSxDQUFDRyxLQUpmLGdCQUlnQ0gsSUFBSSxDQUFDSSxVQUpyQyxpQkFJNERKLElBQUksQ0FBQ0ssTUFKakUsRUFJeUUsR0FKekUsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsY0FNV0wsSUFBSSxDQUFDTSxNQU5oQixvQkFNc0NOLElBQUksQ0FBQ08sU0FOM0Msa0JBTWtFLEdBTmxFLEVBT0dQLElBQUksQ0FBQ1EsUUFQUixDQURLLENBQVA7QUFXRCxDQVpEOztBQWNlWCxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3N0YXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFN0YXQgPSAoeyBzdGF0cyB9KSA9PiB7XG4gIHJldHVybiBzdGF0cy5tYXAoKHN0YXQsIGkpID0+IChcbiAgICA8ZGl2IGtleT17YCR7c3RhdC5jb3VudHJ5fS0ke2l9YH0+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiPntzdGF0LmNvdW50cnl9PC9iPlxuICAgICAgPGJyIC8+XG4gICAgICBDYXNlczoge3N0YXQuY2FzZXN9IHwgVG9kYXk6IHtzdGF0LnRvZGF5Q2FzZXN9IHwgQWN0aXZlOiB7c3RhdC5hY3RpdmV9eycgJ31cbiAgICAgIDxiciAvPlxuICAgICAgRGVhdGhzOiB7c3RhdC5kZWF0aHN9IHwgUmVjb3ZlcmVkOiB7c3RhdC5yZWNvdmVyZWR9IHwgQ3JpdGljYWw6eycgJ31cbiAgICAgIHtzdGF0LmNyaXRpY2FsfVxuICAgIDwvZGl2PlxuICApKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/stat.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phonxaychampasouk/Desktop/Github/PhonxayChampasouk.com/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "@xstate/react":
/*!********************************!*\
  !*** external "@xstate/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@xstate/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAeHN0YXRlL3JlYWN0XCI/NmQ3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAeHN0YXRlL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHhzdGF0ZS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@xstate/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xstate\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ4c3RhdGVcIj9hYTgzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InhzdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInhzdGF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///xstate\n");

/***/ })

/******/ });