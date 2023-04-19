import React from "react";
import styles from "./PageWrapper.module.scss";
import { IPageWrapperProps } from "./IPageWrapperProps";

export const PageWrapper = (props: IPageWrapperProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.componentContainer}
      >
        {props.children}
      </div>
    </div>
  );
};
