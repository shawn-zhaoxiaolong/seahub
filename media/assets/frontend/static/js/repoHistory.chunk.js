(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[13],{1261:function(e,t,a){e.exports=a(1311)},1262:function(e,t,a){},1311:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(6),r=a(8),o=a(7),l=a(0),s=a.n(l),c=a(23),m=a.n(c),u=a(16),g=a(12),p=a.n(g),b=a(4),d=a(1),h=a(9),f=a(15),O=a(34),E=a(18),D=a(42),v=a(255),j=a(3),P=a(192),w=a.n(P),y=a(10),C=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleInputChange=function(e){i.setState({inputValue:e})},i.formSubmit=function(){var e=i.state.inputValue.map((function(e,t){return e.value})).join(","),t=i.props,a=t.repoID,n=t.commitID;i.setState({submitBtnDisabled:!0}),h.a.updateRepoCommitLabels(a,n,e).then((function(e){i.props.updateCommitLabels(e.data.revisionTags.map((function(e,t){return e.tag}))),i.props.toggleDialog(),y.a.success(Object(d.nb)("Successfully edited labels."))})).catch((function(e){var t=b.a.getErrorMsg(e);i.setState({formErrorMsg:t,submitBtnDisabled:!1})}))},i.state={inputValue:i.props.commitLabels.map((function(e,t){return{label:e,value:e}})),submitBtnDisabled:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.formErrorMsg;return s.a.createElement(j.x,{isOpen:!0,centered:!0,toggle:this.props.toggleDialog},s.a.createElement(j.A,{toggle:this.props.toggleDialog},Object(d.nb)("Edit labels")),s.a.createElement(j.y,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{defaultValue:this.props.commitLabels.map((function(e,t){return{label:e,value:e}})),isMulti:!0,onChange:this.handleInputChange,placeholder:""}),e&&s.a.createElement("p",{className:"error m-0 mt-2"},e))),s.a.createElement(j.z,null,s.a.createElement("button",{className:"btn btn-primary",disabled:this.state.submitBtnDisabled,onClick:this.formSubmit},Object(d.nb)("Submit"))))}}]),a}(s.a.Component),L=(a(94),a(107),a(1262),window.app.pageOptions),M=L.repoID,N=L.repoName,k=L.userPerm,x=L.showLabel,S=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).getItems=function(e){h.a.getRepoHistory(M,e,i.state.perPage).then((function(t){i.setState({isLoading:!1,currentPage:e,items:t.data.data,hasNextPage:t.data.more})})).catch((function(e){i.setState({isLoading:!1,errorMsg:b.a.getErrorMsg(e,!0)})}))},i.resetPerPage=function(e){i.setState({perPage:e},(function(){i.getItems(1)}))},i.onSearchedClick=function(e){if(!0===e.is_dir){var t=d.jc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(u.c)(t,{repalce:!0})}else{var a=d.jc+"lib/"+e.repo_id+"/file"+b.a.encodePath(e.path);window.open("about:blank").location.href=a}},i.goBack=function(e){e.preventDefault(),window.history.back()},i.state={isLoading:!0,errorMsg:"",currentPage:1,perPage:25,hasNextPage:!1,items:[]},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location).searchParams,a=this.state,n=a.currentPage,i=a.perPage;this.setState({perPage:parseInt(t.get("per_page")||i),currentPage:parseInt(t.get("page")||n)},(function(){e.getItems(e.state.currentPage)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"h-100 d-flex flex-column"},s.a.createElement("div",{className:"top-header d-flex justify-content-between"},s.a.createElement("a",{href:d.jc},s.a.createElement("img",{src:d.Kb+d.Fb,height:d.Eb,width:d.Gb,title:d.kc,alt:"logo"})),s.a.createElement(D.a,{onSearchedClick:this.onSearchedClick})),s.a.createElement("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-10 offset-md-1"},s.a.createElement("h2",{dangerouslySetInnerHTML:{__html:b.a.generateDialogTitle(Object(d.nb)("{placeholder} Modification History"),N)}}),s.a.createElement("a",{href:"#",className:"go-back",title:Object(d.nb)("Back"),onClick:this.goBack},s.a.createElement("span",{className:"fas fa-chevron-left"})),"rw"==k&&s.a.createElement("p",{className:"tip"},Object(d.nb)("Tip: a snapshot will be generated after modification, which records the library state after the modification.")),s.a.createElement(I,{isLoading:this.state.isLoading,errorMsg:this.state.errorMsg,items:this.state.items,currentPage:this.state.currentPage,hasNextPage:this.state.hasNextPage,curPerPage:this.state.perPage,resetPerPage:this.resetPerPage,getListByPage:this.getItems}))))))}}]),a}(s.a.Component),I=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).getPreviousPage=function(){i.props.getListByPage(i.props.currentPage-1)},i.getNextPage=function(){i.props.getListByPage(i.props.currentPage+1)},i.theadData=x?[{width:"43%",text:Object(d.nb)("Description")},{width:"12%",text:Object(d.nb)("Time")},{width:"9%",text:Object(d.nb)("Modifier")},{width:"12%",text:"".concat(Object(d.nb)("Device")," / ").concat(Object(d.nb)("Version"))},{width:"12%",text:Object(d.nb)("Labels")},{width:"12%",text:""}]:[{width:"43%",text:Object(d.nb)("Description")},{width:"15%",text:Object(d.nb)("Time")},{width:"15%",text:Object(d.nb)("Modifier")},{width:"15%",text:"".concat(Object(d.nb)("Device")," / ").concat(Object(d.nb)("Version"))},{width:"12%",text:""}],i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.errorMsg,n=e.items,i=e.curPerPage,r=e.currentPage,o=e.hasNextPage;return t?s.a.createElement(f.a,null):a?s.a.createElement("p",{className:"error mt-6 text-center"},a):s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{className:"table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,this.theadData.map((function(e,t){return s.a.createElement("th",{key:t,width:e.width},e.text)})))),s.a.createElement("tbody",null,n.map((function(e,t){return e.isFirstCommit=1==r&&0==t,e.showDetails=o||t!=n.length-1,s.a.createElement(_,{key:t,item:e})})))),s.a.createElement(O.a,{gotoPreviousPage:this.getPreviousPage,gotoNextPage:this.getNextPage,currentPage:r,hasNextPage:o,curPerPage:i,resetPerPage:this.props.resetPerPage}))}}]),a}(s.a.Component),_=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleMouseOver=function(){i.setState({isIconShown:!0})},i.handleMouseOut=function(){i.setState({isIconShown:!1})},i.showCommitDetails=function(e){e.preventDefault(),i.setState({isCommitDetailsDialogOpen:!i.state.isCommitDetailsDialogOpen})},i.toggleCommitDetailsDialog=function(){i.setState({isCommitDetailsDialogOpen:!i.state.isCommitDetailsDialogOpen})},i.editLabel=function(){i.setState({isCommitLabelUpdateDialogOpen:!i.state.isCommitLabelUpdateDialogOpen})},i.toggleLabelEditDialog=function(){i.setState({isCommitLabelUpdateDialogOpen:!i.state.isCommitLabelUpdateDialogOpen})},i.updateLabels=function(e){i.setState({labels:e})},i.state={labels:i.props.item.tags,isIconShown:!1,isCommitLabelUpdateDialogOpen:!1,isCommitDetailsDialogOpen:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state,a=t.isIconShown,n=t.isCommitLabelUpdateDialogOpen,i=t.isCommitDetailsDialogOpen,r=t.labels,o="";return o=e.email?e.second_parent_id?Object(d.nb)("None"):s.a.createElement("a",{href:"".concat(d.jc,"profile/").concat(encodeURIComponent(e.email),"/")},e.name):Object(d.nb)("Unknown"),s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},s.a.createElement("td",null,e.description,e.showDetails&&s.a.createElement("a",{href:"#",className:"details",onClick:this.showCommitDetails},Object(d.nb)("Details"))),s.a.createElement("td",{title:p()(e.time).format("LLLL")},p()(e.time).format("YYYY-MM-DD")),s.a.createElement("td",null,o),s.a.createElement("td",null,e.client_version?"".concat(e.device_name," / ").concat(e.client_version):"API / --"),x&&s.a.createElement("td",null,r.map((function(e,t){return s.a.createElement("span",{key:t,className:"commit-label"},e)})),"rw"==k&&s.a.createElement("span",{className:"attr-action-icon fa fa-pencil-alt ".concat(a?"":"invisible"),title:Object(d.nb)("Edit"),onClick:this.editLabel})),s.a.createElement("td",null,"rw"==k&&(e.isFirstCommit?s.a.createElement("span",{className:a?"":"invisible"},Object(d.nb)("Current Version")):s.a.createElement("a",{href:"".concat(d.jc,"repo/").concat(M,"/snapshot/?commit_id=").concat(e.commit_id),className:a?"":"invisible"},Object(d.nb)("View Snapshot"))))),i&&s.a.createElement(E.a,null,s.a.createElement(v.a,{repoID:M,commitID:e.commit_id,commitTime:e.time,toggleDialog:this.toggleCommitDetailsDialog})),n&&s.a.createElement(E.a,null,s.a.createElement(C,{repoID:M,commitID:e.commit_id,commitLabels:r,updateCommitLabels:this.updateLabels,toggleDialog:this.toggleLabelEditDialog})))}}]),a}(s.a.Component);m.a.render(s.a.createElement(S,null),document.getElementById("wrapper"))},255:function(e,t,a){"use strict";var n=a(5),i=a(6),r=a(8),o=a(7),l=a(0),s=a.n(l),c=a(3),m=a(12),u=a.n(m),g=a(1),p=a(9),b=a(4),d=a(15),h=(a(430),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={isLoading:!0,errorMsg:""},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.repoID,n=t.commitID;p.a.getCommitDetails(a,n).then((function(t){e.setState({isLoading:!1,errorMsg:"",commitDetails:t.data})})).catch((function(t){var a=b.a.getErrorMsg(t);e.setState({isLoading:!1,errorMsg:a})}))}},{key:"render",value:function(){var e=this.props,t=e.toggleDialog;e.commitTime;return s.a.createElement(c.x,{isOpen:!0,centered:!0,toggle:t},s.a.createElement(c.A,{toggle:t},Object(g.nb)("Modification Details")),s.a.createElement(c.y,null,s.a.createElement("p",{className:"small"},u()(this.props.commitTime).format("YYYY-MM-DD HH:mm:ss")),s.a.createElement(f,{data:this.state})))}}]),a}(s.a.Component)),f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderDetails=function(e){for(var t=[{type:"new",title:Object(g.nb)("New files")},{type:"removed",title:Object(g.nb)("Deleted files")},{type:"renamed",title:Object(g.nb)("Renamed or Moved files")},{type:"modified",title:Object(g.nb)("Modified files")},{type:"newdir",title:Object(g.nb)("New directories")},{type:"deldir",title:Object(g.nb)("Deleted directories")}],a=!0,n=0,i=t.length;n<i;n++)if(e[t[n].type].length){a=!1;break}return a?s.a.createElement("p",null,e.cmt_desc):s.a.createElement(s.a.Fragment,null,t.map((function(t,a){if(e[t.type].length)return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement("h6",null,t.title),s.a.createElement("ul",null,e[t.type].map((function(e,t){return s.a.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e},className:"commit-detail-item"})}))))})))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.isLoading,a=e.errorMsg,n=e.commitDetails;return t?s.a.createElement(d.a,null):a?s.a.createElement("p",{className:"error mt-4 text-center"},a):this.renderDetails(n)}}]),a}(s.a.Component);t.a=h},430:function(e,t,a){}},[[1261,1,0]]]);
//# sourceMappingURL=repoHistory.chunk.js.map