const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "age": Number,
    "phone": String
});

const peopleModel = dynamoose.model('lab18', schema)

exports.handler = async(event) => {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const response = {statusCode: null, body: null}
    try {
        let parsedBody = JSON.parse(event.body);
        console.log('parsed body',parsedBody);
        let result = await peopleModel.update({id}, parsedBody)
        response.statusCode = 200;
        response.body = JSON.stringify(result)
    } catch (e) {
        response.statusCode = 500;
        response.body = JSON.stringify(e.message)
    }
    return response;
};