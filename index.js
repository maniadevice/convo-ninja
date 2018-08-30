
function init_bot() {
    var botui = new BotUI('chat-bot');
    var name;
    botui.message.bot({
        delay: 500,
        content: 'Hello there!'
    })

    .then (function(){
        return botui.message.bot({
            // human: true,
            delay: 1000,
            content: 'We\'re Convo Ninja.'
        })
    })

    .then (function(){
        return botui.message.bot({
            // human: true,
            delay: 1500,
            content: 'We let you create beautiful pages, to help you understand your audience.'
        })
    })
    
    .then (function(){
        return botui.message.bot({
            // human: true,
            delay: 3500,
            content: 'Just like this one...'
        })
    })
    
    .then (function(){
        return botui.message.bot({
            // human: true,
            delay: 2000,
            content: 'Right then! Who are we talking to, today?'
        })
    })

    .then(function () {
        return botui.action.text({
          delay: 1000,
          action: {
            size: 10,
            // icon: 'thermometer-empty',
            // value: temperature, // show the current temperature as default
            // sub_type: 'number',
            placeholder: 'Your Name'
          }
        })
    })

    .then (function(result){
        
        name = result.value;
        return botui.message.bot({
            // human: true,
            delay: 2000,
            content: 'Awesome! Would you like to know more about us, when we are ready?'
        })
    })

    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Yes, please!',
          value: 'yes'
        }, {
          text: 'No, thanks!',
          value: 'no'
        }]
      })
    })

    .then (function(result){

        response = result.value;

        if (response == 'yes') {
            record_email();

        } else {
            return botui.message.bot({
                // human: true,
                delay: 1500,
                content: 'Thanks for dropping by, ' + name + '. Bye!'
            })
        }

    })


var record_email = function() {

    botui.message.bot({
        // human: true,
        delay: 1500,
        content: 'That\'s great, ' + name + '. Please drop your email address below.'
    })

    .then(function() {    
        return botui.action.text({
            delay: 2000,
            action: {
                size: 10,
                icon: 'thermometer-empty',
                // value: temperature, // show the current temperature as default
                sub_type: 'email',
                placeholder: 'Your Email'
            }
        })
    })

    .then(function(result){
        email = result.value;
        return botui.message.bot({
            delay: 3000,
            loading: true, // pretend like we are doing something
            content: 'All good! We\'ll get in touch soon.'
        })
    })

    .then(function(result){
        return botui.message.bot({
            delay: 2000,
            content: 'Thanks and take care, ' + name + '.'
        })
    })

}

}