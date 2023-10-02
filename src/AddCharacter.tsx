import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";

type AddCharacterProps = {
    saveCharacter: (characterToSave: Character) => void
}

export default function AddCharacter(props: AddCharacterProps) {

    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function onStatusChange(event: ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.value)
    }

    function onCharacterSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newCharacter: Character = {
            id:0,
            name: name,
            status: status
        }

        props.saveCharacter(newCharacter)
    }

    return (
        <form onSubmit={onCharacterSave}>
            <input placeholder="Name" required value={name} onChange={onNameChange}/>
            <input value={status} onChange={onStatusChange}/>
            <button>Save</button>
        </form>
    )
}