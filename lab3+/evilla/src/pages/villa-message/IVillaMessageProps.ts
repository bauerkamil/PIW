import { IVillaInfo } from "../../common/interfaces/IVillaInfo";

export interface IVillaMessageProps {
    getVillaInfo: (id: number) => IVillaInfo | undefined;
}