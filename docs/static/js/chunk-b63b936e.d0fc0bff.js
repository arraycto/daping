(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b63b936e"],{"15ec":function(t,e,a){"use strict";a("5afb")},"38ab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"iconUI group-wrapper"},[a("div",{staticClass:"styleProp group-title"},[a("span",{class:t.fold?"text":"text close",on:{click:t.openOrClose}},[t._v(t._s(t.styleObj.name))]),t.styleObj.show?a("div",{staticClass:"show-btn"},[a("el-switch",{attrs:{value:t.isChecked,size:"small"},on:{change:t.changeChecked}}),a("span",{staticClass:"after-text"},[t._v(t._s(t.showName))])],1):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.fold,expression:"fold"}],staticClass:"box"},[t._l(t.children,(function(e,s){return a("div",{key:s,staticClass:"group-item"},[a("hr",{directives:[{name:"show",rawName:"v-show",value:t.showFun(e),expression:"showFun(val)"}],staticClass:"separate-line"}),a(e.type,{directives:[{name:"show",rawName:"v-show",value:t.showFun(e),expression:"showFun(val)"}],tag:"component",attrs:{styleObj:e}})],1)})),a("hr",{staticClass:"separate-line group-item"}),a("div",{staticClass:"styleProp group-item",staticStyle:{height:"auto"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.getCompData,border:"",size:"mini"}},[a("el-table-column",{attrs:{label:"id",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row[t.fieldMap.id])+" ")]}}])}),a("el-table-column",{attrs:{label:"指标名","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row[t.fieldMap.name])+" ")]}}])}),a("el-table-column",{attrs:{label:"图标",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticClass:"icon",attrs:{src:t.iconData[e.row[t.fieldMap.id]],alt:""}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-upload",{staticClass:"icon-uploader",attrs:{action:t.serverUrl,"show-file-list":!1,"before-upload":t.beforeUpload,"on-success":t.uploadSuccess,"on-error":t.uploadError}},[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.getId(e.row[t.fieldMap.id])}}},[t._v("上传")])],1),t.iconData[e.row[t.fieldMap.id]]?a("el-button",{staticClass:"delete-btn",attrs:{type:"text",size:"mini"},on:{click:function(a){return t.deleteIcon(e.row[t.fieldMap.id])}}},[t._v("删除")]):t._e()]}}])})],1)],1)],2)])},i=[],o=(a("a543"),a("fae2"),a("d211")),n=a("4d70"),l=a("0e0b"),c=a("cf6b"),r={name:"iconUI",props:["styleObj"],data:function(){return{fold:!0,children:[],iconData:{},id:""}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])({activeComp:"getFirstActiveComp"})),{},{isChecked:function(){var t=Object(n["b"])(this.getValue("flag"));return t},showName:function(){return this.styleObj.showName?this.styleObj.showName:"显示"},getStyle:function(){return this.activeComp.style},fieldMap:function(){return this.getStyle.fieldMap},serverUrl:function(){return l["a"].getServelURL()+"confStore/uploadimg"},getCompData:function(){var t=this.$store.getters.getCompData(this.activeComp.compId),e=[];return e="static"!=this.activeComp.data.datasource.type?t[0]||[]:t||[],e}}),created:function(){},mounted:function(){-1!=Object.keys(this.styleObj).indexOf("fold")&&(this.fold=this.styleObj["fold"]),this.children=[{name:"宽度",type:n["a"].NUMBER,value:this.getValue("width"),min:0},{name:"高度",type:n["a"].NUMBER,value:this.getValue("height"),min:0}],this.iconData=_.cloneDeep(Object(n["b"])(this.getValue("iconData")))},methods:{openOrClose:function(){this.fold=!this.fold},getValue:function(t){return this.styleObj.value+" "+t},changeChecked:function(t){Object(n["d"])(this.getValue("flag"),t)},showFun:function(t){return l["a"].showFun(t,this.getStyle)},getId:function(t){this.id=t},beforeUpload:function(t){var e=t.size/1024/1024<=.1;return!!e||(this.$message.error("上传图片大小不能超过 100KB!"),!1)},uploadSuccess:function(t,e){200==t.code&&(this.$set(this.iconData,this.id,t.data),Object(n["d"])(this.getValue("iconData"),_.cloneDeep(this.iconData)))},uploadError:function(t,e,a){this.$message.error("上传失败！")},deleteIcon:function(t){this.$delete(this.iconData,t),Object(n["d"])(this.getValue("iconData"),_.cloneDeep(this.iconData))}}},u=r,d=(a("15ec"),a("5d22")),h=Object(d["a"])(u,s,i,!1,null,"06ba1d0d",null);e["default"]=h.exports},"5afb":function(t,e,a){}}]);