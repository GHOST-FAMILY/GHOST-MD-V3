const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bYJUxICb#kc-xWgfGzABmalp-KRkPNOWAe0mg26BtZQAEBB47H7M", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"true" //true or false
};
