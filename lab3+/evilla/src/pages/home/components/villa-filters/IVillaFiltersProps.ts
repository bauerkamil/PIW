import { IVillaFilters } from "../../../../common/interfaces/IVillaFilters";

export interface IVillaFiltersProps {
    filters: IVillaFilters;
    setFilters: (filters: IVillaFilters) => void;
}