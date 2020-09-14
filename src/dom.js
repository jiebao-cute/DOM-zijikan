window.dom = {
  //creat用于创建一个节点
  create: function (string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim(); //trim()功能是把字符串两边的空格去掉
    return container.content.firstChild;
  },
  //新增弟弟./
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  //新增哥哥，默认
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  //新增一个儿子
  append(parent, node) {
    parent.appendChild(node);
  },
  //新加一个爸爸
  wrap(node, parent) {
    dom.before(node, parent); //将爸爸放在node前面
    dom.append(parent, node); //再把爸爸加在node外面。
  },
  //删除一个节点，并且返回保存node的引用
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  //删除所有节点,不使用for的原因是,长度会因为删除一个儿子而世事变话
  empty(node) {
    //const childNodes = node.childNodes 下面一行为简写
    //const { childNodes } = node;
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  //改一个div的title,用于读写属性
  attr(node, name, value) {
    //实现的写一个title
    if (arguments.length === 3) {
      node.setAttribute(name, value);
      //实现读取一个title
    } else if (arguments.length == 2) {
      return node.getAttribute(name);
    }
  },
  //dom.text 用于读写文本内容
  text(node, string) {
    if (arguments.length === 2) {
      //下方写法就是适配
      if ("innerText in node") {
        //判断是否有innerText
        node.innerText = string; //IE版本
      } else {
        node.textContent = string; //其他浏览器
      }
    } else if (arguments.length === 1) {
      if ("innerText in node") {
        //判断是否有innerText
        return node.innerText; //IE版本
      } else {
        return node.textContent; //其他浏览器
      }
    }
  },
  //dom.html用于读写html文本内容
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return innerHTML;
    }
  },
  //dom.style用于修改style属性
  style(node, name, value) {
    if (arguments.length === 3) {
      //dom.style(test,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(test,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        //dom.style(test,{color:'red'})
        let object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  //dom.class.add(node,'blue')用于添加class
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  //dom.on(node,'click',fn)用于添加监听事件
  on(node, evenName, fn) {
    node.addEventListener(evenName, fn);
  },
  off(node, evenName, fn) {
    node.removeEventListener(evenName, fn);
  },
  //查find 用于获取标签或者标签们
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  //dom.parent(node)用于获取父元素
  parent(node) {
    return node.parentNode;
  },
  //dom.children(node)用于获取子元素
  children(node) {
    return node.children;
  },
  //返回他的兄弟姐妹
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  //返回她的弟弟
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  //返回他的哥哥
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  //遍历所有节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  //获取排行老几
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
