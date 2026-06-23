import { useState } from "react"

export default function DisplayToggle() {
    const [visible, setVisible] = useState(true)

    function toggle() {
        setVisible(!visible)
    }

    return (
        <>
            <button onClick={toggle}>{!visible ? "Show" : "Hide"}</button>

            {visible &&
                <p>Now you see me!</p>
            }

            {!visible &&
                <p>(Now you don't! If you imagine this is no longer here that is... the important thing is that it toggles)</p>
            }
        </>
    )
}