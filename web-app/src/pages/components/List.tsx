import { useState } from "react"

export default function List() {

    const [carsList, setCarsList] = useState([])

    async function getCarsList() {
        return await fetch("http://localhost:3001/cars/",
            {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }
        )
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setCarsList(res)
            })
    }



    return (
        <>
            <p> {carsList}</p>
        </>
    )
}