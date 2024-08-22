import mongoose, { Schema, ObjectId } from "mongoose";
import IMediaDocument from "../../Interfaces/IMediaDocument";
import ISideDocument from "../../Interfaces/ISideDocument";
import IFlashCardDocument from "../../Interfaces/IFlashCardDocument";
import DeckModel from "./DeckDocumen";

const mediaSchema: Schema<IMediaDocument> = new mongoose.Schema(
    {
        url: {type: String, required: true},
        type: {type: String, required: true}
    });
const sideSchema: Schema<ISideDocument> = new mongoose.Schema(
    {
        TextContent: {type: String},
        MediaContent: {Medias: [mediaSchema]}
    });
const flashCardSchema: Schema<IFlashCardDocument> = new mongoose.Schema(
    {
        DeckId: {type: mongoose.Schema.Types.ObjectId, ref: 'Deck'},
        FrontSide: {type: sideSchema, required: true},
        BackSide: {type: sideSchema, required: true},
        NextRevision: {type: Date, required: true},
        Difficulty: {type: Number, default: 1},
        Streak: {type: Number, default: 0}
    });
const FlashCardModel = mongoose.model('FlashCard', flashCardSchema);
export default FlashCardModel;