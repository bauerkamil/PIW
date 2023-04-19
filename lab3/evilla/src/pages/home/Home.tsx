import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { IHomeProps } from "./IHomeProps";
import { VillaList } from "./components/villa-list/VillaList";


export const Home = (props: IHomeProps) => {
    return (
      <PageWrapper>
        <VillaList villas={props.villas}/>
      </PageWrapper>
    );
  };