demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF0022';
        console.log('state9');
        
        addChangeStateEventListeners();
    },
    update: function(){}
};