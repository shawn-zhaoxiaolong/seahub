(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[30],{1130:function(e,t,a){e.exports=a(1131)},1131:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),s=a(8),i=a(7),c=a(0),o=a.n(c),l=a(23),g=a.n(l),u=a(16),m=a(4),h=a(1),d=a(9),p=a(15),P=a(34),b=a(42),f=a(294),E=(a(94),a(107),a(1137),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getItems=function(e){var t=r.state.perPage;d.a.listNotifications(e,t).then((function(a){r.setState({isLoading:!1,items:a.data.notification_list,currentPage:e,hasNextPage:m.a.hasNextPage(e,t,a.data.count)})})).catch((function(e){r.setState({isLoading:!1,errorMsg:m.a.getErrorMsg(e,!0)})}))},r.resetPerPage=function(e){r.setState({perPage:e},(function(){r.getItems(1)}))},r.onSearchedClick=function(e){if(!0===e.is_dir){var t=h.jc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(u.c)(t,{repalce:!0})}else{var a=h.jc+"lib/"+e.repo_id+"/file"+m.a.encodePath(e.path);window.open("about:blank").location.href=a}},r.markAllRead=function(){d.a.updateNotifications().then((function(e){r.setState({items:r.state.items.map((function(e){return e.seen=!0,e}))})})).catch((function(e){r.setState({isLoading:!1,errorMsg:m.a.getErrorMsg(e,!0)})}))},r.clearAll=function(){d.a.deleteNotifications().then((function(e){r.setState({items:[]})})).catch((function(e){r.setState({isLoading:!1,errorMsg:m.a.getErrorMsg(e,!0)})}))},r.state={isLoading:!0,errorMsg:"",currentPage:1,perPage:25,hasNextPage:!1,items:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location).searchParams,a=this.state,n=a.currentPage,r=a.perPage;this.setState({perPage:parseInt(t.get("per_page")||r),currentPage:parseInt(t.get("page")||n)},(function(){e.getItems(e.state.currentPage)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"h-100 d-flex flex-column"},o.a.createElement("div",{className:"top-header d-flex justify-content-between"},o.a.createElement("a",{href:h.jc},o.a.createElement("img",{src:h.Kb+h.Fb,height:h.Eb,width:h.Gb,title:h.kc,alt:"logo"})),o.a.createElement(b.a,{onSearchedClick:this.onSearchedClick})),o.a.createElement("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10 offset-md-1"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap op-bar"},o.a.createElement("h2",{className:"h4 m-0 my-1"},Object(h.nb)("Notifications")),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-secondary op-bar-btn",onClick:this.markAllRead},Object(h.nb)("Mark all read")),o.a.createElement("button",{className:"btn btn-secondary op-bar-btn ml-2",onClick:this.clearAll},Object(h.nb)("Clear")))),o.a.createElement(v,{isLoading:this.state.isLoading,errorMsg:this.state.errorMsg,items:this.state.items,currentPage:this.state.currentPage,hasNextPage:this.state.hasNextPage,curPerPage:this.state.perPage,resetPerPage:this.resetPerPage,getListByPage:this.getItems}))))))}}]),a}(o.a.Component)),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getPreviousPage=function(){r.props.getListByPage(r.props.currentPage-1)},r.getNextPage=function(){r.props.getListByPage(r.props.currentPage+1)},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.errorMsg,n=e.items,r=e.curPerPage,s=e.currentPage,i=e.hasNextPage;if(t)return o.a.createElement(p.a,null);if(a)return o.a.createElement("p",{className:"error mt-6 text-center"},a);var c=m.a.isDesktop()?[{width:"7%",text:""},{width:"73%",text:Object(h.nb)("Message")},{width:"20%",text:Object(h.nb)("Time")}]:[{width:"15%",text:""},{width:"52%",text:Object(h.nb)("Message")},{width:"33%",text:Object(h.nb)("Time")}];return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{className:"table-hover"},o.a.createElement("thead",null,o.a.createElement("tr",null,c.map((function(e,t){return o.a.createElement("th",{key:t,width:e.width},e.text)})))),o.a.createElement("tbody",null,n.map((function(e,t){return o.a.createElement(f.a,{key:t,noticeItem:e,tr:!0})})))),n.length>0&&o.a.createElement(P.a,{gotoPreviousPage:this.getPreviousPage,gotoNextPage:this.getNextPage,currentPage:s,hasNextPage:i,curPerPage:r,resetPerPage:this.props.resetPerPage}))}}]),a}(o.a.Component);g.a.render(o.a.createElement(E,null),document.getElementById("wrapper"))},1137:function(e,t,a){}},[[1130,1,0]]]);
//# sourceMappingURL=userNotifications.chunk.js.map