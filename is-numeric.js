(function(root) {
  'use strict';

  function isNumeric(v, opts) {
    if (!(opts instanceof Object)) {
      opts = {
        trim: true
      }
    }
    if (typeof v === 'number' && !isNaN(v)) return true;
    v = (v||'').toString()
    if ('trim' in opts && !opts.trim) {
      return !/\s/.test(v)
    }
    v = v.trim()
    if (!v) return false;
    return !isNaN(v);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isNumeric;
    });
  } else {
    root.isNumeric = isNumeric;
  }

})(this);
