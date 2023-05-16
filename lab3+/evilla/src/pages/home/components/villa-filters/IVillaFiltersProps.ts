import { IVillaFilters } from "../../../../shared/interfaces/IVillaFilters";

export interface IVillaFiltersProps {
    filters: IVillaFilters;
    setFilters: (filters: IVillaFilters) => void;
}