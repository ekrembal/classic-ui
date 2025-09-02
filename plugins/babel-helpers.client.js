import 'regenerator-runtime/runtime'

// Import Babel helpers directly
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator'
import _defineProperty from '@babel/runtime/helpers/defineProperty'
import _createClass from '@babel/runtime/helpers/createClass'

// Make them globally available
if (typeof window !== 'undefined') {
  window._asyncToGenerator = _asyncToGenerator
  window._defineProperty = _defineProperty  
  window._createClass = _createClass
  
  // Also make available for web workers
  if (typeof self !== 'undefined') {
    self._asyncToGenerator = _asyncToGenerator
    self._defineProperty = _defineProperty
    self._createClass = _createClass
  }
}