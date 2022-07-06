import { Footer } from "flowbite-react";
import React, { memo } from "react";

const FooterApp = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright by="Ikram Maulana™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Github Repository</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default memo(FooterApp);
