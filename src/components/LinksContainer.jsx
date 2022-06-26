import React,{useState} from 'react'

const LinksContainer = () => {
  const [link, setLink] = useState("ya")
  const [links, setLinks] = useState(["heyyyyy", "hiiiii"])

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
    <div className="flex flex-col mb-6 -mt-12 ">
      <form action="" className="bg-DarkViolet p-5 flex justify-between rounded-md">
        <input type="text" name="" value={link} onChange={changeLink} id="" placeholder='Shorten a link here...' className="bg-white rounded-md px-4 py-2 w-3/6"/>
        <button type="submit" className="bg-Cyan px-4 py-2 text-white rounded-md font-bold" onClick={(e) => {
          e.preventDefault();
          shorten();
        }}>Shorten It!</button>
      </form>
      {
        links?
        (
        links.map(
          (item) =>{
            return <div className='bg-white mt-5 rounded-md flex flex-col p-3 text-left'>
              <a href='' className="border-b-2 border-DarkViolet py-1">
                {link}
              </a>
              <a href='' className='py-1 text-Cyan font-semibold'>
              {item}
              </a>
              <button className='bg-Cyan rounded-lg py-2 text-white font-bold '>
                Copy
              </button>
            </div>
          }
        )
        )
        :
        ""
      }
    </div>
  )
}

export default LinksContainer