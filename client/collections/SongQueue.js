// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //set an event listener if something is at position 0
    //trigger playFirst
    this.on('add', function(song){
      if (this.length===1){
        this.playFirst();
      }
    }, this);
  
  //remove song on "ended"
    this.on('ended', function(){
      //call on first item dequeue()
      this.models[0].dequeue();
  });

    this.on('dequeue',function(){
      if (this.length >=1 ){
        this.playFirst();
      }
    }, this);
      
  },

  playFirst: function(){

    return this.models[0].play();

  },

});
