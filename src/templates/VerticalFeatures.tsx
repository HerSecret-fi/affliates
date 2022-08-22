import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="miksikumppaniksi"
    title="Miksi liittyä kumppaniksi?"
    description="Korkeat palkkiot, korkea tuottoprosentti. Saat maksut nopeasti - komissiot maksetaan jopa kerran viikossa."
  >
    <VerticalFeatureRow
      title="Miten liityn kumppaanuusohjelmaan?"
      description="Rekisteröidy julkaisijaksi saadaksesi henkilökohtaisen viittauslinkkisi. Liittyminen on helppoa - se onnistuu täyttämällä lyhyt lomake, jossa kysymme perustietoja sinusta ja yleisöstäsi. Jos olet jo jäsen Circlewise -yhteistyöverkostossa, etsi viittausohjelmamme Marketplace-sivustolta (HerSecret.fi)."
      image="/assets/images/hersecret-mekko.jpg"
      imageAlt="Miten liityn?"
    />
    <VerticalFeatureRow
      title="Jaa linkki julkaisuissasi"
      description="Jaa viittauslinkkisi yleisöllesi esim. blogissasi, Instagramissa tai muussa kanavassa."
      image="/assets/images/feature2.svg"
      imageAlt="Jaa linkki yleisöllesi"
      reverse
    />
    <VerticalFeatureRow
      title="Ansaitse palkkiota"
      description="Kun julkaisulinkkisi tuottaa myyntiä, saat palkkion tuotetusta myynnistä. Helppoa!"
      image="/assets/images/feature2.svg"
      imageAlt="Ansaitse palkkiota tuotetusta myynnistä"
    />
  </Section>
);

export { VerticalFeatures };
