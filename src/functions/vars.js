import Album from '../components/album'
import Artist from '../components/artist'
import Song from '../components/song'
import {createRef} from 'react'

export const lastfmKey = '5c994f20a333e6a28901af6b8cc9929b'

//Used in getQuestion()
export const questions =
[{text: "Which of these is your most listened to album?", type: "Album"},
 {text: "Which of these is your most listened to artist?", type: "Artist"},
 {text: "Which of these is your most listened to song?", type: "Song"}]

//dictionary used in getComponents() to facilitate the use of methods for each type of component, summarizing everything in just one function
export const compHelper = {
  Album: {component: (res, index, status) => <Album res={res[index]} status={status} keyValue={index} ref={createRef()} />,
          method: "user.gettopalbums", 
          path: (res) => res["topalbums"]["album"]},

  Artist: {component: (res, index, status) => <Artist res={res[index]} status={status} keyValue={index} ref={createRef()} />, 
           method: "user.gettopartists",
           path: (res) => res["topartists"]["artist"]},

  Song: {component: (res, index, status) => <Song res={res[index]} status={status} keyValue={index} ref={createRef()} />,
         method: "user.gettoptracks",
         path: (res) => res["toptracks"]["track"]}
}
