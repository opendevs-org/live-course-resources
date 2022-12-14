import { useState } from "react"

export const Input = ({ label, keyUsed }) => {
    return (
        <div>
            <label>label = {label}, key = {keyUsed}</label>{" "}

            {/* Try adding some value here & then add new to the beginning */}
            <input />
        </div>
    )
}
