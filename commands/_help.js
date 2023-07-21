/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.1 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 
 
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')


    //---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
        pattern: "setcmd",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel,text) => {
  let a = text.split(",")
  if (!text || a.length < 2 ) return await citel.send("*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name,Cmd_Name_*")
    
    let newAlias = a[0].trim().toLowerCase()
    let cmdName = a[1].trim().toLowerCase()
  if (global.setCmdAlias[newAlias]) return await citel.send(`*_"${newAlias}" Already set for "${global.setCmdAlias[newAlias]}" Cmd, Please try another name_*`)
  
  const cmd = sᴜʜᴀɪʟ_ᴍᴅ.commands.find((cmd) => cmd.pattern === (cmdName)) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
   if(cmd)
   {
     global.setCmdAlias[newAlias] = cmdName;
     return await citel.send(`*_Cmd "${global.setCmdAlias[newAlias]}" Succesfully set to "${newAlias}"_*`)
   }else return await citel.send(`*_Provided Cmd( ${cmdName}) not found in bot cmds. Please Provide Valid cmd Name_*`)

});


//------------------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```Testing Ping!!!```');
        var final = new Date().getTime();
        return await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
    });


//------------------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
           // react: "👀",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) 
            {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (cmd) //if(!cmd) return await citel.reply("*❌No Such commands.*");
                {
                      arr.push(`*🍁Command:* ${cmd.pattern}`);
                      if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                      if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                      if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                      if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                      return await citel.reply(arr.join('\n'));
                }
            }
                const cmds = {}
                commands.map(async(command, index) => 
                {
                     if (command.dontAddCommandList === false && command.pattern !== undefined)
                     {
                          if (!cmds[command.category]) cmds[command.category] = []
                          cmds[command.category].push(command.pattern)
                     }
                })
                const time = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Asia/karachi').locale('id')
                const date = moment.tz('asia/karachi').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《  *${Config.botname}*  》────⊷
│ ╭──────✧❁✧──────◆
│ │ Theme:- ${tlang().title}
│ │ Owner:- ${Config.ownername}
│ │ Plugins:- ${commands.length}
│ │ Uptime:- ${runtime(process.uptime())}
│ │ Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ Time:- ${time}
│ │ Date:- ${date}
│ ╰──────✧❁✧──────◆
╰══════════════════⊷\n
` ;
             
              for (const category in cmds) 
              {
                 str += `╭────❏ *${tiny(category)}* ❏\n` ;
                 if(text.toLowerCase() == category.toLowerCase()){ str = `╭─────❏ *${tiny(category)}* ❏\n` ;      
                      for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                      str += `╰━━━━━━━━━━━━━──⊷\n`  ;
                      break ;
                 }
                 else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                       str += `╰━━━━━━━━━━━━━━──⊷\n`  ; 
                 }

              }//For Looop end
                str += Config.caption  
                let buttonMessaged = 
                {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().footer,
                    headerType: 4,
                };
                return await Void.sendMessage(citel.chat, buttonMessaged ,{ quoted : citel});
})
    //---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "🥀"
         },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 *${Config.botname}* 〙────⊷     
┃ ✭ Theme: ${tlang().title}
┃ ✭ Prefix: ${prefix}
┃ ✭ Owner: ${Config.ownername}
┃ ✭ Commands: ${commands.length}
┃ ✭ Uptime: ${runtime(process.uptime())}
┃ ✭ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
╰━━━━━━━━━━━━━━⊷\n`

            for (let i = 0; i < commands.length; i++) 
            {
                 if(commands[i].pattern==undefined) continue
                 str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n`                // ${i+1} 
                 str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
            }

            
 
 //str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str + Config.caption ,footer: tlang().footer, headerType: 4 })
        }
    )
    //---------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const thmb = await getBuffer(global.THUMB_IMAGE)
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: thmb,
                    mediaType: 1,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//------------------------------------------------------------------------------------
const readDirectory = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => { if (err) {reject('Error reading directory'); }else { resolve(files); }  });
  });
};
//------------------------------------------------------------------------------------
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    //react: "✨",
    filename: __filename
},
async(Void, citel, text ,{isCreator }) => {
 if(!isCreator) return citel.reply("*Ahh Sorry, Only Owner Can Use This Cmd*")
 if(!text) return citel.reply("*Uhh PLease, Provide A Command/Directory*")
 if(text.startsWith("."))
 {
    let res="*------------- FILE MANAGER -------------*\n"
    try {
          const files = await readDirectory(text);
          files.forEach(file => { res += file + '\n'; });
          await citel.reply(res.toString());
    } catch (error) {  citel.reply(error); }
      return;
 }
 
 
 const { commands } = require('../lib');
 
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
