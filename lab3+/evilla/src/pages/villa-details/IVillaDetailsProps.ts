import { IVillaInfo } from "../../common/interfaces/IVillaInfo";

export interface IVillaDetailsProps {
    getVillaInfo: (id: number) => IVillaInfo | undefined;
}