import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="miksikumppaniksi"
    title="Miksi liittyä kumppaniksi?"
    description="Korkeat palkkiot, nopeat maksut. Korkea tuottoprosentti."
  >
    <VerticalFeatureRow
      title="Miten liityn kumppaanuusohjelmaan?"
      description="Rekisteröidy julkaisijaksi saadaksesi henkilökohtaisen viittauslinkkisi. Jos olet jo jäsen Circlewise -yhteistyöverkostossa, etsi viittausohjelmamme Marketplace-sivustolta (HerSecret.fi)"
      image="/assets/images/feature.svg"
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
      image="/assets/images/feature3.svg"
      imageAlt="Ansaitse palkkiota tuotetusta myynnistä"
    />
  </Section>
);

export { VerticalFeatures };
