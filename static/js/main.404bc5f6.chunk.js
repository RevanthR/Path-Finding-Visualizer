(this["webpackJsonppath-finding-visualizer"]=this["webpackJsonppath-finding-visualizer"]||[]).push([[0],{22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(14),o=n.n(s),r=(n(27),n(28),n(20)),l=n(9),c=n(10),u=n(13),d=n(11),h=(n(29),n(15)),m=n(8),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(h.a,{className:"color-nav",collapseOnSelect:!0,expand:"lg",variant:"dark"},i.a.createElement(h.a.Brand,{href:""},"Path Finding Visualizer"),i.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(m.a,{className:"mr-auto"},i.a.createElement(m.a.Link,{title:"Dijkstra's shortest path algorithm works on weighted graphs and guarantees the shortest path. This algorithm works similarly to breadth-first search in that it begins at the start node and then works it's way outward in all directions. As it works outwards it checks the edges (u,v,w) to see if u.distance + w is less than v.distance. If so it updates v.distance to hold u.distance + w. It continues this process until no more nodes can be visited, or until the destination node is found.",onClick:function(){return e.props.visualize("dijkstra")},disabled:this.props.isVisualizing,href:""},"Dijkstra"),i.a.createElement(m.a.Link,{title:"Breadth-first search works on unweighted graphs and guarantees the shortest path. This algorithm works by beginning at the starting node and visiting each of its neighbors. It then moves to each neighbor and visits any of its unvisited neighbors. It repeats this process spreading out across the graph until all nodes that can be visited have been, or until we reach the destination node.",onClick:function(){return e.props.visualize("bfs")},disabled:this.props.isVisualizing,href:""},"Breadth First Search"),i.a.createElement(m.a.Link,{title:"Depth-first search works on unweighted graphs and does not guarantee the shortest path. This algorithm visits one node at a time. At each node it visits it selects an unvisited neighbor and moves to that node. It repeats this process until it reaches a node with no unvisited neighbors. It then backtracks to a node which has unvisited neighbors and moves forward down that path. It repeats this until all nodes that can be visited have been, or until it reaches the destination node.",onClick:function(){return e.props.visualize("dfs")},disabled:this.props.isVisualizing,href:""},"Depth First Search")),i.a.createElement(m.a,null,i.a.createElement(m.a.Link,{onClick:function(){return e.props.clearBoard()},disabled:this.props.isVisualizing,href:""},"Clear Board ",i.a.createElement("i",{className:"fa fa-eraser","aria-hidden":"true"})))))}}]),n}(a.Component),v=(n(36),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,s=e.isWall,o=e.onMouseDown,r=e.onMouseEnter,l=e.onMouseUp,c=e.row,u=n?"node-finish":a?"node-start":s?"node-wall":"";return i.a.createElement("div",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return o(c,t)},onMouseEnter:function(){return r(c,t)},onMouseUp:function(){return l()}})}}]),n}(a.Component)),p=function(e,t){var n=[],a=e.col,i=e.row;return i>0&&n.push(t[i-1][a]),i<t.length-1&&n.push(t[i+1][a]),a>0&&n.push(t[i][a-1]),a<t[0].length-1&&n.push(t[i][a+1]),(n=n.filter((function(e){return!e.isVisited}))).filter((function(e){return!e.isWall}))},g=n(12),b=function(e){e.sort((function(e,t){return e.distance-t.distance}))},E=function(e,t){var n,a=p(e,t),i=Object(g.a)(a);try{for(i.s();!(n=i.n()).done;){var s=n.value;s.distance=e.distance+1,s.previousNode=e}}catch(o){i.e(o)}finally{i.f()}},N=(n(37),{dijkstra:function(e,t,n){var a=[];t.distance=0;for(var i=function(e){for(var t=[],n=0;n<19;n++)for(var a=0;a<49;a++)e[n][a].isVisited||e[n][a].isWall||t.push(e[n][a]);return t}(e);i.length;){b(i);var s=i.shift();if(!s.isWall){if(s.distance===1/0)return a;if(s.isVisited=!0,a.push(s),s===n)return a;E(s,e)}}},bfs:function(e,t,n){var a=[],i=[];for(t.isVisted=!0,t.previousNode=null,a.push(t),i.push(t);0!==a.length;){var s=a.shift();if(s===n)return i;var o,r=p(s,e),l=Object(g.a)(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.isVisited=!0,c.previousNode=s,a.push(c),i.push(c)}}catch(u){l.e(u)}finally{l.f()}}return i},dfs:function(e,t,n){var a=[],i=[];for(t.isVisted=!0,t.previousNode=null,a.push(t),i.push(t);0!==a.length;){var s=a.pop();if(s===n)return i;s.isVisited=!0,i.push(s);var o,r=p(s,e),l=Object(g.a)(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;c.previousNode=s,a.push(c)}}catch(u){l.e(u)}finally{l.f()}}return i}}),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).visualize=function(t){e.setState({isVisualizing:!0}),e.unvisitNodes(!1);var n=e.state.grid,a=n[10][15],i=n[10][35],s=N[t](n,a,i),o=function(e,t){for(var n=[],a=t;null!==a&&a!==e;)n.unshift(a),a=a.previousNode;return n.unshift(e),n}(a,i);e.animate(s,o)},e.clearBoard=function(){e.state.isVisualizing||e.unvisitNodes(!0)},e.state={grid:[],mouseIsPressed:!1,isVisualizing:!1},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=k();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){if(!this.state.isVisualizing){var n=I(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed&&!this.state.isVisualizing){var n=I(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.state.isVisualizing||this.setState({mouseIsPressed:!1})}},{key:"animate",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){document.getElementById("node-".concat(10,"-").concat(35)).className="node node-visited node-finish",n.animateShortestPath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited",document.getElementById("node-".concat(10,"-").concat(15)).className="node node-visited node-start",document.getElementById("node-".concat(10,"-").concat(35)).className="node node-finish"}),10*a)},i=0;i<=e.length;i++){var s=a(i);if("object"===typeof s)return s.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,n=function(n){setTimeout((function(){var a=e[n];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-shortest-path",document.getElementById("node-".concat(10,"-").concat(15)).className="node node-start node-shortest-path",n===e.length-1&&(document.getElementById("node-".concat(10,"-").concat(35)).className="node node-finish node-shortest-path",t.setState({isVisualizing:!1}))}),50*n)},a=0;a<e.length;a++)n(a)}},{key:"unvisitNodes",value:function(e){for(var t=this.state.grid,n=0;n<19;n++)for(var a=0;a<49;a++){var i=t[n][a];document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node ",i.isVisited=!1,i.previous=null,i.distance=1/0,e?i.isWall=!1:i.isWall&&(document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node node-wall"),10===n&&15===a&&(document.getElementById("node-".concat(10,"-").concat(15)).className="node node-start",i.isStart=!0),10===n&&35===a&&(document.getElementById("node-".concat(10,"-").concat(35)).className="node node-finish",i.isEnd=!0)}this.setState({grid:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{visualize:this.visualize,isVisualizing:this.state.isVisualizing,clearBoard:this.clearBoard}),i.a.createElement("div",{className:"main",style:{display:"block",boxSizing:"border-box",textAlign:"center",marginTop:"30px"}},i.a.createElement("ul",{className:"cellunordered"},i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell cell-start"}),"Starting Node"),i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell cell-finish"}),"Target Node"),i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell",style:{backgroundColor:"white",border:"1px solid rgb(175, 216, 248)"}}),"Unvisited Node"),i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell",style:{backgroundColor:"rgba(0, 217, 159, 0.75)"}}),i.a.createElement("div",{className:"cell",style:{backgroundColor:"rgba(0, 190, 218, 0.75)"}}),"Visited Nodes"),i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell",style:{backgroundColor:"rgb(12, 53, 71)"}}),"Wall Node"),i.a.createElement("li",{className:"celllist"},i.a.createElement("div",{className:"cell",style:{backgroundColor:"rgb(255, 254, 106)"}}),"Shortest-Path Node"))),i.a.createElement("div",{className:"grid"},n.map((function(t,n){return i.a.createElement("div",{key:n},t.map((function(t,n){var s=t.row,o=t.col,r=t.isFinish,l=t.isStart,c=t.isWall;return i.a.createElement(v,{key:n,col:o,isFinish:r,isStart:l,isWall:c,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:s})})))}))))}}]),n}(a.Component),k=function(){for(var e=[],t=0;t<19;t++){for(var n=[],a=0;a<49;a++)n.push(y(a,t));e.push(n)}return e},y=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},I=function(e,t,n){var a=e.slice(),i=a[t][n],s=Object(r.a)(Object(r.a)({},i),{},{isWall:!i.isWall});return a[t][n]=s,a};var V=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(38);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.404bc5f6.chunk.js.map