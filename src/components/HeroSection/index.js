import React, { useState } from 'react';
import image from '../../images/bg-image.jpg';
import { Button } from '../ButtonElements';
import {
	HeroContainer,
	HeroBg,
	ImageBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id='home'>
			<HeroBg>
				<ImageBg src={image} type='image/jpg' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Digital Curency Made Easy</HeroH1>
				<HeroP>
					Sign up for a new account today and recieve $250 in crypto towards
					your next payment.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to='signup'
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary='true'
						dark='true'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
