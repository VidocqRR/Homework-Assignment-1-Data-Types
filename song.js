//My HomeWork song.js

// Bruno Mars = The Lazy Song

// Song info:
  var  Artist = 'Bruno Mars'; // this is a string
 var Song = 'The Lazy song';  //  this is a string
 var Genre =	'Reggae';
 var Released = 'February 15';
 var Year = 2011;                //this a number
 var  Format = 'CD single, digital download';
 var Lenght = 3.15;     //This is a float
 var Label = 'Atlantic Elektra';  // This is a strign  
 var Producer = 'The Smeezingtons';   // This is a strign


     var song = {
         Artist: Artist,
         Song : Song,
         Genre : Genre,
         /**
          * @return {string}
          */
         Hystory:  function () {
             return 'The song is' + ' ' + this.Song + ' Artist :' + this.Artist + ' and' + ' Genre:' + this.Genre;
         }




 }
    console.log(song.Hystory())   
	
	//This is an Object

function solve() {
         return ' The Year is ' + Year;
}
console.log(solve())
 //This is a function
/*
* The Lazy Song" is a song recorded by American singer-songwriter Bruno Mars for his debut studio album Doo-Wops & Hooligans (2010).
* It was serviced to contemporary hit radios in the United States on February 15, 2011 as the album's third single by Atlantic and Elektra.
* Development of "The Lazy Song" began while Bruno Mars, Philip Lawrence and Ari Levine were hanging around the studio and didn’t feel like working.
*    Mars wrote the song in collaboration with singer-songwriter K'naan and his production team The Smeezingtons, who also produced the track.
* Musically, "The Lazy Song" has been described as borrowing "heavily from roots reggae", while lyrically it is an anthem to laziness.
*/

// The Lazy Song - Wikipedia
