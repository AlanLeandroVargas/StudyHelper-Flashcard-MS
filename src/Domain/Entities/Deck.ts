class Deck
{
    UserId: string;
    DailyCards: number;
    constructor(UserId: string, DailyCards: number)
    {
        this.UserId = UserId;
        this.DailyCards = DailyCards;
    }
}
export default Deck;