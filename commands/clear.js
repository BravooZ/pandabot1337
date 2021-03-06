exports.run = (bot, message, args, func) => {

    async function purge() {
        message.delete(); // Lets delete the command message, so it doesnt interfere with the messages we are going to delete.

        // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
        if (!message.member.roles.find("name", "🎩Fundador🎩")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('Você precisa do \`🎩Fundador🎩\` role para usar este comando.'); // This tells the user in chat that they need the role.
            return; // this returns the code, so the rest doesn't run.
        }

        // We want to check if the argument is a number
        if (isNaN(args[0])) {
            // Sends a message to the channel.
            message.channel.send('Por favor, use um número como seus argumentos. \n Uso: ' + prefix + 'clear <quantidade>'); //\n means new line.
            // Cancels out of the script, so the rest doesn't run.
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
        console.log(fetched.size + ' mensagens encontradas, excluindo...'); // Lets post into console how many messages we are deleting

        // Deleting the messages
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

    }

    // We want to make sure we call the function whenever the purge command is run.
    purge(); // Make sure this is inside the if(msg.startsWith)

  }
