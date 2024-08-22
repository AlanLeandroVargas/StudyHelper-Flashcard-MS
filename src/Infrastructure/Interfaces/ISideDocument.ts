import { Document } from "mongoose";
import IMediaDocument from "./IMediaDocument";
interface ISideDocument extends Document
{
    TextContent: string;
    MediaContent: Array<IMediaDocument>
}
export default ISideDocument;