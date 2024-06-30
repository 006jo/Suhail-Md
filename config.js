const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_49_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkeGVsL3p2cll4RnJ6aDFrL2hPa0M5S0JwV01kWmlFaXFEVVBJR25CWThVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY5MzI1MzY5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjdDRTcyNzg3NkVGQjUxQzg4NkQ0MEQ1NENDQjk2QjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1MzUyNTM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjkzMjUzNjk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQzg2RjBFNzA4REU0OUI3NDA2MUYyNDQ0Mjc1MzFDQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUzNTI1NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzQ4QlhCdW5RZDZobzhnU1NBcXI2Z1wiLFxuICBcInBob25lSWRcIjogXCI4ZDM3M2NhNC1kZjFjLTQ0ODgtYjAyMS1hYWJiZTU5YzE5NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMTY3LFxuICAgICAgMTQ3LFxuICAgICAgMTMyLFxuICAgICAgNjYsXG4gICAgICA4NSxcbiAgICAgIDIzNSxcbiAgICAgIDExOSxcbiAgICAgIDE0NCxcbiAgICAgIDg3LFxuICAgICAgMTg2LFxuICAgICAgMTgyLFxuICAgICAgMTE4LFxuICAgICAgMjA3LFxuICAgICAgMTg4LFxuICAgICAgMTQ4LFxuICAgICAgMzIsXG4gICAgICAxMDcsXG4gICAgICA0NSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxMzcsXG4gICAgICAxMDIsXG4gICAgICAxNjcsXG4gICAgICAyLFxuICAgICAgMTk0LFxuICAgICAgMjUyLFxuICAgICAgNTEsXG4gICAgICAxOTEsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDYyLFxuICAgICAgNjEsXG4gICAgICAyMTMsXG4gICAgICAyMzEsXG4gICAgICA1NyxcbiAgICAgIDIxOSxcbiAgICAgIDYyLFxuICAgICAgMjMzLFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2FhZ1pNRkVOSG4rTEVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQZy9DSjVwYXhtTGtIWTQyZ0F6VXNBckZ1TWhZa0NFRC9zQndGRHVDbWxRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI3Y0k2Q0FFUTVHTDcrMkJrVjVZMFZPZUZtQzdvQUVBR2FQWTlPaW9KZDlGYWxlNzQ1R2d5dytHajRVQ0gxRGlpZkY0eWZoNmFRcld4Qm13WUI0VEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxZTXZ6ZU4xTzJ4NzlCWk9TdERESGx6RGRDQWxtM21qU2I5ZkpTWUR2L2VZK0xXUlZyVWhjaG84c2VzdmIvSzZQV0lQM3ZBRGhNVzRacWUyQzFGNUFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjkzMjUzNjk5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLsobDshYlcIixcbiAgICBcImxpZFwiOiBcIjIwOTU1Mzk3MTI4MjY3OjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2OTMyNTM2OTk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MzUyNTM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkdKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCR0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNWGw0KzJpK0JWb21pYlBhQ0wycFB2TzduVGw5a3UxeU9XWmVteThKa3hFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODIwNDI5ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJHSi5qc29uIjogIntcImtleURhdGFcIjpcImlvU3JtUUdwRFYzWDJQTTFmZkZRa2tUN0t2MFd2VXl6bFAxQXVWZ1NTRm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4MjA0Mjk4MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkdLLmpzb24iOiAie1wia2V5RGF0YVwiOlwieVhSMmlqb0Q2MkFHWGZXR1RnZmVXcU1FT1VPQ015aUEvSDR1bGFScDhJST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzgyMDQyOTgxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE1MzUyMjQ5MTE1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkdMLmpzb24iOiAie1wia2V5RGF0YVwiOlwicS9JRUdaQVZWcjl4VGZFcExoano3K012SkZzRWthdlFyNHEwUkltOE1TUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzgyMDQyOTgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUzNTIzMzc4MzdcIn0iCn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
