import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#miksikumppaniksi">
            <a>Lue lisää</a>
          </Link>
        </li>
        <li>
          <Link href="https://hersecret.targetcircle.com/signup?ref=hersecret">
            <a>Liity nyt</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Kumppaniksi\n'}
            <span className="text-primary-500">Suosittele ja ansaitse.</span>
          </>
        }
        description="Rekisteröidy jo tänään ja ansaitse rahaa jakamalla viittauslinkkiämme!"
        button={
          <Link href="https://hersecret.targetcircle.com/signup?ref=hersecret">
            <a>
              <Button xl>Liity nyt</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
