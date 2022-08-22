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
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Kumppanuusohjelma\n'}
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
