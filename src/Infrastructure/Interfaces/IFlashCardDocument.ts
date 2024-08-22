import { Document, ObjectId } from "mongoose";
import ISideDocument from "./ISideDocument";
interface IFlashCardDocument extends Document
{
    DeckId: ObjectId;
    FrontSide: ISideDocument;
    BackSide: ISideDocument;
    NextRevision: Date;
    Difficulty: number;
    Streak: number;
}
export default IFlashCardDocument;