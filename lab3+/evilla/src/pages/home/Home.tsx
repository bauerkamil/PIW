import { useContext } from "react";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { UserContext } from "../../common/providers/UserProvider";
import { IHomeProps } from "./IHomeProps";
import { VillaList } from "./components/villa-list/VillaList";
import styles from "./Home.module.scss";


export const Home = (props: IHomeProps) => {
  const { state: user } = useContext(UserContext);

  const getWelcomeText = () => {
    if (user) {
      return (<div className={styles.text}>Welcome, {user?.displayName}</div>);
    }
  }
  return (
    <PageWrapper>
      {getWelcomeText()}
      <VillaList villas={props.villas} />
    </PageWrapper>
  );
};