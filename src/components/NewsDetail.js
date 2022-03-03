import axios from "axios"
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
export default function NewsDetail(){

    const [data,setData]=useState([])

    const paramsInUrl = useParams()

    function GetDetail(){
        const url =`http://127.0.0.1:8000/api/news/${paramsInUrl.id}`
        axios.get(url).then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        GetDetail()
    },[])



    return(
        <>
        <article class="singlepage" id="featured">
        <h1>{data.newsdetail && data.newsdetail.title}</h1>
           <img class="headerpic"  src={data.newsdetail && data.newsdetail.news_image} alt="" id="featuredico" />
            
            <p>{data.newsdetail && data.newsdetail.announce_text}</p> 


                {(data.newsdetail && data.newsdetail.content) && data.newsdetail.content.map((itemInContent)=>{
                    return(
                        <>
                        <h4>{itemInContent.by_journalist && itemInContent.by_journalist}</h4>
                        <h3 style={{color:"red"}}>{itemInContent.quote && itemInContent.quote}</h3>
                        <img src={itemInContent.medias && itemInContent.medias}/>
                        {itemInContent.iframelinktwitter &&  <iframe src={itemInContent.iframelinktwitter && itemInContent.iframelinktwitter}></iframe> }
                       
                       </>
                        
                    )
                }) }

                

                
                </article>
                </>
    )
}