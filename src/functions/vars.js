import Album from '../components/album'
import Artist from '../components/artist'
import Song from '../components/song'

export const lastfmKey = '5c994f20a333e6a28901af6b8cc9929b'

//Used in getQuestion()
export const questions =
[{text: "Which of these is your most listened to album?", type: "Album"},
 {text: "Which of these is your most listened to artist?", type: "Artist"},
 {text: "Which of these is your most listened to song?", type: "Song"}]

//object used in getComponents() to facilitate the use of methods for each type of component, summarizing everything in just one function
export const compHelper = {
  Album: {component: Album,
          method: "user.gettopalbums", 
          path: (res) => res["topalbums"]["album"]},

  Artist: {component: Artist, 
           method: "user.gettopartists",
           path: (res) => res["topartists"]["artist"]},

  Song: {component: Song,
         method: "user.gettoptracks",
         path: (res) => res["toptracks"]["track"]}
}
