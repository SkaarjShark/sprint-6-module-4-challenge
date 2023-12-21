import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Photo from './Photo'

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9009/api/apod?api_key=DEMO_KEY')
      .then(res => {
        setPhoto(res.data)
      }).catch(err => console.log(err))
  }, [])
  console.log(photo)

  return (
    <Photo photo={photo}/>
  )
}

export default App
