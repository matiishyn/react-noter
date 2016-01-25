var idGenerator = require('./id-generator')

var store = {
  directories: [{
    id: idGenerator.getNext(),
    name: 'root'
  },{
      "parentId": "1",
      "name": "Child Dir 11",
      "id": idGenerator.getNext()//1
  },{
      "parentId": "1",
      "name": "Child Dir 12",
      "id": idGenerator.getNext()//2
  },{
      "parentId": "1",
      "name": "Child Dir 13",
      "id": idGenerator.getNext()//3
  },{
      "parentId": "2",
      "name": "Child Dir 21",
      "id": idGenerator.getNext()//4
  }],
  notices: []
}

module.exports = store
