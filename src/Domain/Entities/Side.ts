import Media from "./Media";

class Side
{
    TextContent: string;
    MediaContent: Array<Media>
    constructor(TextContent: string)
    {
        this.TextContent = TextContent;
        this.MediaContent = new Array<Media>();
    }
}
export default Side;