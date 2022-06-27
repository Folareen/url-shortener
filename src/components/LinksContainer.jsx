import React,{useState} from 'react'

const LinksContainer = () => {
  const [link, setLink] = useState("")
  const [links, setLinks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function shorten(){
    try{
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      const data = await res.json()
      const newLink = data.result
      // .short_link
      setLinks([...links, newLink])
      setLink("")
      setError(false)
      setLoading(false)
      console.log(newLink)
      // .short_link
    }
    catch{
      setError(true)
      setLoading(false)
    }

  }
  function changeLink(e){
    setLink(e.target.value)
  }

  return (
    <div className="flex flex-col mb-6 -mt-12 ">
      <form action="" className="bg-DarkViolet px-5 py-8 flex justify-between rounded-md relative">
        <input type="text" name="" value={link} onChange={changeLink} id="" placeholder='Shorten a link here...' className={`bg-white rounded-md px-4 py-2 w-3/6 ${error ? "border-2 border-rose-500" : "" }` }/>
        <button type="submit" className={`px-4 py-2 text-white rounded-md font-bold ${loading ? "bg-cyan-200" : "bg-Cyan"}`} onClick={(e) => {
          e.preventDefault();
          if(link.length > 1){
            setError(false)
            shorten();
            setLoading(true)
          }else{
            setError(true)
          }
        }}>{
          loading ? 
          "Loading.." :
          "Shorten It!"
        }</button>
        {
          error ? 
          <p className="text-rose-500 absolute bottom-1">
            Invalid url
          </p>
          : 
          ""
        }

      </form>
      {
        links?
        (
        links.map(
          (item) =>{
            const {short_link, original_link} = item
            return <div className='bg-white mt-5 rounded-md flex flex-col p-3 text-left'>
              <a href='' className="border-b-2 border-DarkViolet py-1">
                {original_link}
              </a>
              <a href='' className='py-1 text-Cyan font-semibold'>
              {short_link}
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