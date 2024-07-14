const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/HITDeveloper2023/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/09bb04e12ce3828e9cd2e.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "212624855939" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50944727644";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212624855939";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212624855939,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZWODlYWDZQZEEvbEhXRkNWeFJPUERqdG5wRkRUZmI2d3lCSnNoU2MzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODRMeFRGWWViUTY4Z3RqbW5hZm9oZHcyUFc3Yy81MjVVbHk4a2tDWGpTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR2ZqWlhPSXYwS1NYemwvMXliZnNvNDBJYTExd1BnUVQ0ZzMveTU1ckVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2L1k4a09zdDJacFVOcmRMZTJTWVZHZ0tSTnQ3cHdWSm1sVzNIdG1tZHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNMTHgvNTRueXlCYzkydGJJRENKcVZGNitSQ3hyUE1sbThwT2U2TXM2a1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJkWDd2dHNXakNuOGFRTlkwY0RJaVBOSDZrenFmazhpck0vTWNCZkNRRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEQ0cEtVTGxhbEZ4R2FkMDc2bG9wQ0Eyb2lTSGRPV3pjMWp1Umw5VURHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVljVHFINFpTWE1abytUWCs0WVI2MTdZbXlVeHVqZmx6WHVCN2pIc0oxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI0bms4OTlkOEJXSDM1eFF1aXhtOW9wR3JKeVJDWUtZaHZFNUxyc2g0em5zN2k5MFp5UXZubXRZTjFqTmZWbGY1VU5tYWRxcUVtNlpzUXVwbWhoVmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IjRpcHc3TkFKN0lZOG1yNERBYlpVUVJNVGVTbFNHOXR0VmY5YjJuKzBJK0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldUZGFOR3RlUnFDakRIZFlUZGNwMHciLCJwaG9uZUlkIjoiN2I1ZGRlZTktMjQ5OC00Y2QyLTk0MWEtMGQxY2VhMWZmNGE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRCaVVoL3ppaWxmUVJCL2VPYU0rZWt3R2hqST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Tzl0QXUvbDJIWmVLd2VnRDlkYVV4RENJSTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1hOWjJWS0UiLCJtZSI6eyJpZCI6IjIxMjYyNDg1NTkzOToxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJoYW16YWFtaXJuaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmV5c09JRUVMaTB5N1FHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWlYODY1aCtJTTFIbncyVGxNdkJBNDl4YzNZTFRjWnZ0c0p0Ym1rNC9SND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGZzSHMvK0Y3eFYySjhYUnpHYjZySEVHSmZ6dmZ5ZkJjNHQrQWpVYkhwbjU3WFZ3ZjErK1RrMGp1VnA4TGpacWZIM0dpRlF3S01zMmJpQnVoYlI4RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InF0bWxqNks1WEhtcCtyb2FsSUZOeTBDSmZaRW9xVSt1aHE4VEpDK0krRkRoUmtsOHZ3RlBiTlY3dzJwdUtldkgvYklNMHQ2VEYzOEFpUHZvSnoxSmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjI0ODU1OTM5OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZbC9PdVlmaUROUjU4Tms1VEx3UU9QY1hOMkMwM0diN2JDYlc1cE9QMGUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5MDAxNjV9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© 𝐇𝐀𝐈𝐓𝐈𝐀𝐍 𝐈𝐓 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʜɪᴛᴅᴇᴠ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Hitdev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
