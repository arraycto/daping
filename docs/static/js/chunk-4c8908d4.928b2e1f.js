(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c8908d4"],{"0c63":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["base"===e.compConfig?a("div",{staticStyle:{height:"40px"}},[a("el-button",{staticStyle:{float:"right","margin-right":"30px"},attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:e.addServer}},[e._v("新增 ")])],1):e._e(),"base"===e.compConfig?a("el-collapse",e._l(e.services,(function(t,l){return a("el-collapse-item",{key:t.id},[a("template",{slot:"title"},[a("div",{staticClass:"h-title"},[a("div",{staticStyle:{margin:"5px 10px"}},[e._v(e._s(t.name))]),0!==l?a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"mini",circle:"",icon:"el-icon-delete",type:"danger"},on:{click:function(t){return e.delServer(l)}}}):e._e()],1)]),a("el-form",{attrs:{"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"服务类型"}},[a("el-select",{staticStyle:{width:"80%"},attrs:{size:"mini"},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"server.type"}},e._l([{l:"sm",n:"超图"},{l:"esri",n:"ArcGIS"}],(function(e){return a("el-option",{key:e.l,attrs:{label:e.n,value:e.l}})})),1)],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{readonly:0===l||t.selectedLayers.length>0},model:{value:t.baseUrl,callback:function(a){e.$set(t,"baseUrl",a)},expression:"server.baseUrl"}})],1),a("el-form-item",{attrs:{label:"数据源"}},["sm"===t.type?a("el-input",{staticStyle:{width:"80%"},attrs:{readonly:0===l||t.selectedLayers.length>0},model:{value:t.datasource,callback:function(a){e.$set(t,"datasource",a)},expression:"server.datasource"}}):e._e()],1),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{readonly:0===l||t.selectedLayers.length>0},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"server.name"}})],1),a("el-form-item",{attrs:{label:"支持下钻"}},[a("el-switch",{staticStyle:{width:"80%"},model:{value:t.enableDrill,callback:function(a){e.$set(t,"enableDrill",a)},expression:"server.enableDrill"}})],1),a("el-form-item",{attrs:{label:"下钻字段"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{readonly:0===l||t.selectedLayers.length>0},model:{value:t.drillField,callback:function(a){e.$set(t,"drillField",a)},expression:"server.drillField"}})],1),a("el-form-item",{attrs:{label:"图层"}},[a("el-select",{staticStyle:{width:"80%"},attrs:{size:"mini",multiple:"",clearable:""},on:{change:function(a){return e.processSelected(t)}},model:{value:t.selectedLayers,callback:function(a){e.$set(t,"selectedLayers",a)},expression:"server.selectedLayers"}},e._l(t.layers,(function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name}},[a("span",{staticStyle:{float:"left","font-size":"11px"}},[e._v(e._s(t.name))]),a("span",{staticStyle:{color:"#8492a6","font-size":"11px"}},[e._v("("+e._s(t.type)+")")])])})),1)],1)],1),a("el-table",{attrs:{data:t.selected,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"图层名",width:"90px",align:"center"}}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"50px",align:"center"}}),a("el-table-column",{attrs:{prop:"fields",label:"可用字段",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("el-select",{attrs:{size:"mini",multiple:"",clearable:""},model:{value:l.row.selectedFields,callback:function(t){e.$set(l.row,"selectedFields",t)},expression:"scope.row.selectedFields"}},e._l([{name:"*",alias:"全部",_type:"all"}].concat(l.row.fields),(function(l,i){return a("el-option",{key:i,attrs:{value:l.name,label:l.alias||l.name}},[a("span",{staticStyle:{float:"left","font-size":"11px"}},[e._v(e._s(l.alias||l.name))]),a("span",{staticStyle:{color:"#8492a6","font-size":"11px"}},[e._v("("+e._s(l.name+":"+l._type)+")")]),l.name===t.drillField?a("span",{staticStyle:{color:"#f22","font-size":"11px"}},[e._v("(必选)")]):e._e()])})),1)]}}],null,!0)}),t.enableDrill?a("el-table-column",{attrs:{prop:"index",label:"层级",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"mini","controls-position":"right",min:0,step:1},model:{value:t.row.index,callback:function(a){e.$set(t.row,"index",e._n(a))},expression:"scope.row.index"}})]}}],null,!0)}):e._e()],1)],2)})),1):e._e(),"child"===e.compConfig?a("el-form",{attrs:{size:"mini","label-width":"90px","label-position":"left"}},[a("el-form-item",{attrs:{label:"选择服务"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",size:"mini"},on:{change:e.serviceSelected},model:{value:e.layerEdit.selectedSev,callback:function(t){e.$set(e.layerEdit,"selectedSev",t)},expression:"layerEdit.selectedSev"}},e._l(e.services,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e.layerEdit.serverObj?a("el-form-item",{attrs:{label:"选择图层"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"","multiple-limit":e.layerEdit.serverObj.enableDrill?0:1,clearable:"",size:"mini"},on:{change:e.layerSelected},model:{value:e.layerEdit.selectedLayer,callback:function(t){e.$set(e.layerEdit,"selectedLayer",t)},expression:"layerEdit.selectedLayer"}},e._l(e.layerEdit.serverObj.selected,(function(e,t){return a("el-option",{key:t,attrs:{value:e.name,label:e.alias||e.name}})})),1)],1):e._e(),e.layerEdit.serverObj?a("el-form-item",{attrs:{label:"默认参数"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{size:"mini"},model:{value:e.layerEdit.defaultParams,callback:function(t){e.$set(e.layerEdit,"defaultParams",t)},expression:"layerEdit.defaultParams"}})],1):e._e()],1):e._e(),"base"===e.compConfig?a("div",{staticStyle:{height:"40px","margin-top":"10px"}},[a("el-button",{staticStyle:{float:"right","margin-right":"30px"},attrs:{icon:"el-icon-folder",size:"mini",type:"primary"},on:{click:e.saveDataConf}},[e._v("保存 ")])],1):e._e(),"child"===e.compConfig?a("div",{staticStyle:{height:"40px","margin-top":"10px"}},[a("el-button",{staticStyle:{float:"right","margin-right":"30px"},attrs:{icon:"el-icon-folder",size:"mini",type:"primary"},on:{click:e.saveDataSelect}},[e._v("保存 ")])],1):e._e()],1)},i=[],s=(a("a543"),a("989e"),a("1d7a"),a("9f1b"),a("d211")),r=a("0e0b"),n=a("cf6b"),c=a("785d"),o={name:"gisServer",data:function(){return{service:null,services:[{id:"admin",type:"esri",baseUrl:"http://10.10.50.15:6080/arcgis/rest/services/AdminArea/MapServer/",name:"行政区划",layers:[],enableDrill:!0,drillField:"LCODE",selectedLayers:[],selected:[]}],layerEdit:{selectedSev:"",serverObj:"",selectedLayer:[],layerObj:[],defaultParams:null}}},created:function(){this.init()},computed:Object(s["a"])(Object(s["a"])({},Object(n["c"])({activeComp:"getFirstActiveComp",getCompConf:"getCompConf"})),{},{compConfig:function(){return"baseMap"===this.activeComp.compDef?"base":"themeLayer"===this.activeComp.compType?"child":"not"}}),watch:{"activeComp.compId":{handler:function(){this.init()}}},methods:{init:function(){var e=this.activeComp.compId;if("themeLayer"===this.activeComp.compType){var t=this.activeComp.data.conf.sevLayer;t&&(this.layerEdit=_.cloneDeep(t));var a=this.activeComp.baseId;e=a||e}var l=this.getCompConf(e),i=_.cloneDeep(l.data.conf.services);i&&i.length>0&&(this.services=i);for(var s=0;s<this.services.length;s++)_.isEmpty(this.services[s].baseUrl)||this.getServerLayer(this.services[s])},getServerLayer:function(e){"esri"===e.type?Object(c["a"])(e):"sm"===e.type?Object(c["b"])(e):Object(c["a"])(e)},processSelected:function(e){if(e.selected=[],e&&e.selectedLayers.length>0)for(var t=0;t<e.selectedLayers.length;t++)for(var a=0;a<e.layers.length;a++)if(e.layers[a].name===e.selectedLayers[t]){var l=(e.baseUrl.endsWith("/")?e.baseUrl:e.baseUrl+"/")+e.layers[a].id+"/",i=Object.assign({baseUrl:e.baseUrl,url:l,serverName:e.name,selectedFields:[],index:0},e.layers[a]);e.selected.push(i)}},addServer:function(){this.services.push({id:r["a"].guid(),baseUrl:"",name:"新建GisServer",layers:[],enableDrill:!1,drillField:"",selectedLayers:[],selected:[]})},delServer:function(e){this.services.splice(e,1)},serviceSelected:function(e){if(e)for(var t=0;t<this.services.length;t++)e===this.services[t].id&&(this.layerEdit.serverObj=this.services[t]);else this.layerEdit.serverObj=null},layerSelected:function(e){if(e){this.layerEdit.layerObj=[];for(var t=0;t<this.layerEdit.serverObj.selected.length;t++)-1!==e.indexOf(this.layerEdit.serverObj.selected[t].name)&&this.layerEdit.layerObj.push(this.layerEdit.serverObj.selected[t])}else this.layerEdit.layerObj=[]},saveDataConf:function(){for(var e=0;e<this.services.length;e++)(_.isEmpty(this.services[e].baseUrl)||_.isEmpty(this.services[e].name)||0===this.services[e].selectedLayers.length||0===this.services[e].selected.length)&&this.services.splice(e,1);this.$store.commit("modifyValueByCompId",{attrs:[this.activeComp.compId,"data","conf"],value:{services:_.cloneDeep(this.services)}}),this.$message({type:"success",message:"保存成功"})},saveDataSelect:function(){this.$store.commit("modifyValueByCompId",{attrs:[this.activeComp.compId,"data","conf"],value:{sevLayer:_.cloneDeep(this.layerEdit)}});try{this.$dm.clearErrorMsg(),this.$compsBus.$emit("updateCompData",{compId:this.activeComp.compId,changedLoadedData:!1});var e=this.$dm.getErrorMsg();0!=e.length?this.$alert("加载数据失败。异常信息为"+e,"提示",{confirmButtonText:"确定"}):this.$alert("加载数据成功","提示",{confirmButtonText:"确定"})}catch(t){console.error("error:",t),this.$alert("加载数据失败。异常信息为"+t.message,"提示",{confirmButtonText:"确定"})}}}},d=o,p=(a("1958"),a("5d22")),m=Object(p["a"])(d,l,i,!1,null,"6f0618aa",null);t["default"]=m.exports},1958:function(e,t,a){"use strict";a("daf7")},"785d":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));a("a543"),a("b131"),a("1d7a"),a("402f"),a("0bd5"),a("9f1b"),a("2db5"),a("9b42"),a("6ab7");var l=a("96fa"),i=a("82ae"),s=a.n(i),r=s.a.create({baseURL:"",timeout:5e4});function n(e,t,a,l){return"GET"===l.toUpperCase()?r.get(e,{params:t}):"POST"===l.toUpperCase()?r.post(e,a,{params:t}):void 0}function c(e){n(e.baseUrl,{f:"json"},null,"GET").then((function(t){if(200===t.status){for(var a=t.data.layers,i=[],s=0;s<a.length;s++){var r=e.baseUrl.endsWith("/")?e.baseUrl:e.baseUrl+"/";i.push(n(r+a[s].id,{f:"json"},null,"GET"))}Promise.all(i).then((function(t){for(var i=Object(l["a"])(t),s=i.slice(0),r=0;r<s.length;r++){a[r].svType=e.type;var n=s[r].data.geometryType.replace("esriGeometry","");a[r].type="Polygon"===n?"面":"Polyline"===n?"线":"点",a[r].fields=[];for(var c=0;c<s[r].data.fields.length;c++){var o=s[r].data.fields[c];-1===o.name.toUpperCase().indexOf("OBJECTID")&&"SHAPE"!==o.name.toUpperCase()&&(o._type=o.type.replace("esriFieldType",""),o.columnName=o.name,o.columnDesc=o.alias,o.columnDefDire=2,"String"!==o._type&&"Date"!==o._type&&(o.columnDefDire=1),a[r].fields.push(o))}}e.layers=a}))}}))}function o(e){var t=e.baseUrl.endsWith("/")?e.baseUrl:e.baseUrl+"/",a=t+"datasources/"+e.datasource+"/datasets";n(a+".json",null,null,"GET",{withCredentials:!1}).then((function(i){if(200===i.status){for(var s=i.data.datasetNames,r=[],c=0;c<s.length;c++)r.push(n(a+"/"+s[c]+".json",null,null,"GET",{withCredentials:!1}));Promise.all(r).then((function(i){for(var s=Object(l["a"])(i),r=s.slice(0),c=function(i){var s={svType:e.type,baseUrl:t,fields:[],datasource:e.datasource,index:0,name:r[i].data.datasetInfo.name,selectedFields:[],serverName:e.name,type:null,url:t},c=r[i].data.datasetInfo.type;"REGION"===c?s.type="面":"LINE"===c?s.type="线":"POINT"===c&&(s.type="点");var o=a+"/"+s.name+"/fields.json";n(o,null,null,"GET",{withCredentials:!1}).then((function(t){for(var a=[],i=0;i<t.data.childUriList.length;i++)a.push(n(t.data.childUriList[i]+".json",null,null,"GET",{withCredentials:!1}));Promise.all(a).then((function(t){for(var a=Object(l["a"])(t),i=a.slice(0),r=0;r<i.length;r++){var n=i[r].data.fieldInfo,c={};-1===n.name.indexOf("Sm")&&(c.alias=n.caption,c.name=n.name,c._type=n.type,c.columnName=n.name,c.columnDesc=n.caption,c.columnDefDire=2,"TEXT"!==c._type&&"DATE"!==c._type&&(c.columnDefDire=1),s.fields.push(c))}e.layers.push(s)}))}))},o=0;o<r.length;o++)c(o)}))}}))}r.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)}))},"98f2":function(e,t,a){var l=a("1f17"),i=l("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[i]=!1,"/./"[e](t)}catch(l){}}return!1}},"9f1b":function(e,t,a){"use strict";var l=a("a09b"),i=a("e329").f,s=a("c3a3"),r=a("b203"),n=a("4340"),c=a("98f2"),o=a("67d5"),d="".endsWith,p=Math.min,m=c("endsWith"),u=!o&&!m&&!!function(){var e=i(String.prototype,"endsWith");return e&&!e.writable}();l({target:"String",proto:!0,forced:!u&&!m},{endsWith:function(e){var t=String(n(this));r(e);var a=arguments.length>1?arguments[1]:void 0,l=s(t.length),i=void 0===a?l:p(s(a),l),c=String(e);return d?d.call(t,c,i):t.slice(i-c.length,i)===c}})},b203:function(e,t,a){var l=a("00a5");e.exports=function(e){if(l(e))throw TypeError("The method doesn't accept regular expressions");return e}},daf7:function(e,t,a){}}]);