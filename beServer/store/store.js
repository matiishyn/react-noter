var idGenerator = require('./id-generator')

var store = {
    directories: [{
        id: idGenerator.getNext(),//1
        name: 'root'
    }, {
        "parentId": "1",
        "name": "Child Dir 11",
        "id": idGenerator.getNext()//2
    }, {
        "parentId": "1",
        "name": "Child Dir 12",
        "id": idGenerator.getNext()//3
    }, {
        "parentId": "1",
        "name": "Child Dir 13",
        "id": idGenerator.getNext()//4
    }, {
        "parentId": "2",
        "name": "Child Dir 21",
        "id": idGenerator.getNext()//5
    }],
    notices: [{
        "directoryId": 2,
        "title": "Note for Child Dir 11",
        "description": "Some description",
        "tags": "tag1,tag2",
        "id": idGenerator.getNext(),//6,
        "position": 0
    }, {
        "directoryId": 3,
        "title": "Note for Child Dir 12",
        "description": "Some description",
        "tags": "tag1,tag2",
        "id": idGenerator.getNext(),//7,
        "position": 0
    }, {
        "directoryId": 4,
        "title": "Note for Child Dir 13-1",
        "description": "Some description",
        "tags": "tag1,tag2",
        "id": idGenerator.getNext(),//8,
        "position": 0
    }, {
        "directoryId": 4,
        "title": "Note for Child Dir 13-2",
        "description": "Some description",
        "tags": "tag1,tag2",
        "id": idGenerator.getNext(),//9,
        "position": 1
    }, {
        "directoryId": 4,
        "title": "Note for Child Dir 13-3",
        "description": "Some description",
        "tags": "tag1,tag2",
        "id": idGenerator.getNext(),//10,
        "position": 2
    },{
		"directoryId": 1,
		"title": "Created by POSTMAN",
		"description": "Created by POSTMAN description",
		"tags": "test",
		"id": 11,
		"position": 0
	}]
}

module.exports = store