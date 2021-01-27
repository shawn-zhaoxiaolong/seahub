(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[12],{1265:function(e,t,a){e.exports=a(1313)},1266:function(e,t,a){},1313:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),o=a(26),l=a(8),c=a(7),s=a(0),i=a.n(s),m=a(23),d=a.n(m),u=a(16),h=a(12),b=a.n(h),p=a(4),f=a(1),g=a(9),E=a(15),O=a(18),j=a(10),v=a(42),D=a(3),k=a(192),M=a.n(k),S=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleInputChange=function(e){r.setState({inputValue:e})},r.formSubmit=function(){var e=r.state.inputValue,t=r.props.repoID;r.setState({submitBtnDisabled:!0}),g.a.deleteRepoTrash(t,e.value).then((function(e){j.a.success(Object(f.nb)("Clean succeeded.")),r.props.refreshTrash(),r.props.toggleDialog()})).catch((function(e){var t=p.a.getErrorMsg(e);r.setState({formErrorMsg:t,submitBtnDisabled:!1})}))},r.options=[{label:Object(f.nb)("3 days ago"),value:3},{label:Object(f.nb)("1 week ago"),value:7},{label:Object(f.nb)("1 month ago"),value:30},{label:Object(f.nb)("all"),value:0}],r.state={inputValue:r.options[0],submitBtnDisabled:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.formErrorMsg;return i.a.createElement(D.x,{isOpen:!0,centered:!0,toggle:this.props.toggleDialog},i.a.createElement(D.A,{toggle:this.props.toggleDialog},Object(f.nb)("Clean")),i.a.createElement(D.y,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,Object(f.nb)("Clear files in trash and history\uff1a")),i.a.createElement(M.a,{defaultValue:this.options[0],options:this.options,autoFocus:!1,onChange:this.handleInputChange,placeholder:""}),e&&i.a.createElement("p",{className:"error m-0 mt-2"},e))),i.a.createElement(D.z,null,i.a.createElement("button",{className:"btn btn-primary",disabled:this.state.submitBtnDisabled,onClick:this.formSubmit},Object(f.nb)("Submit"))))}}]),a}(i.a.Component),I=(a(94),a(107),a(1266),window.app.pageOptions),w=I.repoID,C=I.repoFolderName,F=I.path,_=I.enableClean,y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getItems=function(e){g.a.getRepoFolderTrash(w,F,e).then((function(e){var t=e.data,a=t.data,n=t.more,o=t.scan_stat;!a.length&&n?r.getItems(o):r.setState({isLoading:!1,items:r.state.items.concat(a),more:n,scanStat:o})})).catch((function(e){r.setState({isLoading:!1,errorMsg:p.a.getErrorMsg(e,!0)})}))},r.getMore=function(){r.setState({isLoading:!0}),r.getItems(r.state.scanStat)},r.onSearchedClick=function(e){if(!0===e.is_dir){var t=f.jc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(u.c)(t,{repalce:!0})}else{var a=f.jc+"lib/"+e.repo_id+"/file"+p.a.encodePath(e.path);window.open("about:blank").location.href=a}},r.goBack=function(e){e.preventDefault(),window.history.back()},r.cleanTrash=function(){r.toggleCleanTrashDialog()},r.toggleCleanTrashDialog=function(){r.setState({isCleanTrashDialogOpen:!r.state.isCleanTrashDialogOpen})},r.refreshTrash=function(){r.setState({isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,showFolder:!1}),r.getItems()},r.renderFolder=function(e,t,a){r.setState({showFolder:!0,commitID:e,baseDir:t,folderPath:a,folderItems:[],isLoading:!0}),g.a.listCommitDir(w,e,"".concat(t.substr(0,t.length-1)).concat(a)).then((function(e){r.setState({isLoading:!1,folderItems:e.data.dirent_list})})).catch((function(e){e.response?403==e.response.status?r.setState({isLoading:!1,errorMsg:Object(f.nb)("Permission denied")}):r.setState({isLoading:!1,errorMsg:Object(f.nb)("Error")}):r.setState({isLoading:!1,errorMsg:Object(f.nb)("Please check the network.")})}))},r.clickRoot=function(e){e.preventDefault(),r.refreshTrash()},r.clickFolderPath=function(e,t){t.preventDefault();var a=r.state,n=a.commitID,o=a.baseDir;r.renderFolder(n,o,e)},r.renderFolderPath=function(){var e=r.state.folderPath.split("/");return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"#",onClick:r.clickRoot},C),i.a.createElement("span",null," / "),e.map((function(t,a){if(a>0&&a!=e.length-1)return i.a.createElement(i.a.Fragment,{key:a},i.a.createElement("a",{href:"#",onClick:r.clickFolderPath.bind(Object(o.a)(r),e.slice(0,a+1).join("/"))},e[a]),i.a.createElement("span",null," / "))})),e[e.length-1])},r.state={isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,isCleanTrashDialogOpen:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this.state,t=e.isCleanTrashDialogOpen,a=e.showFolder;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"h-100 d-flex flex-column"},i.a.createElement("div",{className:"top-header d-flex justify-content-between"},i.a.createElement("a",{href:f.jc},i.a.createElement("img",{src:f.Kb+f.Fb,height:f.Eb,width:f.Gb,title:f.kc,alt:"logo"})),i.a.createElement(v.a,{onSearchedClick:this.onSearchedClick})),i.a.createElement("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-10 offset-md-1"},i.a.createElement("h2",{dangerouslySetInnerHTML:{__html:p.a.generateDialogTitle(Object(f.nb)("{placeholder} Trash"),C)}}),i.a.createElement("a",{href:"#",className:"go-back",title:Object(f.nb)("Back"),onClick:this.goBack},i.a.createElement("span",{className:"fas fa-chevron-left"})),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center op-bar"},i.a.createElement("p",{className:"m-0"},Object(f.nb)("Current path: "),a?this.renderFolderPath():C),"/"==F&&_&&!a&&i.a.createElement("button",{className:"btn btn-secondary clean",onClick:this.cleanTrash},Object(f.nb)("Clean"))),i.a.createElement(N,{data:this.state,getMore:this.getMore,renderFolder:this.renderFolder}))))),t&&i.a.createElement(O.a,null,i.a.createElement(S,{repoID:w,refreshTrash:this.refreshTrash,toggleDialog:this.toggleCleanTrashDialog})))}}]),a}(i.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).theadData=[{width:"5%",text:""},{width:"45%",text:Object(f.nb)("Name")},{width:"20%",text:Object(f.nb)("Delete Time")},{width:"15%",text:Object(f.nb)("Size")},{width:"15%",text:""}],r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.isLoading,n=t.errorMsg,r=t.items,o=t.more,l=t.showFolder,c=t.commitID,s=t.baseDir,m=t.folderPath,d=t.folderItems;return i.a.createElement(i.a.Fragment,null,i.a.createElement("table",{className:"table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,this.theadData.map((function(e,t){return i.a.createElement("th",{key:t,width:e.width},e.text)})))),i.a.createElement("tbody",null,l?d.map((function(t,a){return i.a.createElement(L,{key:a,item:t,commitID:c,baseDir:s,folderPath:m,renderFolder:e.props.renderFolder})})):r.map((function(t,a){return i.a.createElement(T,{key:a,item:t,renderFolder:e.props.renderFolder})})))),a&&i.a.createElement(E.a,null),n&&i.a.createElement("p",{className:"error mt-6 text-center"},n),o&&!a&&!l&&i.a.createElement("button",{className:"btn btn-block more mt-6",onClick:this.props.getMore},Object(f.nb)("More")))}}]),a}(i.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleMouseOver=function(){r.setState({isIconShown:!0})},r.handleMouseOut=function(){r.setState({isIconShown:!1})},r.restoreItem=function(e){e.preventDefault();var t=r.props.item,a=t.commit_id,n=t.parent_dir+t.obj_name;(t.is_dir?g.a.restoreFolder(w,a,n):g.a.restoreFile(w,a,n)).then((function(e){r.setState({restored:!0}),j.a.success(Object(f.nb)("Successfully restored 1 item."))})).catch((function(e){var t="";t=e.response?e.response.data.error_msg||Object(f.nb)("Error"):Object(f.nb)("Please check the network."),j.a.danger(t)}))},r.renderFolder=function(e){e.preventDefault();var t=r.props.item;r.props.renderFolder(t.commit_id,t.parent_dir,p.a.joinPath("/",t.obj_name))},r.state={restored:!1,isIconShown:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state,a=t.restored,n=t.isIconShown;return a?null:e.is_dir?i.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i.a.createElement("td",{className:"text-center"},i.a.createElement("img",{src:p.a.getFolderIconUrl(),alt:Object(f.nb)("Directory"),width:"24"})),i.a.createElement("td",null,i.a.createElement("a",{href:"#",onClick:this.renderFolder},e.obj_name)),i.a.createElement("td",{title:b()(e.deleted_time).format("LLLL")},b()(e.deleted_time).format("YYYY-MM-DD")),i.a.createElement("td",null),i.a.createElement("td",null,i.a.createElement("a",{href:"#",className:n?"":"invisible",onClick:this.restoreItem},Object(f.nb)("Restore")))):i.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i.a.createElement("td",{className:"text-center"},i.a.createElement("img",{src:p.a.getFileIconUrl(e.obj_name),alt:Object(f.nb)("File"),width:"24"})),i.a.createElement("td",null,i.a.createElement("a",{href:"".concat(f.jc,"repo/").concat(w,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(e.commit_id,"&base=").concat(encodeURIComponent(e.parent_dir),"&p=").concat(encodeURIComponent("/"+e.obj_name)),target:"_blank"},e.obj_name)),i.a.createElement("td",{title:b()(e.deleted_time).format("LLLL")},b()(e.deleted_time).format("YYYY-MM-DD")),i.a.createElement("td",null,p.a.bytesToSize(e.size)),i.a.createElement("td",null,i.a.createElement("a",{href:"#",className:n?"":"invisible",onClick:this.restoreItem},Object(f.nb)("Restore"))))}}]),a}(i.a.Component),L=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleMouseOver=function(){r.setState({isIconShown:!0})},r.handleMouseOut=function(){r.setState({isIconShown:!1})},r.renderFolder=function(e){e.preventDefault();var t=r.props.item,a=r.props,n=a.commitID,o=a.baseDir,l=a.folderPath;r.props.renderFolder(n,o,p.a.joinPath(l,t.name))},r.state={isIconShown:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.item,t=(this.state.isIconShown,this.props),a=t.commitID,n=t.baseDir,r=t.folderPath;return"dir"==e.type?i.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i.a.createElement("td",{className:"text-center"},i.a.createElement("img",{src:p.a.getFolderIconUrl(),alt:Object(f.nb)("Directory"),width:"24"})),i.a.createElement("td",null,i.a.createElement("a",{href:"#",onClick:this.renderFolder},e.name)),i.a.createElement("td",null),i.a.createElement("td",null),i.a.createElement("td",null)):i.a.createElement("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i.a.createElement("td",{className:"text-center"},i.a.createElement("img",{src:p.a.getFileIconUrl(e.name),alt:Object(f.nb)("File"),width:"24"})),i.a.createElement("td",null,i.a.createElement("a",{href:"".concat(f.jc,"repo/").concat(w,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(a,"&base=").concat(encodeURIComponent(n),"&p=").concat(encodeURIComponent(p.a.joinPath(r,e.name))),target:"_blank"},e.name)),i.a.createElement("td",null),i.a.createElement("td",null,p.a.bytesToSize(e.size)),i.a.createElement("td",null))}}]),a}(i.a.Component);d.a.render(i.a.createElement(y,null),document.getElementById("wrapper"))}},[[1265,1,0]]]);
//# sourceMappingURL=repoFolderTrash.chunk.js.map