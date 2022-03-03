import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function News(){

    const [data,setData]=useState([])


    useEffect(()=>{
        GetNews()

    },[])

    function GetNews(){
        const url="http://127.0.0.1:8000/api/news"
        axios.get(url).then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        {data.map((item)=>(
             <article key={item.id} >
	
             <img src={item.newsdetail && item.newsdetail.news_image} alt="" id="featuredico" />
             <h1>{item.newsdetail && item.newsdetail.title}</h1>
             <p>{item.newsdetail && item.newsdetail.announce_text}</p>
             {/* <a>Read Me</a> */}
             <Link to={`${item.id}`}>Read Me</Link>
         
         </article>

        ))}
       
        </>

    )
}