import Side from "./Side";

class FlashCard
{
    id?: string;
    DeckId: string;
    FrontSide: Side;
    BackSide: Side;
    NextRevision?: Date;
    Difficulty: number = 0;
    Streak: number = 0;
    constructor(DeckId: string, FrontSide: Side, BackSide: Side)
    {
        this.DeckId = DeckId;
        this.FrontSide = FrontSide;
        this.BackSide = BackSide;
    }
}
export default FlashCard