import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Dzialajlokalnie from "../../assets/images/activity/dzialajlokalnie.jpg";
import Magiaziol from "../../assets/images/activity/magiaziol.jpg";
import Festiwal1 from "../../assets/images/activity/2fz1.jpg";
import Festiwal2 from "../../assets/images/activity/2fz2.jpg";
import Festiwal3 from "../../assets/images/activity/2fz3.jpg";
import Nockupaly1 from "../../assets/images/activity/mnk1.jpg";
import Nockupaly2 from "../../assets/images/activity/mnk3.jpg";
import Nockupaly3 from "../../assets/images/activity/mnk3.jpg";
import Nockupaly4 from "../../assets/images/activity/nk1.jpg";
import Nockupaly5 from "../../assets/images/activity/nc2.jpg";
import Nockupaly6 from "../../assets/images/activity/nk3.jpg";
import Pachnaceblanki1 from "../../assets/images/activity/bzp1.jpg";
import Pachnaceblanki2 from "../../assets/images/activity/bzp2.jpg";
import Pachnaceblanki3 from "../../assets/images/activity/bzp3.jpg";
import Rhede from "../../assets/images/activity/rhede4.jpg";
import Wizyta1 from "../../assets/images/activity/wswb1.jpg";
import Wizyta2 from "../../assets/images/activity/wswb2.jpg";
import Wizyta3 from "../../assets/images/activity/wswb3.jpg";
import Zielarskawies1 from "../../assets/images/activity/zwb.jpg";
import Zielarskawies2 from "../../assets/images/activity/zwb2.jpg";
import Zielarskawies3 from "../../assets/images/activity/zwb3.jpg";

import styles from "./Activity.module.scss";

const Activity = () => (
  <>
    <Header />

    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
       <Grid.Row style={{ padding: "0 30px" }}>
          
            <Segment className={styles.post}>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  Projekt „Lecznicza magia ziół”
                </h2>
                <img
                  src={Dzialajlokalnie}
                  alt="Logo Działaj Lokalnie"
                  className={styles.logoLokalnie}
                  style={{width: "80%"}}
                />
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Miło nam jest poinformować, że Stowarzyszenie &bdquo;Babki
                  Zielarki&rdquo; w dniu 8 sierpnia 2018 r. podpisało umowę o
                  dofinansowanie projektu pn. &bdquo;Lecznicza magia
                  zi&oacute;ł&rdquo;. Projekt ten możemy zrealizować dzięki
                  Programowi &bdquo;Działaj Lokalnie&rdquo; Polsko-Amerykańskiej
                  Fundacji Wolności kt&oacute;ry jest realizowany przez Akademię
                  Rozwoju Filantropii w Polsce i Lokalną Grupę Działania
                  &bdquo;Warmiński Zakątek&rdquo;.
                </p>
                <p className={styles.postDescritpionText}>
                  W ramach projektu w okresie VIII &ndash; XI 2018 r. zostaną
                  przeprowadzone następujące działania:
                  <ol className={styles.listStyleNumber}>
                    <li>Spotkanie rekrutacyjne</li>
                    <li>Cykl szkoleniowy</li>
                    <li>Spotkanie podsumowujące realizację projektu</li>
                  </ol>{" "}
                </p>

                <p className={styles.postDescritpionText}>
                  Projekt kierowany jest do 10-cio osobowej grupy
                  mieszkańc&oacute;w wsi Blanki i os&oacute;b pasjonujących się
                  ziołolecznictwem. Uczestnikami projektu będzie 10-cio osobowa
                  grupa kobiet i mężczyzn, os&oacute;b w przedziale wiekowym
                  24lata - 60+.
                </p>

                <p className={styles.postDescritpionText}>
                  Cykl szkoleniowy składać się będzie z 3 moduł&oacute;w:
                  <ul className={styles.listStyleNone}>
                    <li>I -Lecznicze surowce zielarskie,</li>
                    <li>
                      II-Znane i zapomniane warzywa i ich walory dietetyczne,
                    </li>
                    <li>
                      III-Rośliny sadownicze źr&oacute;dłem cennych
                      składnik&oacute;w odżywczych.
                    </li>
                  </ul>
                </p>

                <p className={styles.postDescritpionText}>
                  Każdy z moduł&oacute;w poprowadzi inny trener-specjalista
                  pracownik UWM Olsztyn. Szkolenia będą prowadzone w świetlicy
                  wiejskiej w Blankach &bdquo;Zielarska Chata&rdquo;
                </p>

                <p className={styles.postDescritpionText}>
                  Serdecznie zapraszamy do uczestnictwa w projekcie!
                </p>
                <img
                  src={Magiaziol}
                  alt="Magia Ziół"
                  className={styles.poster}
                />
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    II Festiwal Ziół w Blankach
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  &bdquo;Zioło daje moc&rdquo; &ndash; tym hasłem przywitał
                  zebranych zesp&oacute;ł Czerwony Tulipan na II Festiwalu
                  Zi&oacute;ł, kt&oacute;ry odbył się w niedzielę, w zielarskiej
                  wsi Blanki. Jest to kolejna impreza prężnie działającego
                  Stowarzyszenia &bdquo;Babki Zielarki&rdquo; i bardzo aktywnej
                  pani sołtys wsi &ndash; Lucji Kuczyńskiej.
                </p>

                <p className={styles.postDescritpionText}>
                  O niezwykłej mocy zi&oacute;ł przekonywały wszystkich panie ze
                  Stowarzyszenia &bdquo;Babki Zielarki&rdquo;. Podczas Festiwalu
                  można było skosztować nalewki i syropy z miejscowych
                  zi&oacute;ł i owoc&oacute;w, ciasteczka z kwiatami oraz zupę z
                  pokrzyw.
                </p>

                <p className={styles.postDescritpionText}>
                  Festyn ten nie odbyłby się gdyby nie wsparcie finansowe
                  samorządu wojew&oacute;dztwa warmińsko-mazurskiego. Dzięki
                  pozyskanemu dofinansowaniu można było zobaczyć na scenie tak
                  wspaniały zesp&oacute;ł, jakim jest &bdquo;Czerwony
                  Tulipan&rdquo;.
                </p>

                <p className={styles.postDescritpionText}>
                  Odbyły się także konkursy z nagrodami: konkurs na
                  najładniejszy bukiet z polnych kwiat&oacute;w, ziołowa micha,
                  ziołowe lekarstwo i ziołowa nalewka.
                </p>

                <div className={styles.galleryList}>
                  <img
                    src={Festiwal1}
                    alt="Festiwal Ziół"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Festiwal2}
                    alt="Festiwal Ziół"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Festiwal3}
                    alt="Festiwal Ziół"
                    className={styles.galleryListItem}
                  />
                </div>
              </div>
              &nbsp;
              <span className={styles.source}>
                Tekst/Foto: gminalidzbark.com
              </span>
              <div></div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Magiczna Noc Kupały
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  W sobotę, 17.06.2017r. nad jeziorem Blanki odbyła się
                  &bdquo;Magiczna Noc Kupały&rdquo;.
                </p>
                <p className={styles.postDescritpionText}>
                  To kolejna inicjatywa społeczna Stowarzyszenia &bdquo;Babki
                  Zielarki&rdquo; w ramach projektu &bdquo;Noc Kupały nad
                  Jeziorem Blanki&rdquo; wsp&oacute;łfinansowanego ze
                  środk&oacute;w Gminy Lidzbark Warmiński w ramach otwartego
                  konkursu ofert.
                </p>
                <p className={styles.postDescritpionText}>
                  Podczas imprezy Zesp&oacute;ł Tańca Ludowego &bdquo;Perła
                  Warmii&rdquo; wraz z grupą teatralną &bdquo;Tembr&rdquo;,
                  wykonali obrzędowe widowisko teatralno &ndash; taneczne.
                  Opr&oacute;cz tego odbył się pokaz lidzbarskich bębniarzy,
                  puszczanie wiank&oacute;w na wodę, konkurs na rozpoznanie
                  zi&oacute;ł. Nagrodzeni zostali Grzegorz Wiącek, Marta
                  Damszel, Marcin Hir. Najładniejszy wianek prezentowała Hania
                  Damszel oraz Jolanta Wiącek. Mistrzem grillowania został
                  Franciszek Kilda z Warszawy.
                </p>
                <p className={styles.postDescritpionText}>
                  Podczas imprezy miło nam było gościć delegację z
                  zaprzyjaźnionej gminy Rhede z Niemiec.
                </p>
                <p className={styles.postDescritpionText}>
                  Na zakończenie odbyła się wsp&oacute;lna biesiada, tańce i
                  śpiewy przy ognisku, w kt&oacute;rych uczestniczyli zaproszeni
                  goście oraz mieszkańcy wsi.
                </p>
                <div class="gallery">
                  <div class="row text-center text-lg-center">
                    <div className={styles.galleryList}>
                      <img
                        src={Nockupaly1}
                        alt="Magiczna Noc Kupały"
                        className={styles.galleryListItem}
                      />
                      <img
                        src={Nockupaly2}
                        alt="Magiczna Noc Kupały"
                        className={styles.galleryListItem}
                      />
                      <img
                        src={Nockupaly3}
                        alt="Magiczna Noc Kupały"
                        className={styles.galleryListItem}
                      />
                    </div>
                  </div>
                </div>
                &nbsp;
                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Blanki ziołami pachnące
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Nalewki z miejscowych zi&oacute;ł i owoc&oacute;w, ciasteczka
                  owsiane, dyniowe, a dla odważnych paszteciki z serem feta i
                  pokrzywą &ndash; to wszystko można było spr&oacute;bować na
                  Festiwalu Zi&oacute;ł w Blankach, kt&oacute;ry odbył się w
                  minioną niedzielę 10 lipca 2016 r.
                </p>
                <p className={styles.postDescritpionText}>
                  W niezwykłej mocy zi&oacute;ł i możliwości ich wykorzystania w
                  kuchni i lecznictwie przekonywały wszystkich panie ze
                  Stowarzyszenia &bdquo;Babki Zielarki&rdquo;.
                </p>
                <p className={styles.postDescritpionText}>
                  Stoiska degustacyjne cieszyły się bardzo dużym powodzeniem.
                  Opr&oacute;cz ziołowych przekąsek, przybyli na Festiwalu
                  goście mogli otrzymać pudełeczka z suszonymi ziołami m.in.
                  lawendą, szałwią, melisą, podbiałem czy szyszkami chmielu.
                </p>
                <p className={styles.postDescritpionText}>
                  R&oacute;wnolegle na scenie przez cały dzień odbywały się
                  występy r&oacute;żnych artyst&oacute;w. Zaprezentowały się:
                  Baby z Babińca, zesp&oacute;ł wokalny Madzik z Gminnego
                  Ośrodka Kultury i Sportu w Pilniku, Zesp&oacute;ł pieśni i
                  tańca Ignalin, Kapela Furman z Kraszewa, solistka Hania
                  Damszel, zesp&oacute;l muzyczny z Gminnego Ośrodka Kultury i
                  Sportu w Pilniku oraz Kapela ludowa Rog&oacute;żanie.
                </p>
                <div className={styles.galleryList}>
                  <img
                    src={Pachnaceblanki1}
                    alt="Blanki ziołami pachnące"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Pachnaceblanki2}
                    alt="Blanki ziołami pachnące"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Pachnaceblanki3}
                    alt="Blanki ziołami pachnące"
                    className={styles.galleryListItem}
                  />
                </div>
                &nbsp;
                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>Noc Kupały</h2>
                </div>
              </div>

              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  W czwartek, 23.06.2016 r. na przystani kajakowej w Łaniewie
                  odbyła się Magiczna Noc Kupały.
                </p>
                <p className={styles.postDescritpionText}>
                  To kolejna inicjatywa społeczna Stowarzyszenia &bdquo;Razem
                  dla Łaniewa&rdquo;. Projekt dofinansowany został przez
                  Stowarzyszenie Kobiet &bdquo;Miej Marzenia&rdquo; w ramach
                  programu &bdquo;Charytatywnie &ndash; aktywnie spełniamy
                  marzenia nie tylko nasze&rdquo;.
                </p>
                <p className={styles.postDescritpionText}>
                  Podczas imprezy Zesp&oacute;ł Blask Reaktywacja, wykonał
                  taniec przy ognisku w rytm muzyki etno w wykonaniu Bębniarzy z
                  Lidzbarka Warmińskiego. Opr&oacute;cz tego odbyła się gawęda
                  Babki Zielarki z Blanek, występ Bard&oacute;w z Bartoszyc,
                  konkursy i zabawy: puszczanie wiank&oacute;w czy szukanie
                  kwiatu paproci.
                </p>
                <div className={styles.galleryList}>
                  <img
                    src={Nockupaly4}
                    alt="Noc Kupały"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Nockupaly5}
                    alt="Noc Kupały"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Nockupaly6}
                    alt="Noc Kupały"
                    className={styles.galleryListItem}
                  />
                </div>
                &nbsp;
                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Wizyta delegacji niemieckiej z Gminy Rhede (Ems)
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Po raz trzeci Gmina Lidzbark Warmiński gościła niemiecką
                  delegację z partnerskiej Gminy Rhede (Ems) na czele z
                  Burmistrzem Gerhardem Conens. W skład delegacji weszli także
                  radni, przedstawiciel Rady Doradc&oacute;w Senior&oacute;w,
                  rolnicy, właściciel firmy rolniczej oraz pełnomocnik ds.
                  wsp&oacute;łpracy Powiatu Emsland.
                </p>
                <p className={styles.postDescritpionText}>
                  Naleśniki z pokrzywą, żeberka w sosie brzoskwiniowym, szynka z
                  dzika, kark&oacute;wka ze śliwkami, nalewki &bdquo;Babskie
                  łzy&rdquo; i &bdquo;Babki zielarki&rdquo;, wiśni&oacute;wka
                  oraz mięt&oacute;wka to niekt&oacute;re tylko przysmaki jakie
                  mogli spr&oacute;bować niemieccy goście podczas prezentacji
                  zielarskiej we wsi Blanki przygotowanej przez Stowarzyszenie
                  &bdquo;Babki Zielarki&rdquo;.
                </p>
                <img
                  src={Rhede}
                  alt="Wizyta z Rhede"
                  className={styles.singleImg}
                />
                &nbsp;
                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Wizyta studyjna w Blankach
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Stowarzyszenie &bdquo;Babki Zielarki&rdquo; gościły 28
                  kwietnia 2015 r. w &bdquo;Zielarskiej Chacie&rdquo; w Blankach
                  przedstawicieli obszaru Lokalnej Grupy Działania &bdquo;Zakole
                  Dolnej Wisły&rdquo;.
                </p>
                <p className={styles.postDescritpionText}>
                  Celem wizyty było zaprezentowanie mieszkańcom wsi z
                  wojew&oacute;dztwa kujawsko &ndash; pomorskiego jak działa
                  nowo powstała wieś tematyczna pn. &bdquo;Zielarska Wioska
                  Blanki&rdquo;. Panie ze stowarzyszenia przedstawiły skąd się
                  wziął pomysł na wieś tematyczną oraz opowiedziały o swoich
                  zielarskich pasjach.
                </p>
                <p className={styles.postDescritpionText}>
                  Przybyli goście mogli zasmakować wypiek&oacute;w i
                  spr&oacute;bować nektaru z zi&oacute;ł.
                </p>
                <div className={styles.galleryList}>
                  <img
                    src={Wizyta1}
                    alt="Wizyta studyjna w Blankach"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Wizyta2}
                    alt="Wizyta studyjna w Blankach"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Wizyta3}
                    alt="Wizyta studyjna w Blankach"
                    className={styles.galleryListItem}
                  />
                </div>
                &nbsp;
                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>
            </Segment>
            <Segment>
              <div>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Zielarska Wioska Blanki
                  </h2>
                </div>
              </div>
              <div className={styles.postDescritpion}>
                <p className={styles.postDescritpionText}>
                  Blanki to wieś położona na Warmii, w gminie Lidzbark
                  Warmiński, nad pięknym jeziorem Blanki. Dookoła lasy i pola
                  uprawne. A co kilka kilometr&oacute;w gospodarstwa
                  agroturystyczne, kt&oacute;re oferują wypoczynek wśr&oacute;d
                  malowniczych wiejskich scenerii. Niezwykła lokalizacja wsi
                  zapewnia ciszę, spok&oacute;j, czyste powietrze oraz bliski
                  kontakt z naturą.
                </p>
                <p className={styles.postDescritpionText}>
                  Pomysł założenia Klubu Babki Zielarki kiełkował w Blankach
                  przez kilka lat. Zaczęło się jednak od projektu, zrealizowanym
                  z nauczycielkami i rodzicami w Szkole Podstawowej we wsi
                  Kłębowo, celem kt&oacute;rego było założenie ogr&oacute;dka z
                  ziołami. To przyczyniło się do pomysłu założenia w 2011 r.
                  nieformalnego Klubu &bdquo;Babki Zielarki&rdquo;, kt&oacute;ry
                  z początkiem 2015 r. został przekształcony w stowarzyszenie
                  &bdquo;Babki Zielarki&rdquo;. Jednym z gł&oacute;wnych
                  cel&oacute;w tej działalności jest promowanie gminy Lidzbark
                  Warmiński poprzez zielarstwo i ekologię, integracja lokalnej
                  społeczności, poprawa warunk&oacute;w życia mieszkańc&oacute;w
                  oraz promocja produkt&oacute;w regionalnych.
                </p>
                <p className={styles.postDescritpionText}>
                  Za sprawą Pani Lucji Kuczyńskiej i Anny Pacanowskiej,
                  gł&oacute;wnych założycielek Klubu a teraz i stowarzyszenia,
                  wieś Blanki słynie już z produkt&oacute;w powstałych z
                  miejscowych zi&oacute;ł, gł&oacute;wnie pokrzywy. Do
                  wytwarzania nalewek i syrop&oacute;w używane są także dziko
                  rosnące rośliny lecznicze tj. czarny bez, sosna, mniszek
                  lekarski. &bdquo;Babki Zielarki&rdquo; korzystają z
                  kwiat&oacute;w bzu czarnego, zielonych pączk&oacute;w brzozy,
                  aronii, owoc&oacute;w pigwy, dzikiej r&oacute;ży, malin,
                  poziomek, korzeni arcydzięgiela. Z tych wszystkich
                  składnik&oacute;w i sięgających do tradycji przepis&oacute;w,
                  powstają nalewki lecznicze o oryginalnych i kuszących nazwach,
                  jak chociażby lubczykowy eliksir miłości, nalewka jubilerska z
                  płatkami złota, starowarmińska żenicha z dzikiej r&oacute;ży
                  na miodzie, czy eliksir Kopernika &ndash; wino z szafranem i
                  figą na dobry żołądek i niestrawność. Stowarzyszenie tworzy
                  syropy, dżemy, ryby w zalewie, piecze ciasta na oryginalnych
                  starych przepisach. Produkty te prezentowane są na licznych
                  festynach, jarmarkach, kiermaszach.
                </p>
                <p className={styles.postDescritpionText}>
                  Klub &bdquo;Babki Zielarki&rdquo; brał udział w projekcie
                  Transgraniczna Przedsiębiorczość Leader Blekinge / Warmia
                  &ndash; Mazury, polegającym na tworzeniu sieci
                  wsp&oacute;łpracy między Przedsiębiorcami z Polski i Szwecji.
                  W toku prowadzonej działalności powstał pomysł wsi tematycznej
                  &bdquo;Zielarska Wioska Blanki&rdquo;. Panie ze stowarzyszenia
                  o swoich pasjach i produktach opowiadają na warsztatach,
                  kt&oacute;re organizują dla gości podczas wizyt studyjnych i
                  nie tylko.
                </p>

                <div className={styles.galleryList}>
                  <img
                    src={Zielarskawies1}
                    alt="Zielarska Wieś"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Zielarskawies2}
                    alt="Zielarska Wieś"
                    className={styles.galleryListItem}
                  />
                  <img
                    src={Zielarskawies3}
                    alt="Zielarska Wieś"
                    className={styles.galleryListItem}
                  />
                </div>

                <span className={styles.source}>
                  Tekst/Foto: gminalidzbark.com
                </span>
              </div>        
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

export default Activity;
