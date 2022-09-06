import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Liity HerSecret.fi kumppanuusohjelmaan"
      subtitle="Ansaitse rahaa suosittelemalla meitä seuraajillesi. Onko sinulla yli 1500 suomalaista seuraajaa Instagramissa? Ota yhteyttä miia@hersecret.fi kysyäksesi tuoteyhteistyöstä."
      button={
        <Link href="https://hersecret.targetcircle.com/signup?ref=hersecret">
          <a>
            <Button>Liity nyt</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
