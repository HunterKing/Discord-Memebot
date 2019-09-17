import asyncio
import discord
import os #we use os to traverse file paths.
import re #we use RE to check valid URLs with a regex.
import wget #we use wget to stash a fresh image into /images/.
import urllib
import random
from discord.ext import commands

bot = commands.Bot(command_prefix='!', help_command = None)
TOKEN = '' #Set token to load bot.
ADMIN_ROLE = '' #Set Admin role for some commands. 
GAME = discord.Game("Joel-san, Daisuke!! ~Joel Swanson Dating Simulator~") #Game title for bot.

def fetchRandom():
	i = 0
	image_names = []
	for root, dirs, files in os.walk("./images"):
		for filename in files:
			image_names.append(filename)
			i += 1
	random_index = random.randint(0, i - 1)
	return image_names[random_index]

@bot.event
async def on_ready():
	print('------------------')
	print('Logged in as')
	print(bot.user.name)
	print(bot.user.id)
	print('------------------')
	await bot.change_presence(activity = GAME)

@bot.command()
async def help(ctx):
	str = "```"
	str += "!breaktheconditioning: links video of alex jones screaming\n"
	str += "!frogs: links video of alex jones screaming\n"
	str += "!freshtap: links instructional video on how to make tap water\n"
	str += "!card: fetches a random CS-themed yu-gi-oh card\n"
	str += "!addcard url: downloads the image linked and adds to the !card pool\n"
	str += "```"
	await ctx.send(str)

@bot.command()
async def breaktheconditioning(ctx):
	await ctx.send('https://www.youtube.com/watch?v=p2-4rJmYEfU')
	
@bot.command()
async def frogs(ctx):
	await ctx.send('https://www.youtube.com/watch?v=_ePLkAm8i2s')
	
@bot.command()
async def freshtap(ctx):
	await ctx.send('https://www.youtube.com/watch?v=BdzShsSspC8')

@bot.command()
async def card(ctx):
	imagetosend = "images/" + fetchRandom()
	await ctx.send(file=discord.File(imagetosend))
  
@bot.command()
async def addcard(ctx, arg):
	url = re.findall('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\), ]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', arg)
	if not url:
		await ctx.send("```You did not provide a valid URL.```")
	else:
		try:
			wget.download(url[0], './images/')
			await ctx.send("```New card downloaded.```")
		except urllib.error.HTTPError as e:
			if e.code == 403:
				await ctx.send("```The site threw a 403 error, try again later or use another site.```")

bot.run(TOKEN)