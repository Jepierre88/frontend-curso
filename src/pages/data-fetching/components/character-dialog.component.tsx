import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import type { Character } from "@/types/character"

export default function CharacterDialog({
    character,
    isOpen,
    onOpenChange,
}:{
    character: Character | null,
    isOpen: boolean,
    onOpenChange: (open: boolean) => void
}){
    return (
              <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              {character && (
                <h1>{character.name}</h1>
              )}
            </DialogDescription>
          </DialogHeader>
          <div>
            {character && (
              <div className="flex flex-col items-center">
                <img src={character.image} alt={character.name} className="rounded-xl"/>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
}