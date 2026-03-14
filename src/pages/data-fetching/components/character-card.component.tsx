import { Button } from "@/components/ui/button";
import type { Character } from "../../../types/character";

export default function CharacterCard({
    character,
    onViewDetails,
}:{
    character: Character,
    onViewDetails: (character: Character) => void
}){
    return (
        <div className="shadow-md rounded-lg p-4 gap-4 hover:bg-gray-400 duration-300">
            <h2>{character.name}</h2>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <div className="flex flex-row justify-end">
                <Button onClick={()=>{
                    onViewDetails(character)
                }}>
                    View Details
                </Button>
            </div>
        </div>
    )
}