Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function (ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="table datagrid-table table-bordered\n    ' +
((__t = ( ctx.component.striped ? 'table-striped' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? 'table-hover' : '')) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? 'table-sm' : '')) == null ? '' : __t) +
'\n    " ';
 if (ctx.component.layoutFixed) { ;
__p += 'style="table-layout: fixed;"';
 } ;
__p += '>\n  ';
 if (ctx.hasHeader) { ;
__p += '\n  <thead>\n    <tr>\n      ';
 if (ctx.component.reorder) { ;
__p += '<th></th>';
 } ;
__p += '\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n      ';
 if (ctx.builder || ctx.visibleColumns[col.key]) { ;
__p += '\n      <th class="' +
((__t = (col.validate && col.validate.required ? 'field-required' : '')) == null ? '' : __t) +
'">\n        ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\n        ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted"></i>';
 } ;
__p += '\n      </th>\n      ';
 } ;
__p += '\n      ';
 }) ;
__p += '\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\n      <th>\n        ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n        <button class="btn btn-primary formio-button-add-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Add Another'))) == null ? '' : __t) +
'\n        </button>\n        ';
 } ;
__p += '\n      </th>\n      ';
 } ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody">\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\n    ';
 if (ctx.hasGroups && ctx.groups[index]) { ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-header" class="datagrid-group-header' +
((__t = (ctx.hasToggle ? ' clickable' : '')) == null ? '' : __t) +
'">\n      <td\n        ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-label"\n        colspan="' +
((__t = (ctx.numColumns)) == null ? '' : __t) +
'"\n        class="datagrid-group-label">' +
((__t = (ctx.groups[index].label)) == null ? '' : __t) +
'</td>\n    </tr>\n    ';
 } ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row">\n      ';
 if (ctx.component.reorder) { ;
__p += '\n        <td>\n          <button type="button" class="button"></button>\n        </td>\n      ';
 } ;
__p += '\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\n      ';
 if (ctx.builder || ctx.visibleColumns[col.key]) { ;
__p += '\n      <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n      </td>\n      ';
 } ;
__p += '\n      ';
 }) ;
__p += '\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\n        ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\n        <td>\n          <button type="button" class="button is-danger" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow">\n            <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\n          </button>\n        </td>\n        ';
 } ;
__p += '\n        ';
 if (ctx.canAddColumn) { ;
__p += '\n        <td ref="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-container">\n          ' +
((__t = (ctx.placeholder)) == null ? '' : __t) +
'\n        </td>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n  ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n  <tfoot>\n    <tr>\n      <td colspan="' +
((__t = (ctx.numColumns + 1)) == null ? '' : __t) +
'">\n        <button class="button is-primary" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || '  &nbsp; Add Another'))) == null ? '' : __t) +
'\n        </button>\n      </td>\n    </tr>\n  </tfoot>\n  ';
 } ;
__p += '\n</table>\n';
return __p
}