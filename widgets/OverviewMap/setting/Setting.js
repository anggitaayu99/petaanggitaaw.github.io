// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/OverviewMap/setting/BaseLayerConfig":function(){define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Deferred dojo/text!./BaseLayerConfig.html ../utils jimu/utils jimu/dijit/LoadingShelter dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin".split(" "),function(m,e,n,f,h,r,u,q,g,v,w,x,t){return m([w,x,t],{templateString:u,nls:null,TYPE:q.TYPE,postCreate:function(){this.shelter=new v({hidden:!0});this.shelter.placeAt(this.domNode);
this.inherited(arguments)},startup:function(){this._toggleVELayerByKey();this._setBaseLayerStyle();this.own(n(this.baseLayerType,"change",e.hitch(this,function(c){this._setBaseLayerStyle(c)})));this.initVerification();this.inherited(arguments)},initVerification:function(){this.own(n(this.baseLayerType,"change",e.hitch(this,function(){this._showErrMsg(null)})));this.own(n(this.baseLayerType,"blur",e.hitch(this,function(){this._showErrMsg(null)})));h.forEach([this.tiledMapServiceUrlInput,this.dynamicMapServiceUrlInput,
this.imageServiceUrlInput],e.hitch(this,function(c){this.own(n(c,"change",e.hitch(this,function(){this.isValid()})));this.own(n(c,"blur",e.hitch(this,function(){this.isValid()})))}))},isValid:function(){this.shelter.show();var c=new r;f.addClass(this.domNode,"validating");q.valid.baseLayerVerification(this.getValues(),this.map).then(e.hitch(this,function(d){f.removeClass(this.domNode,"validating");this._showErrMsg(null);if(d&&!0===d.res)f.removeClass(this.domNode,"error"),this.shelter.hide(),c.resolve(!0);
else{f.addClass(this.domNode,"error");var b=this._getType();if(b===this.TYPE.ARCGIS_TILED_MAP||b===this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE||b===this.TYPE.ARCGIS_IMAGE_SERVICE)this._setArcGISLayerInputState("Error"),f.removeClass(this.errorNode,"hide"),(d=d.err)&&("wkid"===d?this._showErrMsg(this.nls.errWkid):"layerType"===d?this._showErrMsg(this.nls.errUrl):d.name&&-1!==d.name.indexOf("SyntaxError")?this._showErrMsg(this.nls.errUrl):d.name&&-1!==d.name.indexOf("RequestError")?this._showErrMsg(this.nls.errUrl):
!d.name||-1===d.message.indexOf("Invalid URL")&&-1===d.message.indexOf("Unexpected token \x3c")?d.name&&-1!==d.message.indexOf("Timeout exceeded")?this._showErrMsg(this.nls.errReqTimeout):this._showErrMsg(this.nls.errUrl):this._showErrMsg(this.nls.errUrl));this.shelter.hide();c.resolve(!1)}}),e.hitch(this,function(){f.removeClass(this.domNode,"validating");f.removeClass(this.domNode,"error");this.shelter.hide();c.resolve(!1)}));return c},isUrlEmpty:function(){f.addClass(this.domNode,"validating");
var c=this._getType();(c=this._getArcLayerInputsValue(c))&&""!==c?(f.removeClass(this.domNode,"validating"),this._showErrMsg(null)):this._showErrMsg(this.nls.errUrl)},getValues:function(){var c=this._getType();return{url:this._getArcLayerInputsValue(c),type:c,veLayerInfo:{isKeyInPortal:q.valid.isHaveBingKey()}}},setValues:function(c){if(c.overviewMap.baseLayer){var d=c.overviewMap.baseLayer.type;this._setArcLayerInputsValue(c.overviewMap.baseLayer.url,d);this.baseLayerType.set("value",d)}},_getType:function(){return this.baseLayerType.value},
_setArcLayerInputsValue:function(c,d){(d=this._getArcGISLayerInput(d))&&d.setValue&&d.setValue(g.stripHTML(c||""))},_getArcGISLayerInput:function(c){switch(c){case this.TYPE.ARCGIS_TILED_MAP:return this.tiledMapServiceUrlInput;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:return this.dynamicMapServiceUrlInput;case this.TYPE.ARCGIS_IMAGE_SERVICE:return this.imageServiceUrlInput}},_setArcGISLayerInputState:function(c){var d=this._getType();(d=this._getArcGISLayerInput(d))&&d.set("state",c)},_getArcLayerInputsValue:function(c){var d;
(c=this._getArcGISLayerInput(c))&&c.value&&(d=c.value,""!==d&&!1===/^\/\//.test(d)&&!1===/(^(.+):\/\/)/.test(d)&&(d="http://"+d));return g.stripHTML(d||"")},_showErrMsg:function(c){c?(this._setArcGISLayerInputState("Error"),f.removeClass(this.errorNode,"hide")):(this._setArcGISLayerInputState(""),f.addClass(this.errorNode,"hide"),this.errorNode.innerHTML="");var d=this._getType();(d=this._getArcGISLayerInput(d))&&d.displayMessage&&d.displayMessage(c);this.errorNode.innerHTML=c},_toggleVELayerByKey:function(){q.valid.isHaveBingKey()||
(this.baseLayerType.removeOption(this.TYPE.BING_AERIAL),this.baseLayerType.removeOption(this.TYPE.BING_HYBRID),this.baseLayerType.removeOption(this.TYPE.BING_ROAD))},_setBaseLayerStyle:function(c){var d=c;!c&&this.config.overviewMap.baseLayer&&this.config.overviewMap.baseLayer.type&&(d=this.config.overviewMap.baseLayer.type);f.addClass(this.baseLayerContainer,"hide");f.addClass(this.tiledMapServiceUrlInput.domNode,"hide");f.addClass(this.dynamicMapServiceUrlInput.domNode,"hide");f.addClass(this.imageServiceUrlInput.domNode,
"hide");switch(d){case this.TYPE.ARCGIS_TILED_MAP:f.removeClass(this.baseLayerContainer,"hide");f.removeClass(this.tiledMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:f.removeClass(this.baseLayerContainer,"hide");f.removeClass(this.dynamicMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_IMAGE_SERVICE:f.removeClass(this.baseLayerContainer,"hide"),f.removeClass(this.imageServiceUrlInput.domNode,"hide")}},_onTileLayerUrlChange:function(c){-1<this.tileLayerUrl.value.toLowerCase().indexOf("{subdomain}")?
f.removeClass(this.subdomainContainer,"hide"):(f.addClass(this.subdomainContainer,"hide"),c&&(this.subdomain.value=""))},_getSubDomains:function(){this._onTileLayerUrlChange(!0);var c=null;this.subdomain.value&&0<this.subdomain.value.length&&(c=this.subdomain.value.split(","),c=h.map(c,function(c){return e.trim(c)}));return c},_getTileInfo:function(){var c=this.tileInfo.value;q.valid.tileInfoStr(c);return c}})})},"widgets/OverviewMap/utils":function(){define("dojo/_base/lang dojo/_base/array dojo/string dojo/Deferred esri/lang esri/request dojo/_base/url esri/layers/TileInfo jimu/portalUtils esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/virtualearth/VETiledLayer esri/layers/OpenStreetMapLayer esri/layers/ImageParameters".split(" "),
function(m,e,n,f,h,r,u,q,g,v,w,x,t,c,d){var b={TYPE:{BASE_MAP:"baseMap",ARCGIS_TILED_MAP:"tiledMapService",ARCGIS_DYNAMIC_MAP_SERVICE:"dynamicMapService",ARCGIS_IMAGE_SERVICE:"imageService",OSM:"openStreetMap",BING_ROAD:"bingMapsRoad",BING_AERIAL:"bingMapsAerial",BING_HYBRID:"bingMapsHybrid"},createBaseLayer:function(a,k,y){var l=new f,p=null,g=a.url,e=a.type;a=a.veLayerInfo;e===b.TYPE.BASE_MAP?l.resolve({layer:"BaseMap"}):e===b.TYPE.ARCGIS_TILED_MAP?b.valid.isArcGISLayersValid(g,k,e).then(function(a){a&&
!0===a.res?(p=new v(g),l.resolve({layer:p})):l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):e===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?b.valid.isArcGISLayersValid(g,k,e).then(function(a){if(a&&!0===a.res){a=a.info;var b={};a&&a.supportedImageFormatTypes&&-1!==a.supportedImageFormatTypes.indexOf("PNG24")&&(b.imageParameters=new d,b.imageParameters.format="png24");p=new w(g,b);l.resolve({layer:p})}else l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):
e===b.TYPE.ARCGIS_IMAGE_SERVICE?b.valid.isArcGISLayersValid(g,k,e).then(function(a){a&&!0===a.res?(p=new x(g,{}),l.resolve({layer:p})):l.resolve({layer:null,err:a.err})},function(a){l.resolve({res:!1,err:a})}):e===b.TYPE.OSM?(p=new c(g,{}),l.resolve({layer:p})):e!==b.TYPE.BING_ROAD&&e!==b.TYPE.BING_AERIAL&&e!==b.TYPE.BING_HYBRID||!a?l.resolve({layer:null}):(k=b.layers.getBingMapKey(y),k&&a.isKeyInPortal||(k="__invalidKey",console.error("OverviewMap Error: BingMapsKey must be provided")),p=new t({bingMapsKey:k,
mapStyle:b.layers._getVEStyle(e)}),l.resolve({layer:p}));return l},layers:{_getLayerInfoSR:function(a){return a.spatialReference||a.extent&&a.extent.spatialReference},_getTileServers:function(a){var b=[],c=new u(a.url);if(a.subDomains&&0<a.subDomains.length&&1<c.authority.split(".").length){var d;e.forEach(a.subDomains,function(a){-1<c.authority.indexOf("${subDomain}")?d=c.scheme+"://"+n.substitute(c.authority,{subDomain:a})+"/":-1<c.authority.indexOf("{subDomain}")&&(d=c.scheme+"://"+c.authority.replace(/\{subDomain\}/gi,
a)+"/");b.push(d)},this)}return b&&0<b.length?b:null},_getVEStyle:function(a){switch(a){case b.TYPE.BING_AERIAL:return t.MAP_STYLE_AERIAL;case b.TYPE.BING_HYBRID:return t.MAP_STYLE_AERIAL_WITH_LABELS;case b.TYPE.BING_ROAD:return t.MAP_STYLE_ROAD;default:return t.MAP_STYLE_AERIAL}},fetchLayerInfo:function(a){var b=new f;r({url:a,handleAs:"json",callbackParamName:"callback",timeout:15E3,content:{f:"json"}}).then(m.hitch(this,function(a){b.resolve(a)}),function(a){b.reject(a)});return b},getBingMapKey:function(a){return(a=
window.portalSelf||a&&g.getPortal(a.appConfig.portalUrl))&&a.bingKey?a.bingKey:""}},valid:{baseLayerVerification:function(a,c){var d=new f,k=c.spatialReference;b.createBaseLayer(a,c).then(function(a){if(a.layer){var c=b.layers._getLayerInfoSR(a.layer);b.valid.sameSpatialReference(k,c)||"BaseMap"===a.layer?d.resolve({res:!0}):d.resolve({res:!1})}else d.resolve({res:!1,err:a.err})},function(a){d.resolve({res:!1,err:a})});return d},ArcGISLayersTypeVerification:function(a,c,d){a=a.toLowerCase();if(0<
a.indexOf("/featureserver")||0<a.indexOf("/mapserver"))if(!c||"string"!==typeof c.type||"Feature Layer"!==c.type&&"Table"!==c.type){if(0<a.indexOf("/featureserver"))return!1;if(0<a.indexOf("/mapserver"))return c.tileInfo?d===b.TYPE.ARCGIS_TILED_MAP||d===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1:d===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1}else return!1;else if(0<a.indexOf("/imageserver"))return d===b.TYPE.ARCGIS_IMAGE_SERVICE?!0:!1},isArcGISLayersValid:function(a,c,d){var k=new f;b.layers.fetchLayerInfo(a).then(function(e){var g=
null,f=null,g=b.layers._getLayerInfoSR(e),f=c&&c.spatialReference;g&&f&&b.valid.sameSpatialReference(f,g)?!0===b.valid.ArcGISLayersTypeVerification(a,e,d)?k.resolve({res:!0,info:e}):k.resolve({res:!1,err:"layerType"}):g&&f&&!b.valid.sameSpatialReference(f,g)?k.resolve({res:!1,err:"wkid"}):k.resolve({res:!1})},function(a){k.resolve({res:!1,err:a})});return k},tileInfoStr:function(a){try{return new q(JSON.parse(a)),!0}catch(k){return k}},isHaveBingKey:function(){return b.layers.getBingMapKey()?!0:!1},
sameSpatialReference:function(a,b){var c=[102113,102100,3857,4326];return a&&b&&h.isDefined(a.wkid)&&h.isDefined(b.wkid)&&-1!==c.indexOf(a.wkid)&&-1!==c.indexOf(b.wkid)||a&&b&&(h.isDefined(a.wkid)&&h.isDefined(b.wkid)&&a.wkid===b.wkid||h.isDefined(a.latestWkid)&&h.isDefined(b.wkid)&&a.latestWkid===b.wkid||h.isDefined(a.wkid)&&h.isDefined(b.latestWkid)&&a.wkid===b.latestWkid||h.isDefined(a.latestWkid)&&h.isDefined(b.latestWkid)&&a.latestWkid===b.latestWkid)||a&&b&&h.isDefined(a.wkt)&&h.isDefined(b.wkt)&&
a.wkt===b.wkt?!0:!1}}};return b})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),function(m,e,n,f,h,r,u,q,g,v,w,x,t,c,d){m=m(t,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(b){try{if(b=e.mixin({bingMapsKey:null,
culture:"en-US"},b||{}),this.url=v.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=v.urlToObject(this.url),this.spatialReference=new w({wkid:102100}),this.tileInfo=new x({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,
resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,
scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=
this.fullExtent=new c(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new w({wkid:102100})),e.mixin(this,b),this.hasAttributionData=this.showAttribution,this._initLayer=e.hitch(this,this._initLayer),this._errorHandler=e.hitch(this,this._errorHandler),this._getTileInfo=e.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");}catch(a){throw this.onError(a),a;}},_unsetMap:function(b,a){this.inherited("_unsetMap",arguments)},
_getTileInfo:function(){if(this.mapStyle){var b=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var c=this.resourceInfo;!this.loaded&&c?this._initLayer(c):d({url:b,content:e.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(b,a){if(200!==b.statusCode)a=Error(),
a.code=b.statusCode,a.message=b.statusDescription,a.details=b.errorDetails,a.authenticationResultCode=b.authenticationResultCode,this.onError(a);else try{this.resourceInfo=n.toJson(b);var c=b.resourceSets[0].resources[0],d=c.imageUrl.replace("{","${");this.tileServers=f.map(c.imageUrlSubdomains,function(a){var b=v.getProtocolForWebResource();return u.substitute(d,{subdomain:a}).replace("http:",b)});this._tsLength=this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=
this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var e=this.loadCallback;e&&(delete this.loadCallback,e(this))}}catch(p){this.onError(p)}},getAttributionData:function(){var b=new q,a=n.fromJson(this.resourceInfo),c;this.hasAttributionData&&a&&(c=e.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));c?b.callback({contributors:c}):(a=Error("Layer does not have attribution data"),a.log=h.isDebug,b.errback(a));return b},getTileUrl:function(b,
a,c){return u.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(b,a,c),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(b,a,c){var d="",e,g;for(g=b;0<g;g--)b="0",e=1<<g-1,0!=(c&e)&&b++,0!=(a&e)&&(b++,b++),d+=b;return d},setMapStyle:function(b){this.mapStyle=b;this._getTileInfo()},setCulture:function(b){this.culture=b;this._getTileInfo()},setBingMapsKey:function(b){this.bingMapsKey=b},onMapStyleChange:function(){}});e.mixin(m,{MAP_STYLE_AERIAL:"aerial",
MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});r("extend-esri")&&e.setObject("virtualearth.VETiledLayer",m,g);return m})},"widgets/OverviewMap/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/OverviewMap/setting/BaseLayerConfig.html":'\x3cdiv class\x3d"baselayer-config"\x3e\r\n  \x3ctable class\x3d"baselayer-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\r\n          \x3clabel for\x3d"baseLayerType"\x3e${nls.baseLayerType}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cselect data-dojo-attach-point\x3d"baseLayerType" data-dojo-type\x3d"dijit/form/Select" id\x3d"baseLayerType"\x3e\r\n            \x3coption value\x3d"${TYPE.BASE_MAP}"\x3e${nls.BaseMap}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.ARCGIS_TILED_MAP}"\x3e${nls.tiledMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_DYNAMIC_MAP_SERVICE}"\x3e${nls.dynamicMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_IMAGE_SERVICE}"\x3e${nls.imageService}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.OSM}"\x3e${nls.OSM}\x3c/option\x3e\r\n            \x3c!--\x3coption id\x3d"WebTiled" value\x3d"WebTiled"\x3e${nls.WebTiled}\x3c/option\x3e--\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingAerialOption" value\x3d"${TYPE.BING_AERIAL}"\x3e${nls.bingAerial}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingHybridOption" value\x3d"${TYPE.BING_HYBRID}"\x3e${nls.bingHybrid}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingRoadOption" value\x3d"${TYPE.BING_ROAD}"\x3e${nls.bingRoad}\x3c/option\x3e\r\n          \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column" width\x3d"100%"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"baseLayerContainer" class\x3d"hide"\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"tiledMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"dynamicMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"imageServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--\r\n      \x3ctr data-dojo-attach-point\x3d"tileLayerContainer" class\x3d"hide"\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3clabel for\x3d"tileLayerUrl"\x3e${nls.tileLayerUrl}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileLayerUrl" id\x3d"tileLayerUrl" /\x3e\r\n          \x3clabel for\x3d"tile"\x3e${nls.tile}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tile" id\x3d"tile" /\x3e\r\n          \x3clabel for\x3d"credits"\x3e${nls.credits}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"credits" id\x3d"credits" /\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"subdomainContainer" class\x3d"hide"\x3e\r\n            \x3clabel for\x3d"subdomain"\x3e${nls.subdomain}\x3c/label\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"subdomain" id\x3d"subdomain" /\x3e\r\n          \x3c/div\x3e\r\n          \x3clabel for\x3d"extent"\x3e${nls.extent}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"extent" id\x3d"extent" /\x3e\r\n          \x3clabel for\x3d"tileInfo"\x3e${nls.tileInfo}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileInfo" id\x3d"tileInfo" /\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      --\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"errorNode" class\x3d"error-node"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"corner-section"\x3e\r\n    \x3cspan class\x3d"corner-text"\x3e${nls.attachText}\x3c/span\x3e\r\n    \x3cdiv class\x3d"overview-items"\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"tl" data-dojo-attach-point\x3d"top-left"/\x3e\r\n        \x3clabel for\x3d"tl"\x3e${nls.topLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"tr" data-dojo-attach-point\x3d"top-right"/\x3e\r\n        \x3clabel for\x3d"tr"\x3e${nls.topRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"bl" data-dojo-attach-point\x3d"bottom-left"/\x3e\r\n        \x3clabel for\x3d"bl"\x3e${nls.bottomLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"br" data-dojo-attach-point\x3d"bottom-right"/\x3e\r\n        \x3clabel for\x3d"br"\x3e${nls.bottomRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"expandBox"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPickerNode"\x3e\x3c/div\x3e\r\n\r\n  \x3c!-- baseLayerConfig --\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"baseLayerConfigContainer"\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/css/style.css":".jimu-widget-overviewmap-setting{margin:0; padding:0; font-size:14px; color: #596679;}.jimu-widget-overviewmap-setting .hide{display: none !important;}.jimu-widget-overviewmap-setting .corner-section .overview-items{margin-top: 15px; margin-bottom: 30px; overflow: hidden; font-size: 10px;}.jimu-widget-overviewmap-setting .corner-section .overview-item {text-align: center; color: #596679;}.jimu-widget-overviewmap-setting .corner-section .overview-item label {font-size: 14px;}.jimu-widget-overviewmap-setting .corner-section .overview-item:first-child{margin-left: 0;}.jimu-rtl .overview-item:first-child {margin-left: 2em; margin-right: 0;}.jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 1em;}.jimu-rtl .jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 0; margin-right: 1em;}.jimu-widget-overviewmap-setting .corner-section .overview-item-image{position: relative; width: 226px; height: 150px; margin-bottom: 10px;}.jimu-widget-overviewmap-setting .jimu-radio {width: 14px; height: 14px; vertical-align: middle;}.jimu-widget-overviewmap-setting .jimu-radio-inner{width: 8px; height: 8px;}.jimu-widget-overviewmap-setting .overview-item .overview-top-left{background: url(images/topleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-top-right{background: url(images/topright.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-left{background: url(images/bottomleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-right{background: url(images/bottomright.png);}.jimu-widget-overviewmap-setting .baselayer-config{margin-top: 30px;}.jimu-widget-overviewmap-setting .validating{}.jimu-widget-overviewmap-setting .error{}.jimu-widget-overviewmap-setting .baselayer-table{}.jimu-widget-overviewmap-setting .baselayer-table #baseLayerType,.jimu-widget-overviewmap-setting .baselayer-table #VEStyle{min-width: 220px;}.jimu-widget-overviewmap-setting .baselayer-table #baseLayerUrl{min-width: 500px;}.jimu-widget-overviewmap-setting .baselayer-table .input-column{padding: 5px 10px;}.jimu-widget-overviewmap-setting .error-node{font-size: 12px; color: #F00;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/OverviewMap/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/Deferred dojo/_base/lang dojo/on ./BaseLayerConfig jimu/dijit/CheckBox jimu/dijit/RadioBtn".split(" "),function(m,e,n,f,h,r,u,q){return m([e,n],{baseClass:"jimu-widget-overviewmap-setting",_selectedAttachTo:"",postCreate:function(){this.expandBox=new q({label:this.nls.expandText,checked:!1},this.expandBox);this.expandBox.startup();this.own(r(this.topLeftNode,"click",h.hitch(this,function(){this._selectItem("top-left")})));
this.own(r(this.topRightNode,"click",h.hitch(this,function(){this._selectItem("top-right")})));this.own(r(this.bottomLeftNode,"click",h.hitch(this,function(){this._selectItem("bottom-left")})));this.own(r(this.bottomRightNode,"click",h.hitch(this,function(){this._selectItem("bottom-right")})));this.baseLayerConfig=new u({nls:this.nls,config:this.config,map:this.map},this.baseLayerConfigContainer);this.baseLayerConfig.startup()},startup:function(){this.inherited(arguments);this.config.overviewMap||
(this.config.overviewMap={});this.setConfig(this.config)},setConfig:function(e){this.config=e;this.expandBox.setValue(e.overviewMap.visible);this.config.overviewMap.attachTo?this._selectItem(this.config.overviewMap.attachTo):(e="",this.position?void 0!==this.position.top&&void 0!==this.position.left?e=window.isRTL?"top-right":"top-left":void 0!==this.position.top&&void 0!==this.position.right?e=window.isRTL?"top-left":"top-right":void 0!==this.position.bottom&&void 0!==this.position.left?e=window.isRTL?
"bottom-right":"bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(e=window.isRTL?"bottom-left":"bottom-right"):e=window.isRTL?"top-left":"top-right",this._selectItem(e));this.baseLayerConfig.setValues(this.config)},_selectItem:function(e){this[e]&&this[e].setChecked&&this[e].setChecked(!0);this._selectedAttachTo=e},_getSelectedAttachTo:function(){return this._selectedAttachTo},getConfig:function(){var e=new f;this.baseLayerConfig.isValid().then(h.hitch(this,function(f){!1===
f?e.resolve(!1):(this.config.overviewMap.visible=this.expandBox.checked,this.config.overviewMap.attachTo=this._getSelectedAttachTo(),this.config.overviewMap.maximizeButton="maximizeButton"in this.config.overviewMap?this.config.overviewMap.maximizeButton:!0,this.config.overviewMap.baseLayer=this.baseLayerConfig.getValues(this.config),e.resolve(this.config))}));return e}})});