!function (e, t) {'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.VueBubbles = t() : e.VueBubbles = t();}(window, function () {
  return function (e) {
    var t = {};
    
    
    function n (r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = { i: r, l: !1, exports: {} };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    
    
    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get:        r,
      });
    }, n.r = function (e) {'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });}, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, 'default', {
        enumerable: !0,
        value:      e,
      }), 2 & t && 'string' != typeof e) for (var o in e) n.d(r, o, function (t) {return e[t];}.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {return e.default;} : function () {return e;};
      return n.d(t, 'a', t), t;
    }, n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}, n.p = '.', n(n.s = 0);
  }([function (e, t) {
    let n;
    
    
    class r {
      constructor (e) {this.canSpread = !0, this.originComponent = e;}
      
      
      stopSpread () {this.canSpread = !1;}
    }
    
    
    class o extends r {constructor (e, t) {super(e), this.data = t;}}
    
    
    t.install = function e (t) {e.installed && n === t || (e.installed = !0, n = t, t.prototype.$broadcast = function (e, t) {return function e (t, n, r) {return r.canSpread && Object.getPrototypeOf(t.$children) === Array.prototype && t.$children.length && t.$children.forEach(t => {t.$emit(n, r), e(t, n, r);}), t;}(this, e, new o(this, t));}, t.prototype.$bubble = function (e, t) {return function e (t, n, r) {return t.$emit(n, r), r.canSpread && t.$parent && e(t.$parent, n, r), t;}(this, e, new o(this, t));});};
  }]);
});
//# sourceMappingURL=vue-bubble.js.map
