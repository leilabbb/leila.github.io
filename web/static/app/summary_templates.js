this["JST"] = this["JST"] || {};

this["JST"]["static/js/partials/DeploymentItem.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href=\'#\'>\n  <div class="deployment-title">\n    ' +
((__t = (model.get('name') )) == null ? '' : __t) +
'\n  </div>\n  ' +
((__t = ( model.get('operator') )) == null ? '' : __t) +
'\n</a>\n\n';

}
return __p
};

this["JST"]["static/js/partials/IOOSBanner.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <header>\n    <nav class="navbar navbar-custom">\n      <div class="container">\n        <div class="navbar-header">\n          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nb-collapse">\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <a class="navbar-img-brand" href="/">\n            <img src="static/img/ioos.png" alt="IOOS Catalog" />\n          </a>\n          <a class="navbar-brand" href="/">\n            GliderDAC\n          </a>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <div class="jumbotron">\n    <div class="container">\n      <div class="row">\n        <ul class="nav-header nav navbar-nav">\n          <li><a href="/">Home</a></li>\n          <li><a href="/help/">Help</a></li>\n          <li> <a href="https://github.com/ioos/catalog/wiki/Roadmap">Roadmap</a></li>\n          <li> <a href="https://github.com/ioos/catalog/milestones">Milestones</a></li>\n          <li> <a href="/help/feedback">Feedback</a></li>\n          <li> <a href="/help/download/">Download Help</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n';

}
return __p
};

this["JST"]["static/js/partials/SidePanel.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="side-panel">\n  <ul class="categories">\n    <li>\n      <select id="provider-select" name="provider" class="selectpicker">\n        <option value="-">All Providers</option>\n        ';
 institutions.each(function(institution) { ;
__p += '\n          ';
 if(institution.get('name')) { ;
__p += '\n            <option value="' +
((__t = ( institution.get('name') )) == null ? '' : __t) +
'">' +
((__t = ( institution.get('name') )) == null ? '' : __t) +
'</option>\n          ';
 } ;
__p += '\n        ';
 }); ;
__p += '\n      </select>\n      <ul class="deployment-list list-group">\n      </ul>\n    </li>\n  </ul>\n</div>\n';

}
return __p
};

this["JST"]["static/js/partials/Map.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<b>Hi</b>\n';

}
return __p
};