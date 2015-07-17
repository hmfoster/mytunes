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
      //this.models.shift();
    //delete first item in queue

      //collection.remove(models, [options]) 
  });

    this.on('dequeue',function(){
      //call playNext
      //var song;
      if (this.length >=1 ){
        //song = this
        this.playFirst();
      } else {
        //song = null
        console.log('out of songs');
        debugger;
        this.trigger('stop', this);
      }
    }, this);
    //if the queue is not empty
      //playFirst();
      
  },

  playFirst: function(){

    return this.models[0].play();
    //return first item in queue 
  },

});
