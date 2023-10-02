import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {ChangeEvent, useState} from "react";

type CharacterGalleryProps = {
    characters: Character[],

}

export default function CharacterGallery(props: CharacterGalleryProps) {

    const [searchText, setSearchText] = useState<string>("")

    const filteredCharacters = props.characters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchTextChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <p>
                Gallery
            </p>
            <input onChange={onSearchTextChange} value={searchText}/>
            {filteredCharacters.map(character => <CharacterCard key={character.id} character={character}/>)}
        </div>
    )
}