(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[32],{1257:function(e,t,n){e.exports=n(1258)},1258:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(6),c=n(8),o=n(7),i=n(0),s=n.n(i),u=n(23),l=n.n(u),f=n(9),d=n(1),h=n(130),m=n(104),p=n(15),b=(n(429),window.app.pageOptions),g=b.repoID,v=b.filePath,O=b.err,E=b.commitID,j=b.fileType,w=b.fileName,k=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement(h.a,{content:s.a.createElement(L,null)})}}]),n}(s.a.Component),L=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setIframeHeight=function(e){var t=e.currentTarget;t.height=t.contentDocument.body.scrollHeight},r.state={isLoading:!O,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!O){!function t(){f.a.queryOfficeFileConvertStatus(g,E,v,j.toLowerCase()).then((function(n){switch(n.data.status){case"QUEUED":case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(d.nb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""})}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(d.nb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(d.nb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return O?s.a.createElement(m.a,null):t?s.a.createElement(p.a,null):n?s.a.createElement(m.a,{errorMsg:n}):s.a.createElement("div",{className:"file-view-content flex-1 spreadsheet-file-view"},s.a.createElement("iframe",{id:"spreadsheet-container",title:w,src:"".concat(d.jc,"office-convert/static/").concat(g,"/").concat(E).concat(encodeURIComponent(v),"/index.html"),onLoad:this.setIframeHeight}))}}]),n}(s.a.Component);l.a.render(s.a.createElement(k,null),document.getElementById("wrapper"))},429:function(e,t,n){}},[[1257,1,0]]]);
//# sourceMappingURL=viewFileSpreadsheet.chunk.js.map