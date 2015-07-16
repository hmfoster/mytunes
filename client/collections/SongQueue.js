// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //set an event listener if something is at position 0
    //trigger playFirst
    this.on('add', function(song){
      console.log('on add to queue',this.length);
      debugger;
      if (this.length===1){
        this.playFirst();
      }
    }, this);
  },
  playFirst: function(){

    return this.models[0].play();
    //return first item in queue
    //this.model.play();  
  }

});

//[{artist: aaliya, }]