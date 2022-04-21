const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

//put your token here
const token = 'OTY1MzkwODA0MjQ1OTQyMjg0.YlygPw.FvZ-ocnChzqkrfPEk1yLApxD_kA';

const client = new Discord.Client({
      intents: [ "GUILDS","GUILD_MESSAGES","DIRECT_MESSAGES"]
 })

 
//bot prefix
const PREFIX = '!';


 client.on('ready', () => {
   console.log('This bot is ready!');
  })
 

//discord message
client.on("messageCreate",(message)=>{
 let args = message.content.substring(PREFIX.length).split(" ");
    
 switch (args[0]) { 
	case 'rules':
	//bot reply to channel
	  message.reply({ embeds: [exampleEmbed] });
		break;

	case 'dmrules':
	//bot dm command
	message.author.send({ embeds: [exampleEmbed] });
	break;
    }
 
  })

const exampleEmbed = new MessageEmbed()
  	//embed color left side
	.setColor('#ecad68')
	//.setTitle('Welcome')*editable
	
	//.setDescription('SERVER RULES')*editable
	// upper right image link
	//.setThumbnail('https://i.imgur.com/Pu3LpZp.jpeg')*editable

	.addFields(
		{ name: 'PAKIUSAP:', value: 'Palaging mag-verify sa mga kumakausap sa inyo dito sa Discord. Maraming pwedeng gumaya sa profile ng mga Moderators.' },
		{ name: '\u200B', value: '\u200B' },
		//{ name: 'MAHALAGANG PAALALA:', value: 'Huwag ka pupunta sa mga links na di ka sigurado kung ano iyon maaring pishing site ang binibigay sayo at huwag ibibigay kahit kanino at kahit saan ang inyong SEED PHRASE / SECRET RECOVERY PHRASE. Hindi po namin ito hihingin sa inyo kahit anong mangyari. Kapag may humingi sa inyo, siguradong SCAM ito. Wala na po kaming magagawa kung magpapa-loko kayo kahit alam mong sinasamantala ka na pero umaasa ka pa din.'},
		//{ name: '\u200B', value: '\u200B' },
		//{name: 'Note:', value: 'Our Staff, Mod, Admin, Support, etc. will never message you first.'},
    {name: 'I.',value: "You are obligated to follow Discord's [terms of service](https://discord.com/terms)."},
    //{name:'II.', value : " Our rules are based on Discord's [community guidelines](https://discord.com/guidelines) and have to be respected."}
	)
	

	.setTimestamp()





            
 //bot initalize                       
client.login(token);

