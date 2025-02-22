import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Foundation.scss";
import Menu from "../../components/Menu/Menu";
import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Foundation() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img
          src="/img/logo-foundation-white.png"
          alt="Sumcash Foundation"
          className="logo-foundation"
        />
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("foundationPage.missionStatementTitle")}
              </h2>
              <p>{t("foundationPage.missionStatementText1")}</p>
              <p>{t("foundationPage.missionStatementText2")}</p>

              <div className="anchor" data-id="donate"></div>
              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                <Trans i18nKey="foundationPage.generalFundPpcAddress">
                  General Fund - <strong>SUMC</strong> Donation Address:
                </Trans>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chainz.cryptoid.info/ppc/address.dws?p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK.htm"
                >
                  {" "}
                  p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK
                </a>
                <br />
                <Trans i18nKey="foundationPage.generalFundBtcAddress">
                  General Fund - <strong>BTC</strong> Donation Address
                </Trans>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://btc.cryptoid.info/btc/address.dws?376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT.htm"
                >
                  {" "}
                  376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT
                </a>
                <br />
                <Trans i18nKey="foundationPage.openCollectiveNote">
                  Fiat Donations - <strong>USD/EUR</strong> by
                  Credit/Debit/Wire:
                </Trans>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opencollective.com/sumcash"
                >
                  {" "}
                  opencollective.com/sumcash
                </a>
              </p>
            </div>
            <div className="col col--small">
              <Address />
              <p>
                <a href="mailto:foundation@sumcash.org">
                  foundation@sumcash.org
                </a>
                <br />
                RSIN: 858715958
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Foundation />
    </Suspense>
  );
}

export default HoF;
