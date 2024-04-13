import React, {useState} from 'react'

export default function About() {

    const [myStyle, SetmyStyle] = useState({
        color : "white",
        background : "black"
    })

    const [btntext, setbtntext] = useState("enable dark mode");

    let toggleStyle = () =>  {
        if(myStyle.color === 'white'){
            SetmyStyle({
                color : "black ",
                background : "white"
            })
            setbtntext("enable light mode")

        }
        else {
            SetmyStyle({
                color : "white",
                background : "black"
            })
            setbtntext("enable dark mode")

        }
    }

     return (
    <div className=' my-3' style={myStyle}>
        <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
        
    </div>
  )
}
