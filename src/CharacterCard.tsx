import {Character} from "./characters.ts";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character,


}

export default function CharacterCard(props: CharacterCardProps) {


    return (
        <div className={"character-card"}>
            <Link to={`/characters/${props.character.id}`}>
                <h3>{props.character.name}</h3>
                <p>{props.character.status}</p>
            </Link>
        </div>
    )
}