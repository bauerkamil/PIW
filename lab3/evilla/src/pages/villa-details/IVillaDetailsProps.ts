import { IVillaInfo } from "../../shared/interfaces/IVillaInfo";

export interface IVillaDetailsProps {
    getVillaInfo: (id: number) => IVillaInfo | undefined;
}