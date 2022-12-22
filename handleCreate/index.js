const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "age": Number,
    "phone": String
});

const peopleModel = dynamoose.model('lab18', schema)

exports.handler = async(event) => {
    let parsedBody = JSON.parse(event.body);
    console.log('parsed body',parsedBody);
    // TODO implement
    const response = {statusCode: null, body: null};
    try {
        /* code */
        let result = await peopleModel.create(parsedBody)
        response.statusCode = 200;
        response.body = JSON.stringify(result)
    } catch (e) {
        response.statusCode = 500;
        response.body = JSON.stringify(e.message)
    }
    return response;
};
