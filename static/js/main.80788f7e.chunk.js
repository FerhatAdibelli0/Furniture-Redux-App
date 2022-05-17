(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"CartItem_item__3I_L2",details:"CartItem_details__2eeqa",quantity:"CartItem_quantity__1WfL-",price:"CartItem_price__Riiq0",itemprice:"CartItem_itemprice__11Me9",actions:"CartItem_actions__1Ah3f"}},,,,function(t,e,n){t.exports={item:"ProductItem_item__2szST",price:"ProductItem_price__2sOMx",actions:"ProductItem_actions__29ANV"}},function(t,e,n){t.exports={notification:"Notification_notification__1Tg8j",error:"Notification_error__2Bk3V",success:"Notification_success__39Jhd"}},,,function(t,e,n){t.exports={button:"CartButton_button__3AYuf",badge:"CartButton_badge__PcG9I"}},,function(t,e,n){t.exports={card:"Card_card__2mbNH"}},function(t,e,n){t.exports={cart:"Cart_cart__3NctA"}},function(t,e,n){t.exports={header:"MainHeader_header__1Awwa"}},function(t,e,n){t.exports={products:"Products_products__30jgI"}},,,,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var i=n(7),c=n.n(i),r=n(2),a=n(5),s=Object(a.b)({name:"ui",initialState:{isShown:!1,notification:null},reducers:{isShown:function(t){t.isShown=!t.isShown},setNotification:function(t,e){t.notification={status:e.payload.status,message:e.payload.message,title:e.payload.title}}}}),o=s.actions,u=s.reducer,d=Object(a.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.items=e.payload.items,t.totalQuantity=e.payload.totalQuantity},addItemToCart:function(t,e){var n=e.payload;t.totalQuantity++,t.changed=!0;var i=t.items.find((function(t){return t.id===n.id}));i?(i.quantity++,i.totalprice=i.totalprice+i.price):t.items.push({id:n.id,name:n.title,quantity:1,price:n.price,totalprice:n.price})},removeItemFromCart:function(t,e){var n=t.items.find((function(t){return t.id===e.payload}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.id!==e.payload})):(n.quantity--,n.totalprice=n.totalprice-n.price)}}}),l=d.actions,j=d.reducer,f=(j.actions,Object(a.a)({reducer:{ui:u,cart:j}})),p=(n(25),n(14)),m=n.n(p),b=n(0),h=function(t){return Object(b.jsx)("section",{className:"".concat(m.a.card," ").concat(t.className?t.className:""),children:t.children})},x=n(15),O=n.n(x),_=n(4),y=n.n(_),g=function(t){var e=t.item,n=e.title,i=e.quantity,c=e.total,a=e.price,s=e.id,o=Object(r.b)();return Object(b.jsxs)("li",{className:y.a.item,children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h3",{children:n}),Object(b.jsxs)("div",{className:y.a.price,children:["$",c.toFixed(2)," ",Object(b.jsxs)("span",{className:y.a.itemprice,children:["($",a.toFixed(2),"/item)"]})]})]}),Object(b.jsxs)("div",{className:y.a.details,children:[Object(b.jsxs)("div",{className:y.a.quantity,children:["x ",Object(b.jsx)("span",{children:i})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:function(){o(l.removeItemFromCart(s))},children:"-"}),Object(b.jsx)("button",{onClick:function(){o(l.addItemToCart({id:s,title:n,price:a}))},children:"+"})]})]})]})},v=function(t){var e=Object(r.c)((function(t){return t.cart.items}));return Object(b.jsxs)(h,{className:O.a.cart,children:[Object(b.jsx)("h2",{children:"Your Shopping Cart"}),Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(g,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalprice,price:t.price}},t.id)}))})]})},N=n(1),C=n(12),w=n.n(C),k=function(t){var e=Object(r.c)((function(t){return t.cart.totalQuantity})),n=Object(r.b)();return Object(b.jsxs)("button",{className:w.a.button,onClick:function(){n(o.isShown())},children:[Object(b.jsx)("span",{children:"My Cart"}),Object(b.jsx)("span",{className:w.a.badge,children:e})]})},q=n(16),I=n.n(q),S=function(t){return Object(b.jsxs)("header",{className:I.a.header,children:[Object(b.jsx)("h1",{children:"Adibelli-Redux"}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsx)(k,{})})})})]})},T=function(t){return Object(b.jsxs)(N.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)("main",{children:t.children})]})},Q=n(8),A=n.n(Q),B=function(t){var e=Object(r.b)(),n=t.title,i=t.price,c=t.description,a=t.id;return Object(b.jsx)("li",{className:A.a.item,children:Object(b.jsxs)(h,{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h3",{children:n}),Object(b.jsxs)("div",{className:A.a.price,children:["$",i.toFixed(2)]})]}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("div",{className:A.a.actions,children:Object(b.jsx)("button",{onClick:function(){e(l.addItemToCart({id:a,title:n,price:i}))},children:"Add to Cart"})})]})})},E=n(17),F=n.n(E),P=[{id:1,name:"LED TV Stand",quantity:1,price:28,description:"TV Media Console for Living Room Bedroom Light Gray"},{id:2,name:"Glass Door Storage TV Console",quantity:1,price:57,description:"A solid, sturdy piece of beautiful furniture"},{id:3,name:"Holliday Corner TV Stand",quantity:1,price:45,description:"Hinged method construction allows for easy assembly in minutes"},{id:4,name:"FirsTime & Co. Black Big Time",quantity:1,price:26,description:"This clock is so beautiful!"}],R=function(t){return Object(b.jsxs)("section",{className:F.a.products,children:[Object(b.jsx)("h2",{children:"Buy your favorite products"}),Object(b.jsx)("ul",{children:P.map((function(t){return Object(b.jsx)(B,{id:t.id,title:t.name,price:t.price,description:t.description},t.id)}))})]})},V=n(9),G=n.n(V),L=function(t){var e="";"error"===t.status&&(e=G.a.error),"success"===t.status&&(e=G.a.success);var n="".concat(G.a.notification," ").concat(e);return Object(b.jsxs)("section",{className:n,children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsx)("p",{children:t.message})]})},M=n(6),H=n(3),J=n.n(H),$=!0;var D=function(){var t=Object(r.c)((function(t){return t.ui.isShown})),e=Object(r.c)((function(t){return t.cart.totalQuantity})),n=Object(r.c)((function(t){return t.cart})),i=Object(r.c)((function(t){return t.ui.notification})),c=Object(r.b)();return Object(N.useEffect)((function(){$?$=!1:n.changed&&c(function(t){return function(){var e=Object(M.a)(J.a.mark((function e(n){var i;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(o.setNotification({status:"pending",title:"Pending ",message:"Request is sent "})),i=function(){var e=Object(M.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ferhat-s-first-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Something wetn wrong!!!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,i();case 5:n(o.setNotification({status:"success",title:"Success ",message:"Request is sent successfully"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(o.setNotification({status:"error",title:"Error ",message:"Getting an failed"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(n))}),[n,c]),Object(N.useEffect)((function(){c(function(){var t=Object(M.a)(J.a.mark((function t(e){var n,i;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var t=Object(M.a)(J.a.mark((function t(){var e,n;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ferhat-s-first-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Something went wrong...");case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,n();case 4:i=t.sent,e(l.replaceCart({items:i.items||[],totalQuantity:i.totalQuantity})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(o.setNotification({status:"error",title:"Error ",message:"Getting an failed in Response"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[c]),0===e&&(t=!1),Object(b.jsxs)(N.Fragment,{children:[i&&Object(b.jsx)(L,{status:i.status,title:i.title,message:i.message}),Object(b.jsxs)(T,{children:[t&&Object(b.jsx)(v,{}),Object(b.jsx)(R,{})]})]})};c.a.render(Object(b.jsx)(r.a,{store:f,children:Object(b.jsx)(D,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.80788f7e.chunk.js.map