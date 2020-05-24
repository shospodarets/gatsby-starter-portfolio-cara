exports.handler = function (event, context, callback) {
    try {
        const {name} = JSON.parse(event.body);
    } catch (err) {
        callback(null, {
            statusCode: 200,
            body: `"name" parameter is expected`
        });
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg: "Thanks for visiting " + name})
    });
}

