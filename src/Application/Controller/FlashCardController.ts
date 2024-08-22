import { Request, Response, NextFunction } from "express";
import IFlashCardServices from "../../Domain/Interfaces/IFlashCardServices";
class FlashCardController
{
    private flashCardServices: IFlashCardServices;
    constructor(flashCardServices: IFlashCardServices)
    {
        this.flashCardServices = flashCardServices;
    }
}
export default FlashCardController;