(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[6],{1143:function(e,t,a){e.exports=a(1308)},1308:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(6),r=a(8),o=a(7),s=a(0),c=a.n(s),d=a(23),l=a.n(d),f=a(47),h=a.n(f),u=a(1),m=a(4),p=a(42),v=a(54),g=a(79),b=a(15),y=a(12),I=a.n(y),k=a(3),w=a(73);I.a.locale(window.app.config.lang);var E=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onMouseEnter=function(){i.props.isItemFreezed||i.setState({isShowOperationIcon:!0})},i.onMouseLeave=function(){i.props.isItemFreezed||i.setState({isShowOperationIcon:!1})},i.onToggleClick=function(e){i.setState({isMenuShow:!i.state.isMenuShow}),i.props.onFreezedItemToggle()},i.onItemClick=function(){if(i.setState({isShowOperationIcon:!1}),i.props.item.commit_id!==i.props.currentItem.commit_id){var e=i.props.index;i.props.onItemClick(i.props.item,e)}},i.onItemRestore=function(){i.props.onItemRestore(i.props.currentItem)},i.onItemDownload=function(){},i.state={isShowOperationIcon:!1,isMenuShow:!1},i}return Object(i.a)(a,[{key:"render",value:function(){if(!this.props.currentItem)return"";var e=this.props.item,t=I()(e.ctime).format("YYYY-MM-DD HH:mm"),a=!1;this.props.item&&this.props.currentItem&&(a=this.props.item.commit_id===this.props.currentItem.commit_id);var n=this.props.currentItem.rev_file_id,i=w.a.getUrl({type:"download_historic_file",filePath:u.jb,objID:n});return c.a.createElement("li",{className:"history-list-item ".concat(a?"item-active":""),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onItemClick},c.a.createElement("div",{className:"history-info"},c.a.createElement("div",{className:"time"},t),c.a.createElement("div",{className:"owner"},c.a.createElement("span",{className:"squire-icon"}),c.a.createElement("span",null,e.creator_name))),c.a.createElement("div",{className:"history-operation"},c.a.createElement(k.l,{isOpen:this.state.isMenuShow,toggle:this.onToggleClick},c.a.createElement(k.o,{tag:"a",className:"fas fa-ellipsis-v ".concat(this.state.isShowOperationIcon||a?"":"invisible"),"data-toggle":"dropdown","aria-expanded":this.state.isMenuShow,alt:Object(u.nb)("More Operations")}),c.a.createElement(k.n,null,0!==this.props.index&&c.a.createElement(k.m,{onClick:this.onItemRestore},Object(u.nb)("Restore")),c.a.createElement(k.m,{tag:"a",href:i,onClick:this.onItemDownLoad},Object(u.nb)("Download"))))))}}]),a}(c.a.Component),j=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).componentDidMount=function(){var e=i.props.historyList;e.length>0&&(i.setState({currentItem:e[0]}),1===e?i.props.onItemClick(e[0]):i.props.onItemClick(e[0],e[1]))},i.onFreezedItemToggle=function(){i.setState({isItemFreezed:!i.state.isItemFreezed})},i.onScrollHandler=function(e){var t=e.target.clientHeight,a=e.target.scrollHeight,n=t+e.target.scrollTop+1>=a,r=i.props.hasMore;n&&r&&i.props.reloadMore()},i.onItemClick=function(e,t){if(i.setState({currentItem:e}),t!==i.props.historyList.length){var a=i.props.historyList[t+1];i.props.onItemClick(e,a)}else i.props.onItemClick(e)},i.state={isItemFreezed:!1,currentItem:null},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("ul",{className:"history-list-container",onScroll:this.onScrollHandler},this.props.historyList.map((function(t,a){return c.a.createElement(E,{key:a,item:t,index:a,currentItem:e.state.currentItem,isItemFreezed:e.state.isItemFreezed,onItemClick:e.onItemClick,onItemRestore:e.props.onItemRestore,onFreezedItemToggle:e.onFreezedItemToggle})})),this.props.isReloadingData&&c.a.createElement("li",null,c.a.createElement(b.a,null)))}}]),a}(c.a.Component),C=a(10),O=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).reloadMore=function(){if(!i.state.isReloadingData){var e=i.state.currentPage+1;i.setState({currentPage:e,isReloadingData:!0}),g.a.listFileHistoryRecords(u.jb,e,u.a).then((function(e){i.updateResultState(e.data),i.setState({isReloadingData:!1})}))}},i.onItemRestore=function(e){var t=e.commit_id;g.a.revertFile(u.jb,t).then((function(e){e.data.success&&(i.setState({isLoading:!0}),i.refershFileList());var t=Object(u.nb)("Successfully restored.");C.a.success(t)}))},i.onItemClick=function(e,t){i.props.onItemClick(e,t)},i.state={historyInfo:"",currentPage:1,hasMore:!1,isLoading:!0,isError:!1,fileOwner:"",isReloadingData:!1},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.listFileHistoryRecords(u.jb,1,u.a).then((function(t){if(0===t.data.length)throw e.setState({isLoading:!1}),Error("there has an error in server");e.initResultState(t.data)}))}},{key:"refershFileList",value:function(){var e=this;g.a.listFileHistoryRecords(u.jb,1,u.a).then((function(t){e.initResultState(t.data)}))}},{key:"initResultState",value:function(e){e.data.length&&this.setState({historyInfo:e.data,currentPage:e.page,hasMore:e.total_count>u.a*this.state.currentPage,isLoading:!1,isError:!1,fileOwner:e.data[0].creator_email})}},{key:"updateResultState",value:function(e){e.data.length&&this.setState({historyInfo:[].concat(Object(v.a)(this.state.historyInfo),Object(v.a)(e.data)),currentPage:e.page,hasMore:e.total_count>u.a*this.state.currentPage,isLoading:!1,isError:!1,fileOwner:e.data[0].creator_email})}},{key:"render",value:function(){return c.a.createElement("div",{className:"side-panel history-side-panel"},c.a.createElement("div",{className:"side-panel-center"},c.a.createElement("div",{className:"history-side-panel-title"},Object(u.nb)("History Versions")),c.a.createElement("div",{className:"history-body"},this.state.isLoading&&c.a.createElement(b.a,null),this.state.historyInfo&&c.a.createElement(j,{hasMore:this.state.hasMore,isReloadingData:this.state.isReloadingData,historyList:this.state.historyInfo,reloadMore:this.reloadMore,onItemClick:this.onItemClick,onItemRestore:this.onItemRestore}))))}}]),a}(c.a.Component),D=a(112),_=a.n(D),x=a(201);a(209);var S=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSearchedClick=function(){},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){_.a.highlightAll()}},{key:"render",value:function(){return c.a.createElement("div",{className:"main-panel"},c.a.createElement("div",{className:"main-panel-center content-viewer"},c.a.createElement("div",{className:"markdown-viewer-render-content"},this.props.renderingContent?c.a.createElement(b.a,null):c.a.createElement("div",{className:"diff-view article"},c.a.createElement(x.a,{scriptSource:u.Kb+"js/mathjax/tex-svg.js",newMarkdownContent:this.props.newMarkdownContent,oldMarkdownContent:this.props.oldMarkdownContent})))))}}]),a}(c.a.Component),M=a(9),F=(a(136),a(404),a(94),a(107),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onSearchedClick=function(e){m.a.handleSearchedItemClick(e)},i.setDiffContent=function(e,t){i.setState({renderingContent:!1,newMarkdownContent:e,oldMarkdownContent:t})},i.onHistoryItemClick=function(e,t){i.setState({renderingContent:!0}),t?h.a.all([M.a.getFileRevision(u.qb,e.commit_id,e.path),M.a.getFileRevision(u.qb,t.commit_id,t.path)]).then(h.a.spread((function(e,t){h.a.all([M.a.getFileContent(e.data),M.a.getFileContent(t.data)]).then(h.a.spread((function(e,t){i.setDiffContent(e.data,t.data)})))}))):M.a.getFileRevision(u.qb,e.commit_id,e.path).then((function(e){h.a.all([M.a.getFileContent(e.data)]).then(h.a.spread((function(e){i.setDiffContent(e.data,"")})))}))},i.state={renderingContent:!0,newMarkdownContent:"",oldMarkdownContent:""},i}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(s.Fragment,null,c.a.createElement("div",{id:"header",className:"history-header"},c.a.createElement("div",{className:"title"},c.a.createElement("a",{href:"javascript:window.history.back()",className:"go-back",title:"Back"},c.a.createElement("span",{className:"fas fa-chevron-left"})),c.a.createElement("span",{className:"name"},u.ib)),c.a.createElement("div",{className:"toolbar"},c.a.createElement(p.a,{onSearchedClick:this.onSearchedClick}))),c.a.createElement("div",{id:"main",className:"history-content"},c.a.createElement(S,{newMarkdownContent:this.state.newMarkdownContent,oldMarkdownContent:this.state.oldMarkdownContent,renderingContent:this.state.renderingContent}),c.a.createElement(O,{onItemClick:this.onHistoryItemClick})))}}]),a}(c.a.Component));l.a.render(c.a.createElement(F,null),document.getElementById("wrapper"))},201:function(e,t,a){"use strict";var n=a(14),i=a(17),r=a(19),o=a(20),s=a(21),c=a(0),d=a.n(c),l=a(86),f=a(35),h=a(81),u=a.n(h);function m(e,t){if(!e.length&&!t.length)return 1;if(!e.length||!t.length)return 0;if(e.toUpperCase()===t.toUpperCase())return 1;if(1===e.length&&1===t.length)return 0;var a=g(e),n=g(t),i=a.length+n.length,r=0;return a.forEach((function(e){for(var t,a=0;t=n[a];a++)if(e===t){r++,n.splice(a,1);break}})),2*r/i}function p(e){return Array.isArray(e)?e.reduce((function(e,t){return e.concat(p(t))}),[]):[e]}function v(e){for(var t=[],a=0,n=e.length-1;a<n;a++)t[a]=e.substring(a,a+2);return t}function g(e){return p(e.toUpperCase().split(" ").map(v))}var b=a(11),y=a(41);function I(e,t){return e.type===t.type&&(!!u.a.isEqual(e,t)||(b.i.isText(e)&&b.i.isText(t)?m(e.text,t.text)>=.5&&"changed":(e.type===t.type&&(e.type.includes("ordered_list")||e.type.includes("unordered_list"))&&m(b.d.text(e),b.d.text(t))>=.5||e.type===t.type&&(e.children.length>1||t.children.length>1)&&"list_item"===e.type&&m(b.d.text(e),b.d.text(t))>=.5||e.type===t.type&&"paragraph"===e.type&&m(b.d.text(e),b.d.text(t))>=.5||e.type===t.type&&"table"===e.type&&m(b.d.text(e),b.d.text(t))>=.5||e.type===t.type&&"table_row"===e.type||e.type===t.type&&"table_cell"===e.type)&&"changed"))}function k(e,t){return e===t}var w=function(){function e(){var t=this;Object(n.a)(this,e),this.deepDiff=function(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[],o=i+1,s=new j({equalFunc:n});s.ArrayDiff(e,a);for(var c=0;c<s.diff.length;c++){var d=s.diff[c],l=d.changeType;if("common"===l){var f={diff_state:"diff-common",new_index:d.newIndex,old_index:-1,node_depth:o};d.item.data=Object.assign(d.item.data?d.item.data:{},f)}else if("added"===l)if(b.i.isText(d.item))d.item.ADD=!0;else{var h={diff_state:"diff-added",new_index:d.newIndex,old_index:-1,node_depth:o};d.item.data=Object.assign(d.item.data?d.item.data:{},h)}else if("removed"===l)if(b.i.isText(d.item))d.item.DELETE=!0;else{var u={diff_state:"diff-removed",new_index:-1,old_index:d.oldIndex,node_depth:o};d.item.data=Object.assign(d.item.data?d.item.data:{},u)}else if("replaced"===l){var m=void 0,p=d.item.type||"text";if("text"===p?m=t.getTextDiff(d.newItem,d.oldItem):(p.includes("ordered_list")||p.includes("unordered_list")||p.includes("list_item")||"table"===p||"table_row"===p||"table_cell"===p||"paragraph"===p)&&(m=t.deepDiff(d.newItem.children,d.oldItem.children,n,o)),b.i.isText(d.item))d.item=m;else{var v={diff_state:"diff-replaced",new_index:-1,old_index:d.oldIndex,node_depth:o};d.item.data=Object.assign(d.item.data?d.item.data:{},v),d.item.children=m}}Array.isArray(d.item)?r=r.concat(d.item):r.push(d.item)}return r},this.getDiffDocument=function(e,a){var n=Object(y.a)(e),i=Object(y.a)(a),r=t.deepDiff(n,i,I);return r=t.splitTopDiffNodes(r)}}return Object(i.a)(e,[{key:"getTextDiff",value:function(e,t){var a=[],n=this.textDiff(e.text,t.text);return a=a.concat(n)}},{key:"textDiff",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],i=new j({equalFunc:k});i.StringDiff(e,t);var r=i.diff,o="",s=r[0].changeType;return r.forEach((function(e,t,i){var r="";"removed"===s?r="DELETE":"added"===s&&(r="ADD"),s===e.changeType?(o+=e.item,t===i.length-1&&n.push(Object(f.a)(Object(l.a)({text:o},r,!0),a))):e.changeType!==s&&(n.push(Object(f.a)(Object(f.a)({text:o},a),{},Object(l.a)({},r,!0))),s=e.changeType,o=e.item,t===i.length-1&&("removed"===s?r="DELETE":"added"===s&&(r="ADD"),n.push(Object(f.a)(Object(l.a)({text:o},r,!0),a))))})),n}},{key:"splitDiffParagraph",value:function(e){var t=u.a.cloneDeep(e),a=u.a.cloneDeep(e),n=[],i=[];return e.children.forEach((function(e,t,a){"link"===e.type||"image"===e.type?"diff-added"===e.data.diff_state?n.push(e):("diff-removed"===e.data.diff_state||n.push(e),i.push(e)):e.ADD?n.push(e):(e.DELETE||n.push(e),i.push(e))})),t.children=n,a.data.paragraph_state="old-paragraph",t.data.paragraph_state="new-paragraph",a.children=i,[a,t]}},{key:"splitTopDiffNodes",value:function(e){var t=this,a=[];return e.forEach((function(e){if("diff-replaced"===e.data.diff_state&&"paragraph"===e.type){var n=t.splitDiffParagraph(e);a.push(n[0],n[1])}else"diff-replaced"===e.data.diff_state&&"table"===e.type?(t.splitTableDiffParagraph(e),a.push(e)):a.push(e)})),a}},{key:"splitTableDiffParagraph",value:function(e){var t=this;return e.children.forEach((function(e,a,n){"diff-replaced"===e.data.diff_state&&e.children.forEach((function(e){if("diff-replaced"===e.data.diff_state&&"diff-replaced"===e.children[0].data.diff_state){var a=t.splitDiffParagraph(e.children[0]);e.children=a}}))})),e}}]),e}(),E=function(){function e(t,a,i){Object(n.a)(this,e),this.item=t,this.newIndex=a,this.oldIndex=i}return Object(i.a)(e,[{key:"added",value:function(){return void 0===this.oldIndex}},{key:"removed",value:function(){return void 0===this.newIndex}},{key:"common",value:function(){return void 0!==this.oldIndex&&void 0!==this.newIndex}}]),e}(),j=function(){function e(t){Object(n.a)(this,e),this.equalFunc=t.equalFunc?t.equalFunc:k,void 0!=t.shouldDetectChange?this.shouldDetectChange=t.shouldDetectChange:this.shouldDetectChange=!1,this.similarityFunc=t.similarityFunc}return Object(i.a)(e,[{key:"addAdded",value:function(e,t){var a=new E(e,t,void 0);a.changeType="added",this.added.push(a),this.diff.push(a)}},{key:"addRemoved",value:function(e,t){var a=new E(e,void 0,t);this.removed.push(a),a.changeType="removed",this.diff.push(a)}},{key:"addReplaced",value:function(e,t,a,n){var i=new E(e,n,a);i.newItem=t,i.oldItem=e,i.changeType="replaced",this.replaced.push(i),this.diff.push(i)}},{key:"addCommon",value:function(e,t,a,n){var i=new E(e,n,a);i.newItem=t,i.changeType="common",i.oldItem=e,this.common.push(i),this.diff.push(i)}},{key:"StringDiff",value:function(e,t){var a=e.length,n=t.length,i=0,r=0,o=[];for(o[a]=[],r=n;r>=0;o[a][r--]=0);for(i=a-1;i>=0;i--)for(o[i]=[],o[i][n]=0,r=n-1;r>=0;r--)this.equalFunc(e[i],t[r])?o[i][r]=o[i+1][r+1]+1:o[i][r]=Math.max(o[i+1][r],o[i][r+1]);for(this.common=[],this.added=[],this.removed=[],this.replaced=[],this.diff=[],i=r=0;i<a&&r<n;){if(this.equalFunc(e[i],t[r])){var s=e[i],c=t[r];this.addCommon(c,s,r,i),i++,r++}else o[i+1][r]>=o[i][r+1]?(this.addAdded(e[i],i),i++):(this.addRemoved(t[r],r),r++)}for(;i<a;i++)this.addAdded(e[i],i);for(;r<n;r++)this.addRemoved(t[r],r)}},{key:"ArrayDiff",value:function(e,t,a){var n=e.length,i=t.length,r=0,o=0,s=[];for(s[n]=[],o=i;o>=0;s[n][o--]=0);for(r=n-1;r>=0;r--)for(s[r]=[],s[r][i]=0,o=i-1;o>=0;o--)this.equalFunc(e[r],t[o])?s[r][o]=s[r+1][o+1]+1:s[r][o]=Math.max(s[r+1][o],s[r][o+1]);for(this.common=[],this.added=[],this.removed=[],this.replaced=[],this.diff=[],r=o=0;r<n&&o<i;){var c=this.equalFunc(e[r],t[o]);if(c){var d=e[r],l=t[o];"changed"===c?this.addReplaced(l,d,o,r):this.addCommon(l,d,o,r),a&&a("C",o,r),r++,o++}else s[r+1][o]>=s[r][o+1]?(this.addAdded(e[r],r),a&&a("A",0,r),r++):(this.addRemoved(t[o],o),a&&a("D",o,0),o++)}for(;r<n;r++)this.addAdded(e[r],r),a&&a("A",0,r);for(;o<i;o++)this.addRemoved(t[o],o),a&&a("D",o,0)}}]),e}(),C=a(58),O=a(167),D=a(118),_=(a(403),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).renderDiffNode=function(e){var t=e.element,a=t.data?t.data:{},n=a.diff_state,i=a.node_depth;return"diff-added"===n?i>1?"blockquote"===t.type||"code_block"===t.type?d.a.createElement("div",{className:"diff-added-container"},Object(C.b)(e)):Object(C.b)(e):d.a.createElement("div",{className:"diff-added"},Object(C.b)(e)):"diff-removed"===n?i>1?"blockquote"===t.type||"code_block"===t.type?d.a.createElement("div",{className:"diff-removed-container"},Object(C.b)(e)):Object(C.b)(e):d.a.createElement("div",{className:"diff-removed"},Object(C.b)(e)):"diff-replaced"===n?i>1?Object(C.b)(e):d.a.createElement("div",{className:"diff-replaced"},Object(C.b)(e)):Object(C.b)(e)},a.value=[],a.slateDiff=new w,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.newMarkdownContent,t=this.props.oldMarkdownContent;return this.value=this.slateDiff.getDiffDocument(e,t),d.a.createElement(D.a,{scriptSource:this.props.scriptSource},d.a.createElement(O.a,{style:{width:"100%"},renderDiffElement:this.renderDiffNode,renderDiffLeaf:C.a,value:this.value}))}}]),t}(d.a.PureComponent));t.a=_},403:function(e,t,a){},404:function(e,t,a){}},[[1143,1,0]]]);
//# sourceMappingURL=fileHistory.chunk.js.map