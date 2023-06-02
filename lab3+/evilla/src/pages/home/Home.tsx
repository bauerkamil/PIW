import { useContext, useEffect, useState } from "react";
import { IVillaInfo } from "../../common/interfaces/IVillaInfo";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { UserContext } from "../../common/providers/UserProvider";
import { VillaList } from "./components/villa-list/VillaList";
import styles from "./Home.module.scss";
import { getAllVillas } from "../../services/VillaService";


export const Home = () => {
  const { state: user } = useContext(UserContext);

  const [villas, setVillas] = useState<IVillaInfo[]>([]);

  useEffect(() => {
    // axios
    //   .get<IVillaInfo[]>("/data/villas.json")
    //   .then((response) => { setVillas(response.data) });

    getAllVillas().then((response) => setVillas(response));
  }, []);

  const getWelcomeText = () => {
    if (user) {
      return (<div className={styles.text}>Welcome, {user?.displayName ?? user.email}</div>);
    }
  }
  return (
    <PageWrapper>
      {getWelcomeText()}
      <VillaList villas={villas} />
    </PageWrapper>
  );
};