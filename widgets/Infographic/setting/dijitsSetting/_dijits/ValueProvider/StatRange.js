// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/Evented dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./FieldStatistics ./StatisticDataSourceSelector dijit/form/RadioButton dijit/form/Select dijit/form/NumberTextBox".split(" "),function(d,e,c,f,g,h,k,l){return d([f,g,h,e],{baseClass:"infograpgic-stat-range",templateString:"\x3cdiv\x3e\x3c/div\x3e",postCreate:function(){this.inherited(arguments);this._initUI()},reset:function(){this.fieldStat&&this.fieldStat.reset();this.statDataSource&&
this.statDataSource.reset()},setConfig:function(a){var b=a.statistic;(a=a&&a.sourceID)&&this.statDataSource.setCurrentSourceID(a);this.fieldStat&&b&&this.fieldStat.setConfig(b)},triggerChange:function(){this.statDataSource&&this.statDataSource.triggerChange()},updateFetchState:function(a){this.statDataSource&&this.statDataSource.updateFetchState(a)},getConfig:function(){if(!this.isValid())return!1;var a={};a.sourceID=this.statDataSource.getCurrentSourceID();a.sourceLabel=this.statDataSource.getCurrentSourceLabel();
a.statistic=this.fieldStat.getConfig();return a},isValid:function(){return this.statDataSource.isValid()&&this.fieldStat.isValid()},_initUI:function(){this.statDataSource=new l({nls:this.nls,appConfig:this.appConfig});this.statDataSource.placeAt(this.domNode);this.own(c(this.statDataSource,"change",function(a){this._onDataSourceChanged(a)}.bind(this)));this.fieldStat=new k({nls:this.nls});this.fieldStat.placeAt(this.domNode);this.own(c(this.fieldStat,"change",function(){this._onChange()}.bind(this)))},
setLayerDefinition:function(a){a&&this.fieldStat&&this.fieldStat.setLayerDefinition(a)},_onDataSourceChanged:function(a){var b=a.definition;a=a.sourceID;this.fieldStat&&(this.fieldStat.reset(),this.fieldStat.setLayerDefinition(b));this.emit("ds-change",a)},_onChange:function(){this.isValid()&&this.emit("change")}})});