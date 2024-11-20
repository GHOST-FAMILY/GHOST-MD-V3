const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "bYJUxICb#kc-xWgfGzABmalp-KRkPNOWAe0mg26BtZQAEBB47H7M",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "I'Am Online Now 🧚‍♂️",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE:"true" 
};
