import { Document } from "mongoose";
interface IDeckDocument extends Document
{
    UserId: string
    DailyCards: number
}
export default IDeckDocument;