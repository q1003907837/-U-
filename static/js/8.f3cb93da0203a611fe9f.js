webpackJsonp([8],{"0H0d":function(t,e){},Cd8c:function(t,e){},sEao:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("Dd8w"),n=r.n(o),s=r("2cek"),i={props:["roleList"],methods:{del:function(t){var e=this;this.$myConfirm(function(){e.$http.post("/roledelete",{id:t}).then(function(t){200===t.code?(e.$success(t.msg),e.$emit("updateList")):e.$error(t.msg)})})},edit:function(t){s.a.$emit("sendListData",n()({},t))}}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.roleList}},[r("el-table-column",{attrs:{prop:"id",label:"id",width:"80"}}),t._v(" "),r("el-table-column",{attrs:{prop:"rolename",label:"角色名称",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v("正常")]):r("el-tag",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{circle:"",type:"success",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return t.edit(e.row)}}}),t._v(" "),r("el-button",{attrs:{circle:"",type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.del(e.row.id)}}})]}}])})],1)},staticRenderFns:[]};var l=r("VU/8")(i,a,!1,function(t){r("Cd8c")},null,null).exports,u=r("NYxO"),c={props:["info"],created:function(){var t=this;this.getMenuListAction(),s.a.$on("sendListData",function(e){t.formData=e,t.info.isShow=!0,setTimeout(function(){t.$refs.treeRef.setCheckedKeys(t.formData.menus.split(","))},100)})},computed:n()({},Object(u.c)({menuList:function(t){return t.menu.menuList}})),data:function(){var t=this;return{isShow:!0,defaultProps:{children:"children",label:"title"},formData:{id:0,rolename:"",status:"",menus:""},rules:{rolename:{required:!0,message:"请输入角色名称",trigger:"blur"},status:{required:!0,message:"请选择状态",trigger:"blur"},menus:{validator:function(e,r,o){if(t.$refs.treeRef.getCheckedKeys().length<=0)return o(new Error("请选择操作权限"));o()},trigger:"blur"}}}},methods:n()({},Object(u.b)("menu",["getMenuListAction"]),{submit:function(){var t=this;this.$refs.formRef.validate(function(e){if(e){var r=t.$refs.treeRef.getCheckedKeys().join(",");t.formData.menus=r;var o=t.formData.id>0?"/roleedit":"/roleadd";t.$http.post(o,t.formData).then(function(e){if(200===e.code)return t.$success(e.msg),t.$emit("updateList"),t.reset(),!1;t.$error(e.msg)})}})},reset:function(){this.formData={rolename:"",status:"",menus:""},this.$refs.treeRef.setCheckedKeys([]),this.info.isShow=!1}})},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:t.formData.id>0?"编辑":"新增",visible:t.info.isShow},on:{close:t.reset,"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[r("el-form",{ref:"formRef",attrs:{"label-width":"80px",model:t.formData,rules:t.rules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"rolename"}},[r("el-input",{attrs:{placeholder:"角色名称"},model:{value:t.formData.rolename,callback:function(e){t.$set(t.formData,"rolename",e)},expression:"formData.rolename"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色权限",prop:"menus"}},[r("el-tree",{ref:"treeRef",attrs:{data:t.menuList,"show-checkbox":"","node-key":"id","default-expand-all":"",props:t.defaultProps}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色状态",prop:"status"}},[r("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[r("el-radio",{attrs:{label:1}},[t._v("正常")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("禁用")])],1)],1)],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.reset}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var d={components:{List:l,Modal:r("VU/8")(c,f,!1,function(t){r("0H0d")},null,null).exports},computed:n()({},Object(u.c)({roleList:function(t){return t.role.roleList}})),methods:n()({},Object(u.b)("role",["getRoleListAction"]),{updateList:function(){this.getRoleListAction()}}),created:function(){this.getRoleListAction()},data:function(){return{info:{isShow:!1}}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){t.info.isShow=!t.info.isShow}}},[t._v("新增")]),t._v(" "),r("el-divider"),t._v(" "),r("List",{attrs:{roleList:t.roleList},on:{updateList:t.updateList}}),t._v(" "),r("Modal",{attrs:{info:t.info},on:{updateList:t.updateList}})],1)},staticRenderFns:[]};var p=r("VU/8")(d,m,!1,function(t){r("vMT/")},null,null);e.default=p.exports},"vMT/":function(t,e){}});
//# sourceMappingURL=8.f3cb93da0203a611fe9f.js.map