import mongoose, { Schema } from 'mongoose';
import IDeckDocument from '../../Interfaces/IDeckDocument';

const deckSchema: Schema<IDeckDocument> = new mongoose.Schema(
    {
        UserId: {type: String, required: true},
        DailyCards: {type: Number, required: true}
    });
const DeckModel = mongoose.model('Deck', deckSchema);
export default DeckModel;
