import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import styles from "./rodo.module.scss";

const rodo = () => (
  <>
    <Header />

    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
       <Grid.Row style={{ padding: "0 30px" }}>
          <Segment className={styles.wrapper}>
            <Segment className={styles.post}>
              <Segment className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>POLITYKA PRYWATNOŚCI</h2>
                <p className={styles.postHeaderTitleSecond}>
                  serwisu www.zielarskawiesblanki.pl
                </p>
              </Segment>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Ochrona danych osobowych w ramach serwisu
                  www.zielarskawiesblanki.pl Dane osobowe przekazywane przez
                  Użytkowników serwisu www.zielarskawiesblanki.pl przetwarzane
                  są w sposób zgodny z przepisami Rozporządzenia Parlamentu
                  Europejskiego i Rady (UE) 2016/679 i Ustawy o Ochronie danych
                  osobowych Dz. U. 2018 poz. 1000 regulującymi przetwarzanie
                  danych osobowych. Zbiory zgromadzonych danych osobowych
                  Użytkowników w serwisie www.niepelnosprawni.pl podlegają
                  właściwej ochronie, zgodnie z ww. przepisami. Pełen dostęp do
                  baz danych posiadają jedynie uprawnione osoby zatrudnione w
                  Stowarzyszeniu "Babki Zielarki" wyznaczone przez
                  Administratora.
                </p>
                <p className={styles.postDescritpionText}>
                  Administratorem danych osobowych jest Stowarzyszenie "Babki
                  Zielarki", z siedzibą w Blankach 50, 11-100 Lidzbark
                  Warmiński.
                </p>
                <p className={styles.postDescritpionText}>
                  Zgodnie z powyższymi aktami prawnymi Użytkownik ma prawo do
                  ograniczenia przetwarzania danych osobowych, wglądu do nich,
                  sprostowania i całkowitego usunięcia.
                </p>
                <p className={styles.postDescritpionText}>
                  Mechanizmy cookies w serwisie www.zielarskawiesblanki.pl W
                  związku z udostępnianiem usług internetowych, Stowarzyszenie
                  Przyjaciół Integracji stosuje tzw. cookies, tj. dane
                  informatyczne, w szczególności pliki tekstowe, zapisywane
                  przez serwery na urządzeniu końcowym użytkownika, które
                  serwery mogą odczytać przy każdorazowym połączeniu się z tego
                  urządzenia końcowego.
                </p>
                <p className={styles.postDescritpionText}>
                  Oprogramowanie służące do przeglądania stron internetowych
                  (przeglądarka internetowa) domyślnie dopuszcza przechowywanie
                  plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy
                  serwisu mogą dokonać w każdym czasie zmiany ustawień
                  dotyczących plików cookies. Ustawienia te mogą zostać
                  zmienione w szczególności w taki sposób, aby blokować
                  automatyczną obsługę plików cookies w ustawieniach
                  przeglądarki internetowej lub informować o ich każdorazowym
                  zamieszczeniu w urządzeniu Użytkownika serwisu internetowego.
                </p>
                <p className={styles.postDescritpionText}>
                  Szczegółowe informacje o możliwości i sposobach obsługi plików
                  cookies dostępne są w ustawieniach oprogramowania
                  (przeglądarki internetowej).
                </p>
                <p className={styles.postDescritpionText}>
                  Niedokonanie zmiany ustawień w zakresie plików cookies
                  oznacza, że będą one zamieszczone w urządzeniu końcowym
                  użytkownika, a tym samym będziemy przechowywać informacje w
                  urządzeniu końcowym użytkownika i uzyskiwać dostęp do tych
                  informacji.
                </p>
                <p className={styles.postDescritpionText}>
                  Wyłączenie stosowania cookies może spowodować utrudnienia w
                  korzystaniu z niektórych usług w ramach serwisu
                  www.zielarskawiesblanki.pl.
                </p>
                <p className={styles.postDescritpionText}>
                  Korzystanie z serwisu www.zielarskawiesblanki.pl oznacza zgodę
                  danego Użytkownika na zapis cookies lub ich wykorzystanie, po
                  ich akceptacji za pośrednictwem portalu
                  www.zielarskawiesblanki.pl.
                </p>
                <p className={styles.postDescritpionText}>
                  Pliki cookies wykorzystywane są w szczególności w celu:
                  <ul className={styles.postList}>
                    <li>
                      tworzenia statystyk, które m.in. wspierają pozycjonowanie
                      stron, ułatwiając dotarcie do niezbędnej Państwu
                      informacji oraz ulepszenia ich zawartości;
                    </li>
                    <li>
                      oznaczenia, że wypełniona została formularza kontakt i
                      formularza do przesyłania przypisów.
                    </li>
                  </ul>
                </p>
                <p className={styles.postDescritpionText}>
                  Kontakt W przypadku Państwa pytań, dotyczących stosowanej
                  przez Stowarzyszenie Przyjacioł Integracji polityki
                  prywatności, prosimy o kontakt na adres poczty elektronicznej
                  politykaprywatnosci@zielarskawiesblanki.pl lub adres siedziby
                  Stowarzyszenia "Babki Zielarki" Blanki 50, 11-100 Lidzbark
                  Warmiński.
                </p>
                <p className={styles.postDescritpionText}>
                  <ul className={styles.postList}>
                    <li>
                      <a
                        className={styles.Link}
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://windows.microsoft.com/pl-PL/windows7/How-to-manage-cookies-in-Internet-Explorer-9"
                      >
                        w przeglądarce Internet Explorer
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.Link}
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
                      >
                        w przeglądarce Edge
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.Link}
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="kliknij tu aby otworzć link"
                        href="http://support.mozilla.org/pl/kb/ciasteczka"
                      >
                        w przeglądarce Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.Link}
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="kliknij tu aby otworzć link"
                        href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                      >
                        w przeglądarce Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.Link}
                        role="button"
                        rel="noopener noreferrer"
                        aria-label="kliknij tu aby otworzć link"
                        target="_blank"
                        href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL"
                      >
                        w przeglądarce Safari
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </Segment>
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4} only="computer">
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default rodo;
