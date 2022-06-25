import React,{useState} from 'react'

const LinksContainer = () => {
  const [link, setLink] = useState("")
  const [links, setLinks] = useState([])

  async function shorten(){
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    const data = await res.json()
    const newLink = data.result.short_link
    // .short_link
    setLinks([...links, newLink])
    setLink("")
    console.log(links)
  }
  function changeLink(e){
    setLink(e.target.value)
  }

  return (
    <div classname="bg-Cyan">
      <form action="" classname="bg-DarkViolet">
        <input type="text" name="" value={link} onChange={changeLink} id="" placeholder='Shorten a link here...' classname="bg-DarkViolet"/>
        <button type="submit" classname="bg-DarkViolet" onClick={(e) => {
          e.preventDefault();
          shorten()
        }}>Shorten It!</button>
      </form>
      {
        links?
        links.map(
          (item) =>{
            <div className='bg-Cyan'>
              {item}
            </div>
          }
        )
        :
        ""
      }
    </div>
  )
}

export default LinksContainer