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
    // TODO implement
    const response = {statusCode: null, body: null};
    try {
        /* code */
        let result;
        if(id){
            result = await peopleModel.query({ id }).exec();
        } else {
            result = await peopleModel.scan().exec()
        }
        response.statusCode = 200;
        response.body = JSON.stringify(result)
    } catch (e) {
        response.statusCode = 500;
        response.body = JSON.stringify(e.message)
    }
    return response;
};
