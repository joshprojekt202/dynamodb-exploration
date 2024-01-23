const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const table = "Sorcerers";

// Function to create a sorcerer
function createSorcerer(sorcererId, name, origin) {
    const params = {
        TableName: table,
        Item: {
            "SorcererId": sorcererId,
            "Name": name,
            "Origin": origin // Origin: book, movie, game, etc.
        }
    };

    dynamoDb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add sorcerer", name, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", name);
        }
    });
}

// Function to retrieve a sorcerer
function getSorcerer(sorcererId) {
    const params = {
        TableName: table,
        Key: {
            "SorcererId": sorcererId
        }
    };

    dynamoDb.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

// Creating Multiple Sorcerers
createSorcerer("1", "Gandalf", "The Lord of the Rings");
createSorcerer("2", "Dumbledore", "Harry Potter");
createSorcerer("3", "Merlin", "Arthurian Legend");
createSorcerer("4", "Saruman", "The Lord of the Rings");
createSorcerer("5", "Dr. Strange", "Marvel Comics");
createSorcerer("6", "Ulrich of Craggenmoor", "Dragonslayer");
createSorcerer("7", "Raistlin Majere", "Dragonlance");
createSorcerer("8", "Elminster Aumar", "Forgotten Realms");
createSorcerer("9", "Morgana le Fay", "Arthurian Legend");
createSorcerer("10", "Rincewind", "Discworld");
createSorcerer("11", "Yennefer of Vengerberg", "The Witcher");
createSorcerer("12", "Zeddicus Zu'l Zorander", "Sword of Truth");
createSorcerer("13", "Bayaz", "The First Law");
createSorcerer("14", "Belgarath", "The Belgariad");

// Retrieving a Couple of Sorcerers (Examples)
getSorcerer("7"); // Retrieves Raistlin Majere
getSorcerer("11"); // Retrieves Yennefer of Vengerberg