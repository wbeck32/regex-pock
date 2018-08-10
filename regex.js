const stuff = require("./_pocket.pm.small")
const textToChange = [JSON.stringify(stuff)]
let array1 = []
const ma = new RegExp(/\^"is_article:\"([\w\W\-_*+.,]+)/);
const m2 = new RegExp(/("sort_id":\d*,)([\w\W\s\-_*+.,]*)"is_index"/)
const firstSection = new RegExp(/([\w\W\s\-_*+.,]*)("sort_id":\d*,)/)

class Match extends RegExp {
  [ Symbol.match](ttC) {
    const result = RegExp.prototype[Symbol.match].call(this, ttC);
    return result
  }
}

class Replace extends RegExp {
  [ Symbol.replace](ele) {
    const result = RegExp.prototype[Symbol.replace].call(this, ele, firstSection);
    return result;
  }
}
const myData = [];
const duh = Object.entries(stuff);

duh.forEach((ele) => {
  const {resolved_title, resolved_url, excerpt} = ele[1]
  myData.push(meh = {
    resolved_title,
    resolved_url,
    excerpt
  })
})
// console.log(111, myData)

module.export = myData