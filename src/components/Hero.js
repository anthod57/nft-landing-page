import React, { useEffect } from 'react'
import { Container, Wrapper, NFTSPreview, NFTCard } from '../styles/StyledHero'

export const Hero = (props) => {

    const CardContainer = React.createRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            const cards = CardContainer.current.children;
            for (let i = 0; i < cards.length; i++) {
                const element = cards[i];
                element.style = "";
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [CardContainer])

    return (
        <Container id="home"> 
            <div className="hero-background">
                <img alt="" src={props.bg} />
            </div>

            <Wrapper>
                <h1>Lorem ipsum dolor sit</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <a href="https://opeansea.io/"><button>BUY ON OPENSEA</button></a>
                <NFTSPreview ref={CardContainer}>
                    <NFTCard style={{transform: "none"}}>
                        <img alt="NFT 1" src="https://openseauserdata.com/files/e76f6edd786ed0a24a2b52efc3aeb569.svg" />
                    </NFTCard >
                    <NFTCard style={{transform: "none"}}>
                        <img alt="NFT 2" src="https://openseauserdata.com/files/b54eec8c6727840ea0e54e5af255c1c0.svg" />
                    </NFTCard>
                    <NFTCard style={{transform: "none"}}>
                        <img alt="NFT 3" src="https://openseauserdata.com/files/2b531e2b15abe3ace98c5313cb7fc0b0.svg" />
                    </NFTCard>
                    <NFTCard style={{transform: "none"}}>
                        <img alt="NFT 4" src="https://openseauserdata.com/files/f1ec2c5f928167cfd727ee09206d9d5b.svg" />
                    </NFTCard>
                    <NFTCard style={{transform: "none"}}>
                        <img alt="NFT 5" src="https://openseauserdata.com/files/b0b26e71e2786992a4d2f527378be917.svg" />
                    </NFTCard>
                </NFTSPreview>
            </Wrapper>

            <div className="custom-shape-divider-bottom-1651066306">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
        </Container>
    )
}
