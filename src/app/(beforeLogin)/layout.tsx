import React, { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const layout = ({ children, modal }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default layout;

//주소가 / 일때는 children -> page.tsx , modal -> @modal/default.tsx
//주소가 /i/flow/login 일떄는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
