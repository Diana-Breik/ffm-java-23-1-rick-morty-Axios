import React from "react";
import {Character} from "./characters.ts";
import {useParams} from "react-router-dom";


type CharacterDetailsProps = {
    characters: Character[];

};

export default function CharacterDetails(props: CharacterDetailsProps) {


    const urlParams = useParams()
    const currentCharacter = props.characters.find((character) => (character.id.toString() === urlParams.id))

    return (
        <div className={"character-card"}>
            {currentCharacter
                ? <>
                    <h2>Character Details</h2>
                    <p>Name: {currentCharacter.name}</p>
                    <p>{currentCharacter.species}</p>
                    <p>{currentCharacter.status}</p>
                </>
                : <>
                    <p>Character not found</p>
                </>
            }
        </div>
    );
}