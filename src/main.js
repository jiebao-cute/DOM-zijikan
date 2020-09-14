//创建div
const div = dom.create("<div><span>hi</span></div>");
console.log("创建div");
console.log(div);
//新增弟弟
dom.after(test, div);
//新加一个爸爸
const div3 = dom.create('<div id = "parent"></div>');
dom.wrap = dom.wrap(test, div3);
//删除所有子节点
const nodes = dom.empty(window.empty);
console.log("删除的所有节点");
console.log(nodes);
//添加title
dom.attr(test, "title", "Hi,I am Jie");
//读取title
const title = dom.attr(test, "title");
console.log("读取title");
console.log(title);
//添加文本内容
dom.text(test, "我是刚加的文本内容,不服打我");
//读取文本
console.log("读取新添加的文本内容 ${}");
const x = dom.text(test);
console.log(x);

//添加style
dom.style(test, {
  border: "1px solid red",
  color: "blue",
});
//读取style
console.log("读取test里面的border");
console.log(dom.style(test, "border"));
//修改style
dom.style(test, "border", "1px solid black");
//添加class
dom.class.add(test, "red");
dom.class.remove(test, "red");
console.log("判断class里面是否有red");
console.log(dom.class.has(test, "red"));
//用于添加监听事件\
let fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
//用于删除监听事件
dom.off(test, "click", fn);
//查
console.log("查询test里面的所有内容");
const testDiv = dom.find("#test")[0];
console.log(testDiv);
console.log("查询test2里面的red");
console.log(dom.find(".red", test2)[0]);
//用于获取父元素
console.log("找到的test父元素");
console.log(dom.parent(test));
// 用于获取子元素
console.log("找到的siblings子元素");
console.log(dom.children(siblings));

//找到元素的兄弟姐妹
console.log("找到s2的兄弟姐妹");
console.log(dom.siblings(dom.find("#s2")[0]));
//返回她的弟弟
console.log("找到s1的弟弟");
console.log(dom.next(dom.find("#s1")[0]));
//返回她的哥哥
console.log("找到s2的哥哥");
console.log(dom.previous(dom.find("#s2")[0]));
//遍历所有节点
dom.each(dom.children(dom.find("#travel")[0]), (n) =>
  dom.style(n, "color", "red")
);
//获取排行老几
console.log("查询排行老几");
console.log(dom.index(s2));

//我加的
const kkk = document.querySelector("#ceshi");
dom.style(kkk, "color", "red");
dom.style(kkk, "color", "blue");
dom.style(kkk, { color: "black", background: "grey" });
console.log(kkk.style);

//第1题
console.log("-----------------------------------第一题");
const y = document.querySelectorAll("#sb"); //查id
console.log(y);
const Q = document.getElementsByClassName("en")[0];
const f = document.querySelector(".en"); //查类
console.log(f);
const w = document.getElementsByTagName("div2")[0];
w.classList.add("red"); //加类
console.log(w);

//第2题
/*console.log("-----------------------------------第二题");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
console.log(d1);
console.log(d2);
console.log("----d1.childNodes---");
console.log(d1.childNodes);
console.log("----d1.children---");
console.log(d1.children);
console.log("----d1.nextSibling---");
console.log(d1.nextSibling);
console.log("----d1.previousSibling---");
console.log(d1.previousSibling);
console.log("----d3.nextSibling---");
console.log(d3.nextSibling);
console.log("----d1.previousSibling---");
console.log(d1.previousSibling);
console.log("----d4.previousSibling---");
console.log(d4.previousSibling);
console.log("----d2.parentNode---");
console.log(d2.parentNode);
console.log("----d1.firstChildren---");
console.log(d1.firstChild);
console.log("----d1.lastChild---");
console.log(d1.lastChild);
console.log("----d1.firstChildren.nodeType---");
console.log(d1.firstChild.nodeType);
console.log("----d2.nodeType---");
console.log(d2.nodeType);
//console.log("----d1.innerHTML='王八蛋'---");
//d1.innerHTML='王八蛋'
//console.log(d1);
//console.log("----d1.innerText='渣渣'---");
//d1.innerText='渣渣'
//console.log(d1);
//console.log("----d1.innerHTML='<p>傻逼</p>'---");
//d1.innerHTML='<p>傻逼</p>'
//console.log(d1);
//console.log("----d1.innerText='<p>放屁</p>'---");
//d1.innerText='<p>放屁</p>'
//console.log(d1);
//console.log("----d2.innerHtml='<p>还来</p>'---");
//d2.innerHTML='<p>还来</p>'
//console.log(d1);
//console.log("----d3.innerText='<p>还来</p>'---");
//d3.innerText='<p>再见</p>'
//console.log(d3);
//console.log(d1);

*/