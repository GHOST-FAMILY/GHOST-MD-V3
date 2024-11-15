const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNpnhQoI#YAgIElf8QSXQLz4MLUjk_dVFk0asFnOUgI1avt34D18",
MONGODB: process.env.MONGODB || "mongodb+srv://Saka:Saka@cluster0.jadwggo.mongodb.net/?retryWrites=true&w=majority",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg"
};

