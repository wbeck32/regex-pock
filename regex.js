
module.exports = function buildIt() {
  const stuff = require("./newman/newman-run-report-2018-08-13-04-20-41-320-0.json")
  const myData = [];
  const duh = JSON.stringify(stuff)
  const duh2 = JSON.parse(duh)
  const duh3 = duh2.collection.item[0].response[0].body
  const myJunk = duh3.split('"is_article"')

  myJunk.forEach((ele) => {
    const split2 = ele.split('"resolved_title":"')[1] || ''
    const title = split2.split('","resolved_url":"')[0] || ''
    const exc = split2.split('","excerpt":"') || ''
    const url = exc[0].split('","resolved_url":"') || ''
    const myObj = {
      resolvedTitle: title.toString(),
      resolvedUrl: url[1],
      excerpt: exc[1]
    }
    const {resolvedTitle, resolvedUrl, excerpt} = myObj
    return (resolvedTitle && resolvedUrl) ? myData.push(meh = {
      resolvedTitle,
      resolvedUrl,
      excerpt
    }) : undefined
  })
  return myData
}
//newman run ./newman/_pocket_get_my_stuff.postman_collection.json --environment ./newman/_pocketAPI.postman_environment.json -g ./newman/_pocketAPI.postman_globals.json -r cli,json -n 3