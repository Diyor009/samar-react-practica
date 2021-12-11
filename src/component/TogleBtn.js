import React, {useState} from "react";
export default function TogleBtn() {
    const [togleBtn, setTogleBtn] = useState(false)
    return (
        <>                 
        <button
            onClick={() => setTogleBtn(!togleBtn)}
            className="btn btn-secondary"
            >togle btn</button>
        {togleBtn ? <p className="lead">
          You Tube Content
        </p> : null 
        }
        </>

    )
}
