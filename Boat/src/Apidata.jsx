import React, { useState } from 'react'

export const Apidata = () => {
    const [data, setData] = useState({})
    fetch('').then((res) => res.json()).then((response) => console.log(response));
    return (
        <div><h1>Hello</h1>

        </div>
    )
}
