import { useEffect, useState } from "react"

function Forms() {
    async function cadastrarCarro(e: any) {
        e.preventDefault()
        const carro: Car = {
            name: _name,
            brand,
            color,
            price
        }
        console.log(carro)
        await fetch(
            "http://localhost:3001/cars/", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(carro)
        }
        )
            .catch((error) => console.log(error))
            .then((response) => console.log(response))

    }
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
            
    }


    const [_name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [carsList, setCarsList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/cars/",
            {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setCarsList(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);


    return (
        <div>
            <form onSubmit={async (e) => {
                cadastrarCarro(e)
                const newCarsList = await getCarsList()
                setCarsList(newCarsList)

            }}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(e) =>
                            setName(e.target.value)
                        } />
                    </label>
                </div>
                <div>

                    <label>
                        Brand:
                        <input type="text" name="brand" onChange={(e) =>
                            setBrand(e.target.value)
                        } />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="text" name="price" onChange={(e) =>
                            setPrice(e.target.value)
                        } />
                    </label>
                </div>
                <label>
                    Color:
                    <input type="text" name="color" onChange={(e) =>
                        setColor(e.target.value)
                    } />
                </label>
                <div>
                    <input type="submit" value="Submit" />

                </div>
            </form>
            <p> {JSON.stringify(carsList)}</p>
        </div>
    )
}

export default Forms

