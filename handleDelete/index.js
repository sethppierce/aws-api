const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "age": Number,
    "phone": String
});

const peopleModel = dynamoose.model('lab18', schema)

exports.handler = async(event) => {
    const response = {statusCode: null, body: null}
    const id = event.pathParameters ? event.pathParameters.id : null;
    try {
        await peopleModel.delete(id)
        response.statusCode = 204;
    } catch (e) {
        response.statusCode = 500;
        response.body = JSON.stringify(e.message)
    }
    return response;
};