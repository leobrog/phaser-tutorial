demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF0022';
        console.log('state5');
        
        addChangeStateEventListeners();
    },
    update: function(){}
};