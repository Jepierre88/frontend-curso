import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/constants";
import type { Character } from "../../types/character";
import CharacterCard from "./components/character-card.component";
import CharacterDialog from "./components/character-dialog.component";


export default function DataFetchingPage() {

  const [characters, setCharacters] = useState<Character[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchData = () => {
    return  fetch(`${BASE_URL}/character`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  }

  useEffect(()=>{
    fetchData().then(async (res)=>{
      return await res.json()
    }).then((data)=>{
      setCharacters(data.results)
    })
  }, [])

  const handleViewDetails = (character: Character) => {
    setSelectedCharacter(character);
    setIsDialogOpen(true);
  }

  return (
    <>
      <h1>Esta es la ruta data fetchin</h1>
      <button>Fetch Data</button>
      <ul className="grid grid-cols-3 gap-4">
        {characters.map((character:Character) => (
          <CharacterCard character={character} key={character.id} onViewDetails={handleViewDetails}/>
        ))}
      </ul>
        <CharacterDialog character={selectedCharacter} isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}/>
    </>
  );
}
