import axios from 'axios'
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const RickAndMorty=()=>{
    const [url,setUrl]=useState('https://rickandmortyapi.com/api/character/?name=')
    const [search, setSearch]=useState('')
    const [result, setResult]=useState([])

    const fetchData=async ()=>{
        try{
            const responce=await axios(`${url}${search}`)
            const result = await (responce.data.results)
            setResult(result)
            console.log(result)
            console.log(responce)
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [search]);

    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>

            {result.map((elem,index)=>(
                <section key={index}>
                    <p>{elem.name}</p>
                    <img src={elem.image} alt=""/>
                    <p></p>
                </section>
            ))}
        </div> 
    );
}

export default RickAndMorty