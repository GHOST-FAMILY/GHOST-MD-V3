const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OQw22CRZ#7gs1XWLpX2dCL4VS40J0fLMasjwpgUKH5XAP9FkfWPI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🧑‍💻🔰 Hi QUEEN-CHOOTY-NELUMI-MD Is Online Now 💻\n*💻 Owner* - QUEEN-CHOOTY-NELUMI-MD\n\n*💻 Owner Number* -94757286833",
SUDO_NB: process.env.SUDO_NB || "94757286833",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

