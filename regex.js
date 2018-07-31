
const stuff = require('./_pocket.pm.small')
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

const f = new Match(textToChange).toString();
console.log('commit')
const fSpl = f.split("resolved_title")
let finalStuff = {}
const fuckNugget = []
const ugh = fSpl.forEach((i) => {
  const split = i.split("is_article")[0]
  const quote = split.split('"')
  // quote[0] = 'resolved_title'
  finalStuff.resolved_title = quote[2]
  finalStuff.resolved_url = quote[6]
  finalStuff.excerpt = quote[10]
  console.log(888, finalStuff)
  fuckNugget.push(finalStuff)
// console.log(123, fuckNugget[0])
// return fuckNugget;
})
console.log(333333, fuckNugget, ugh)