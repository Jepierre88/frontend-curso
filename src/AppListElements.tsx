import { useState } from "react"

export default function AppListElements(){
    //LOGICA

    const [list, setList] = useState([{
        id: 1,
        name: "Jean"
    },
    {
        id: 2,
        name: "Maria"
    },
    {
        id: 3,
        name: "Pedro"
    },
    {
        id: 4,
        name: "Luisa"
    },
    {
        id: 5,
        name: "Pratik"
    }
])

    const [search, setSearch] = useState("")

    const addElement = (name: string, id: number) => {
        setList([
            ...list,
            {
                id: id,
                name: name
            }
        ])
    }



    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            {list.map((item)=>{
                return (
                    <h1 key={item.id}>{item.name}</h1>
                )
            }).filter((item)=>{
                return item.props.children.toLowerCase().includes(search.toLowerCase().trim())
            })}
            <button
                onClick={()=>{
                    addElement("Jeansitoooo", list.length + 1)
                }}
            >Agregar nombre</button>
        </>
    )
}