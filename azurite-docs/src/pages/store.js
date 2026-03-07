import React from 'react';
import Layout from '@theme/Layout';
import styles from './store.module.css';

export default function Store() {
  return (
    <Layout
      title="Store - Azurite"
      description="De officiële Azurite webshop. Bekijk ons aanbod, lees de voorwaarden en ondersteun de server.">
      <main className={styles.main}>
        <div className={styles.container}>

          <div className={styles.header}>
            <h1>Azurite <span className={styles.accent}>Support Store</span></h1>
            <p className={styles.subtitle}>
              Bij Azurite draait alles om kwaliteit, beleving en community. Via onze store
              kun je de server ondersteunen en tegelijkertijd leuke extra's linken
              die jouw roleplay-ervaring completer maken — zonder pay-to-win voordelen.
            </p>
            <a
              href="https://store.azurite.info/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}>
              Naar De Store
            </a>
          </div>

          <section className={styles.section}>
            <h2>Wat bieden wij aan:</h2>
            <p>
              Onze store bevat uitsluitend quality-of-life en uitbreidingsopties. Er zijn geen
              pakketten die je een oneerlijk voordeel geven ten opzichte van andere spelers.
              Iedereen behoudt dezelfde eerlijke roleplay-ervaring.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Monthly Support — Queue Priority:</h2>
            <p>
              Met Monthly Support krijg je voorrang in de wachtrij bij het joinen van de server.
              De queue priority wordt automatisch geactiveerd zodra je betaling is verwerkt. Dit
              is een maandelijks abonnement dat je op elk moment kunt annuleren. Zolang je
              abonnement actief is, heb je priority in de queue.
            </p>
            <p>
              Daarnaast zitten custom nummerplaten inbegrepen bij de abonnementen.
              Bronze start met 1 nummerplaat, en per hogere categorie krijg je er 1 extra bij:
              Silver 2, Gold 3, Platinum 4, Diamond 5 en Emerald 6 nummerplaten.
              Geen zorgen: je kunt je abonnement op elk moment stopzetten. Alle voordelen blijven
              actief tot het einde van je lopende betaalperiode, en je custom nummerplaat blijft
              daarna permanent op je voertuig staan. Het overzetten van je nummerplaat naar een ander voertuig is niet mogelijk.
            </p>
            <p>
              Wil je geen doorlopend abonnement maar toch de server steunen? Je kunt ook een
              eenmalige donatie doen door het abonnement af te sluiten en direct daarna weer
              op te zeggen. Op die manier steun je Azurite zonder verdere verplichtingen.
            </p>
            <p>
              Jouw bijdrage helpt ons om de server stabiel, snel en online te houden en om
              nieuwe features te blijven ontwikkelen.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Extra Character Slots:</h2>
            <p>
              Standaard heb je 1 personage. Met Extra Character Slots
              breid je dat uit, zodat je meerdere verhaallijnen kunt volgen met elk hun eigen
              achtergrond, carriere en ontwikkeling. Dit is een eenmalige aankoop die permanent
              actief blijft op je account.
            </p>
            <p>
              Na een succesvolle betaling ontvang je een Tebex-ID via e-mail. Om je extra slot te activeren
              ga je in-game naar het character menu, open je de instellingen en navigeer
              naar "Aankoopgeschiedenis". Daar kun je je Tebex-ID invoeren om de extra slot
              in te wisselen, hierna herstart je je FiveM en je extra slot is actief. 
            </p>
          </section>

          <section className={styles.section}>
            <h2>Hoe werkt het:</h2>
            <p>
              Alle betalingen worden verwerkt via Tebex. Queue Priority wordt automatisch
              geactiveerd na betaling. Voor Extra Character Slots ontvang je een Tebex-ID die
              je in-game inwisselt via het character menu (zie hierboven).
            </p>
            <p>
              Voor custom nummerplaten geldt een ticketflow. Vraag je nummerplaat zelf aan via
              een ticket in de Discord en voeg je Tebex-ID toe die je via e-mail hebt ontvangen,
              samen met het voertuig waar de nummerplaat op moet worden ingesteld.
              Na goedkeuring helpt iemand van het Azurite-team je zo snel mogelijk in-game
              verder om de nummerplaat op het voertuig te zetten.
            </p>
            <p>
              Zorg ervoor dat je bent ingelogd met het juiste account voordat je een aankoop doet.
              Bij problemen kun je altijd een ticket aanmaken in ons Discord support kanaal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Algemene Voorwaarden:</h2>
            <p>
              Voordat je een bestelling plaatst, vragen we je om onderstaande voorwaarden
              aandachtig door te nemen. Zodra je een aankoop doet in de Azurite Store,
              geef je aan dat je deze voorwaarden hebt gelezen en ermee instemt.
            </p>
            <ul className={styles.termsList}>
              <li>
                Ons volledige aanbod draait om uiterlijk en gebruiksgemak. Niets van wat je
                koopt heeft invloed op gameplay, je in-game economie of de manier waarop je
                roleplay verloopt. Iedere speler speelt op gelijke voet.
              </li>
              <li>
                Aangezien het hier om digitale goederen gaat, is een transactie niet meer
                omkeerbaar zodra je toegang hebt gekregen tot het gekochte item. Er wordt
                in geen enkel scenario geld teruggegeven.
              </li>
              <li>
                Wat je koopt blijft vast staan op het profiel waarvoor de betaling is
                gedaan. Verplaatsen van items of rechten richting een ander profiel is
                uitgesloten.
              </li>
              <li>
                Je bent vrij om Monthly Support wanneer je wilt stop te zetten. Zolang
                de lopende maand nog niet is verstreken, behoud je gewoon je extra's.
                Reeds betaalde dagen worden echter niet vergoed.
              </li>
              <li>
                Stap je over naar een ander maandelijks abonnement? Let op: het oude abonnement stopt
                niet vanzelf. Dat moet je zelf beëindigen, anders blijft het doorlopen
                en worden beide in rekening gebracht volgens de regels van Tebex. Voor
                het pakket dat je achterlaat ontvang je geen geld retour.
              </li>
              <li>
                Een extra character slot koop je één keer en blijft voor altijd
                beschikbaar op jouw profiel. Dit valt niet terug te draaien en hier
                wordt geen geld voor teruggestort.
              </li>
              <li>
                Raak je de toegang tot de server kwijt door een ban of verwijdering, dan
                komen al je aangeschafte extra's en uitbreidingen te vervallen. In zo'n
                situatie wordt er niets gecrediteerd of terugbetaald.
              </li>
              <li>
                Gebruik je gekochte voordelen zoals ze bedoeld zijn. Wie opzettelijk
                fouten in het systeem benut of regels probeert te ontwijken, riskeert
                dat het account definitief wordt gesloten en alle eerder gedane aankopen
                worden ingetrokken.
              </li>
              <li>
                Prijzen, beschikbare abonnementen en de inhoud daarvan kunnen op elk moment
                wijzigen. Het kan voorkomen dat dit gebeurt zonder dat we hier in het slechtste geval van
                tevoren over communiceren.
              </li>
              <li>
                We streven naar een zo betrouwbaar mogelijke omgeving, maar kunnen niet
                uitsluiten dat technische problemen, onderhoud of software-updates
                tijdelijk invloed hebben op je gekochte extra's. In zulke gevallen doen we ons best om het zo snel mogelijk op te lossen.
              </li>
              <li>
                Alle betalingen lopen via Tebex Limited. Azurite slaat geen
                betaalgegevens op en heeft hier op geen enkel moment toegang toe. Door een
                pakket aan te schaffen ga je tevens akkoord met de gebruiksvoorwaarden van
                Tebex.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Geen Refunds:</h2>
            <p>
              Alle verkopen zijn definitief. Zodra een betaling is verwerkt, is er geen
              mogelijkheid tot terugbetaling. Dit geldt voor zowel eenmalige aankopen als
              abonnementen. Ook wanneer je besluit te stoppen met spelen, gebanned wordt, of
              om een andere reden niet langer gebruik maakt van je aankoop, vindt er geen
              restitutie plaats.
            </p>
            <p>
              Door een aankoop te voltooien bevestig je dat je deze voorwaarde hebt gelezen,
              begrepen en er volledig mee akkoord gaat.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact:</h2>
            <p>
              Heb je een vraag over je bestelling of loop je tegen een probleem aan?
              Maak een ticket aan in ons{' '}
              <a
                href="https://discord.com/channels/1451179970998177835/1457451826386305317"
                target="_blank"
                rel="noopener noreferrer">
                Ticket Support Kanaal
              </a>. Ons team helpt je zo snel mogelijk verder.
            </p>
          </section>

        </div>
      </main>
    </Layout>
  );
}
