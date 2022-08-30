import React,{useState, useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import {useInView } from "react-intersection-observer";


const LinksContainer = () => {
  const [link, setLink] = useState("")
  const [links, setLinks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const control = useAnimation();
  const [ref, inView] = useInView();


  const linksVariants = {
    hidden: { scaleY: 0, opacity: 0},
    visible: {scaleY: 1, opacity: 1, transition: {duration: 1}}
  }

  useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);

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

  function copyLink(link){
    navigator.clipboard.writeText(link).then(() => {
        alert("Copied to clipboard");
    }
    )
  }



  return (
    <motion.div className="flex flex-col mb-6 -mt-12 lg:mx-40 " initial='hidden' animate={control} ref={ref} variants={linksVariants}>
      <form action="" className="bg-DarkViolet px-5 py-8 flex rounded-md relative lg:flex-row flex-col link--form">
        <input type="text" name="" value={link} onChange={changeLink} id="" placeholder='Shorten a link here...' className={`bg-white rounded-md px-4 py-2 w-full lg:mx-4 sm:mb-3 ${error ? "border-2 border-rose-500" : "" }` }/>
        <button type="submit" className={`px-4 py-2 h-max text-white rounded-md font-bold ${loading ? "bg-cyan-200" : "bg-Cyan"} min-w-max`} onClick={(e) => {
          e.preventDefault();
          if(link.length > 1){
            setError(false)
            shorten();
            setLoading(true)
          }else{
            setError(true)
          }
        }} disabled={loading}>{
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
          (item, index) =>{
            const {short_link, original_link} = item
            return <div className='bg-white mt-5 rounded-md flex flex-col p-3 text-left lg:flex-row lg:justify-between' key={index}>
              <a href={original_link} className="border-b-2 border-DarkViolet py-1 lg:border-none text-DarkViolet font-semibold">
                {original_link}
              </a>
              <a href={short_link} className='py-1 text-Cyan font-semibold'>
              {short_link}
              </a>
              <button className='bg-Cyan rounded-lg py-2 text-white font-bold min-w-max block px-6' onClick={()=>copyLink(short_link)}>
                Copy
              </button>
            </div>
          }
        )
        )
        :
        ("")
      }
    </motion.div>
  )
}

export default LinksContainer