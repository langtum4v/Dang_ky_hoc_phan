(this["webpackJsonpdkhp-uit-react"]=this["webpackJsonpdkhp-uit-react"]||[]).push([[11],{365:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var n=a(187),l=a(186),i=a(208),r=a(0),o=a.n(r),c=a(64),d=a(169),u=a(337),h=a.n(u),m=a(231),s=a.n(m),f=a(44),p=a(412),b=a(157),v=a(421),T=a(424),g=a(427),N=a(354),C=a.n(N),E=a(355),O=a.n(E);var w=function(){var e=Object(c.b)(),t=Object(c.c)(d.g),a=Object(c.c)(d.m),n=Object(c.c)(d.f),l=Object(c.c)(d.d);return o.a.createElement(p.a,{container:!0,spacing:2,style:{marginBottom:10}},o.a.createElement(p.a,{item:!0,xs:4},o.a.createElement(b.a,{title:"Copy paste t\u1eeb https://daa.uit.edu.vn/content/chuong-trinh-dao-tao-tu-khoa-7-tro-di"},o.a.createElement(v.a,{label:"C\xe1c m\xe3 m\xf4n h\u1ecdc",placeholder:"IT004 IT005 IT006 EN006 SS004 IT008",fullWidth:!0,size:"small",variant:"outlined",value:t,onChange:function(t){return e(Object(f.f)(t.target.value))}}))),o.a.createElement(p.a,{item:!0,xs:4},o.a.createElement(b.a,{title:"K\u1ebft qu\u1ea3 t\u1eeb \xf4 input b\xean tr\xean"},o.a.createElement(v.a,{label:"C\xe1c m\xe3 m\xf4n h\u1ecdc \u0111\u01b0\u1ee3c l\u1ecdc ra",disabled:!0,fullWidth:!0,size:"small",variant:"outlined",value:(null===l||void 0===l?void 0:l.length)>0?l.join(" "):"Ch\u01b0a c\xf3 m\xe3 m\xf4n h\u1ecdc n\xe0o \u0111\u01b0\u1ee3c l\u1ecdc ra"}))),o.a.createElement(p.a,{item:!0,xs:4},o.a.createElement(T.a,{multiple:!0,options:a,disableCloseOnSelect:!0,value:n,onChange:function(t,a){return e(Object(f.e)(a))},fullWidth:!0,size:"small",limitTags:2,renderOption:function(e,t){var a=t.selected;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{icon:o.a.createElement(C.a,{fontSize:"small"}),checkedIcon:o.a.createElement(O.a,{fontSize:"small"}),style:{marginRight:8},checked:a}),e)},renderInput:function(e){return o.a.createElement(v.a,Object.assign({},e,{variant:"outlined",label:"H\u1ec7 \u0111\xe0o t\u1ea1o",placeholder:"L\u1ecdc theo h\u1ec7 \u0111\xe0o t\u1ea1o"}))}})))},j=a(236),H=a(356),S=(a(365),function(e,t){return e.MaLop+e.Thu+e.Tiet===t.MaLop+t.Thu+t.Tiet}),M={resizable:!0,autoHeight:!0},y=[{headerName:"L\u1eccC",field:"pinned",width:100,pinned:"left",filter:!0},{headerName:"M\xc3 MH",field:"MaMH",width:100,hide:!0},{headerName:"T\xcaN M\xd4N H\u1eccC",field:"TenMH",width:250,pinned:"left",filter:!0},{headerName:"M\xc3 L\u1edaP",field:"MaLop",width:180,checkboxSelection:!0,filter:!0},{headerName:"M\xc3 GI\u1ea2NG VI\xcaN",field:"MaGV",width:150,hide:!0},{headerName:"T\xcaN GI\u1ea2NG VI\xcaN",field:"TenGV",width:250,filter:!0},{headerName:"S\u1ed0 TC",field:"SoTc",width:85,filter:!0},{headerName:"TH\u1ee8",field:"Thu",width:75,filter:!0},{headerName:"TI\u1ebeT",field:"Tiet",width:80},{headerName:"H\u1ec6 \u0110T",field:"HeDT",width:90},{headerName:"KHOA QL",field:"KhoaQL",width:110,filter:!0},{headerName:"HTGD",field:"HTGD",width:85},{headerName:"TH\u1ef0C H\xc0NH",field:"ThucHanh",width:130,hide:!0},{headerName:"C\xc1CH TU\u1ea6N",field:"CachTuan",width:125},{headerName:"S\u1ec8 S\u1ed0",field:"SiSo",width:80},{headerName:"PH\xd2NG H\u1eccC",field:"PhongHoc",width:130},{headerName:"KH\xd3A H\u1eccC",field:"KhoaHoc",width:120,hide:!0},{headerName:"H\u1eccC K\u1ef2",field:"HocKy",width:100,hide:!0},{headerName:"N\u0102M H\u1eccC",field:"NamHoc",width:110,hide:!0},{headerName:"NBD",field:"NBD",width:110},{headerName:"NKT",field:"NKT",width:110},{headerName:"GHI CH\xda",field:"GhiChu"},{headerName:"NG\xd4N NG\u1eee",field:"NgonNgu",width:120}],L=a(210),D=a.n(L),I=a(413);var k=function(e){var t=e.rowData,a=e.setIsDialogOpen,i=e.setLopTrungTkb,r=Object(c.b)(),u=Object(c.c)(d.k),h=Object(c.c)(d.a),m=Object(c.c)(d.b),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,t=Object(c.b)(),a=Object(I.a)((function(e){var a=e.columnApi;t(Object(f.b)(a.getColumnState()))}),e),l=Object(n.a)(a,1),i=l[0];return{debouncedStoreColumnState:i}}().debouncedStoreColumnState;return o.a.createElement("div",{className:"ag-theme-alpine",style:{height:"84vh",fontFamily:"inherit"}},o.a.createElement(H.AgGridReact,{columnDefs:y,defaultColDef:M,rowData:t,headerHeight:30,animateRows:!0,rowSelection:"multiple",rowMultiSelectWithClick:!0,rowClassRules:{"pinned-odd-row":'data.pinned === "L\u1ecdc" && data.color & 1',"pinned-even-row":'data.pinned === "L\u1ecdc" && !(data.color & 1)',"unpinned-odd-row":'data.pinned === "T\u1ef1 do" && data.color & 1',"unpinned-even-row":'data.pinned === "T\u1ef1 do" && !(data.color & 1)'},onRowSelected:function(e){if(!e.node.isSelected()||!u.find((function(t){return S(t,e.data)})))if(e.node.isSelected()){var t,n=u.filter((function(t){return"*"!==e.data.Thu&&t.Thu===e.data.Thu})),o=Object(j.a)(n);try{for(o.s();!(t=o.n()).done;){var c=t.value,d=e.data.Tiet.split(""),h=c.Tiet.split(""),m=[].concat(Object(l.a)(d),Object(l.a)(h));if(m.length!==D()(m).length)return i({master:e.data,slave:c}),a(!0),void e.node.setSelected(!1)}}catch(s){o.e(s)}finally{o.f()}r(Object(f.h)(e.api.getSelectedRows()))}else r(Object(f.h)(e.api.getSelectedRows()))},onGridReady:function(e){h&&(e.columnApi.setColumnState(h),e.api.setFilterModel(m)),u.length&&e.api.forEachNode((function(e){u.find((function(t){return S(t,e.data)}))&&e.setSelected(!0,!1,!0)}))},onFilterChanged:function(e){var t=e.api;return r(Object(f.c)(t.getFilterModel()))},onColumnVisible:s,onColumnPinned:s,onColumnResized:s,onColumnMoved:s,onColumnValueChanged:s,suppressDragLeaveHidesColumns:!0,suppressColumnVirtualisation:!0}))},G=a(165);var K=function(e){var t=e.rowCount,a=Object(c.c)(d.l);return o.a.createElement(G.a,{mt:1,display:"flex",justifyContent:"space-between"},o.a.createElement(v.a,{disabled:!0,size:"small",variant:"standard",value:"S\u1ed1 d\xf2ng: "+t}),o.a.createElement(b.a,{title:a<14?"Ch\u01b0a \u0111\u1ea1t s\u1ed1 TC quy \u0111\u1ecbnh: 14":a>24?"V\u01b0\u1ee3t qu\xe1 s\u1ed1 TC quy \u0111\u1ecbnh: 24":"S\u1ed1 TC quy \u0111\u1ecbnh l\xe0 14-24"},o.a.createElement(v.a,{size:"small",variant:"standard",value:"S\u1ed1 t\xedn ch\u1ec9: "+a,InputProps:{readOnly:!0,style:{fontWeight:"500",color:"".concat(a<14||a>24?"red":"green")}}})))},R=a(414),z=a(415),V=a(366),x=a.n(V),W=a(416),q=a(417),A=a(418),F=a(410);var P=function(e){var t,a,n,l,i,r,c=e.isDialogOpen,d=e.setIsDialogOpen,u=e.lopTrungTkb;return o.a.createElement(R.a,{open:c,onClose:function(){return d(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(z.a,{id:"alert-dialog-title",color:"error"},o.a.createElement(G.a,{display:"flex",alignItems:"center"},o.a.createElement(x.a,{color:"error",style:{marginRight:10}})," Tr\xf9ng th\u1eddi kh\xf3a bi\u1ec3u")),o.a.createElement(W.a,null,o.a.createElement(q.a,{id:"alert-dialog-description"},"Kh\xf4ng th\u1ec3 ch\u1ecdn l\u1edbp ",o.a.createElement("br",null),o.a.createElement("b",null,null===(t=u.master)||void 0===t?void 0:t.MaLop)," -"," ",o.a.createElement("b",null,"Th\u1ee9 ",null===(a=u.master)||void 0===a?void 0:a.Thu," Ti\u1ebft ",null===(n=u.master)||void 0===n?void 0:n.Tiet),o.a.createElement("br",null),"v\xec b\u1ecb tr\xf9ng l\u1ecbch v\u1edbi l\u1edbp \u0111\xe3 ch\u1ecdn ",o.a.createElement("br",null),o.a.createElement("b",null,null===(l=u.slave)||void 0===l?void 0:l.MaLop)," -"," ",o.a.createElement("b",null,"Th\u1ee9 ",null===(i=u.slave)||void 0===i?void 0:i.Thu," Ti\u1ebft ",null===(r=u.slave)||void 0===r?void 0:r.Tiet),o.a.createElement("br",null))),o.a.createElement(A.a,null,o.a.createElement(F.a,{onClick:function(){return d(!1)},color:"primary",children:"\u0110\xe3 hi\u1ec3u"})))};t.default=function(e){var t=Object(c.c)(d.e),a=Object(c.c)(d.d),r=Object(c.c)(d.f),u=o.a.useMemo((function(){var e=r.length>0?t.filter((function(e){return e.LaMonChung||r.includes(e.HeDT)})):t,n=h()(e,["KhoaQL","MaLop","Thu","Tiet"]),o=s()(n,(function(e){return a.includes(e.MaMH)}));return o[0]=o[0].map((function(e){return Object(i.a)({},e,{pinned:"L\u1ecdc"})})),o.flat().reduce((function(e,t,a){if(0===a)return[Object(i.a)({},t,{color:0})];var n=e[a-1];return t=t.MaMH===n.MaMH?Object(i.a)({},t,{color:n.color}):Object(i.a)({},t,{color:n.color+1}),[].concat(Object(l.a)(e),[t])}),[])}),[t,a,r]),m=o.a.useState(!1),f=Object(n.a)(m,2),p=f[0],b=f[1],v=o.a.useState({master:null,slave:null}),T=Object(n.a)(v,2),g=T[0],N=T[1];return o.a.createElement("div",{style:{minWidth:"100%"}},o.a.createElement(w,null),o.a.createElement(k,{rowData:u,setIsDialogOpen:b,setLopTrungTkb:N}),o.a.createElement(K,{rowCount:u.length})," ",o.a.createElement(P,{isDialogOpen:p,lopTrungTkb:g,setIsDialogOpen:b}))}}}]);