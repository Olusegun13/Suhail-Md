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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347036224797";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_16_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0U4T2tkUi8zL0ZXclRtVEx5a09HQXB5RjFQUXpha0VVakhIYVc1QkNTVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZVRIUzJJakFTVi0tRWhlV3pUQTU3QVwiLFxuICBcInBob25lSWRcIjogXCJjZTI2OWZkOS1iNTcyLTRlODktOTg4Yi1lYzUyNTIzZmFiZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgOTIsXG4gICAgICAxMzIsXG4gICAgICAxMDksXG4gICAgICAxMDAsXG4gICAgICAxODEsXG4gICAgICAxNyxcbiAgICAgIDE5MixcbiAgICAgIDExOCxcbiAgICAgIDI1MSxcbiAgICAgIDI0MSxcbiAgICAgIDIyNixcbiAgICAgIDMsXG4gICAgICAxMjUsXG4gICAgICAzNSxcbiAgICAgIDY5LFxuICAgICAgMTIwLFxuICAgICAgNzIsXG4gICAgICAxMixcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDIwMixcbiAgICAgIDExNCxcbiAgICAgIDExNSxcbiAgICAgIDI0NSxcbiAgICAgIDIzMyxcbiAgICAgIDI1LFxuICAgICAgNTAsXG4gICAgICAxMDYsXG4gICAgICAxNzMsXG4gICAgICAyNDAsXG4gICAgICAwLFxuICAgICAgMTksXG4gICAgICAyNyxcbiAgICAgIDIxLFxuICAgICAgMjA5LFxuICAgICAgMTc0LFxuICAgICAgMTU0LFxuICAgICAgMixcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhaOVFKTFBBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM2MjI0Nzk3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjM0Mjg4MzcyNjk2MDU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkcxaENNUW1adVlzd1lZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyRk4xcklGd050YzVmdHlPR01nYlhXa0tkUG5LQ2hoa0sxY2hUZDFYbzFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxobkUrWUsrakFaZlNhVFJrcG4wS21meS9hcmY0anlMSitGd0xjNGV6QW9ka0FXZkRJVk1Fd0VFUElublNlTTdmQ054ZHhvb0tTUG8wY25XYmJvS0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllkMWkvUGtiQndtM1NPRjdNd01RQWJyclNxOEZuUEZJZm5zY3k3Qk9GQllkNnpCQTVTOG11RHYzSDk1SmtvTUtZQlhtRWNHZWpXWnNsQTNDaUR2MURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzYyMjQ3OTc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5NjQxODhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
