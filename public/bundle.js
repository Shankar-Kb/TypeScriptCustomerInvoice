(()=>{"use strict";var t={840:function(t,o,n){var e,r=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])})(t,o)},function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(o,"__esModule",{value:!0}),o.Account=void 0;var i=function(t){function o(o,n){var e=t.call(this,n)||this;return e.ID=o.ID,e.customer=n.name,e.balance=+o.balance.toFixed(2),e}return r(o,t),o.prototype.getID=function(){return this.ID},o.prototype.getCustomer=function(){return this.customer},o.prototype.getBalance=function(){return this.balance},o.prototype.setBalance=function(t){this.balance=t},o.prototype.toString=function(){return this.customer+"("+this.ID+") balance=$"+this.balance.toFixed(2)},o.prototype.getCustomerName=function(){return this.name},o.prototype.deposit=function(t){this.balance=t},o.prototype.withdraw=function(t){this.balance>t?this.balance-=t:console.log("Amount to withdraw exceeds the current available balance")},o}(n(297).Customer);o.Account=i},297:(t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Customer=void 0;var n=function(){function t(t){this.ID=t.ID,this.name=t.name,this.discount=t.discount}return t.prototype.getID=function(){return this.ID},t.prototype.getName=function(){return this.name},t.prototype.getDiscount=function(){return this.discount},t.prototype.setDiscount=function(t){this.discount=t},t.prototype.toString=function(){return this.name+"("+this.ID+")"},t}();o.Customer=n},386:function(t,o,n){var e,r=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])})(t,o)},function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});Object.defineProperty(o,"__esModule",{value:!0}),o.Invoice=void 0;var i=function(t){function o(o,n){var e=t.call(this,n)||this;return e.ID=o.ID,e.customer=n.name,e.amount=o.amount,e}return r(o,t),o.prototype.getID=function(){return this.ID},o.prototype.getCustomer=function(){return this.customer},o.prototype.setCustomer=function(t){this.customer=t},o.prototype.getAmount=function(){return this.amount.toString()},o.prototype.setAmount=function(t){this.amount=t},o.prototype.getAmountAfterDiscount=function(){return this.amount-this.discount},o}(n(297).Customer);o.Invoice=i},790:(t,o,n)=>{var e=n(297),r=n(386),i=n(840),u={ID:1,name:"John",discount:5},c=new e.Customer(u);console.log(c.toString());var s=new r.Invoice({ID:1,amount:500},u);console.log(s.getCustomer());var a=new i.Account({ID:1,balance:1500},u);console.log(a.toString()),a.withdraw(2e3)}},o={};!function n(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}(790)})();
//# sourceMappingURL=bundle.js.map