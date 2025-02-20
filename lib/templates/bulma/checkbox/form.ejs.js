Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function (ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class=\'field\'>\n  <div class=\'control\'>\n    <label class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' checkbox">\n      <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n        ref="input"\n        class=\'checkbox\'\n        ';
 for (var attr in ctx.input.attr) { ;
__p += '\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n        ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\n        >\n      ';
 if (!ctx.self.labelIsHidden()) { ;
__p +=
((__t = (ctx.input.label)) == null ? '' : __t);
 } ;
__p += '\n      ';
 if (ctx.component.tooltip) { ;
__p += '\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted"></i>\n      ';
 } ;
__p += '\n      ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\n      </' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n    </label>\n  </div>\n</div>\n';
return __p
}