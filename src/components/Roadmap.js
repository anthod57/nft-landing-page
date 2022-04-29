import React from 'react'
import { Container, Wrapper, RoadMapContainer } from '../styles/StyledRoadmap'
import { RoadmapCheckpoint } from './RoadmapCheckpoint';


export const Roadmap = (props) => {

    return (
        <Container id="roadmap">
            <div className="custom-shape-divider-bottom-1651066306" style={{ top: "0", transform: "rotate(0deg)" }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="roadmap-background">
                <img src={props.bg} />
            </div>

            <Wrapper>
                <h2>Roadmap</h2>
                <RoadMapContainer>
                    {props.data ? props.data.map((item, index) => {
                        return (<RoadmapCheckpoint right={index % 2 === 0 ? false : true} title={item.title} description={item.description} key={index}></RoadmapCheckpoint>)
                    }) : ""}
                </RoadMapContainer>
            </Wrapper>

            <div className="custom-shape-divider-bottom-1651066306" style={{ bottom: "0", transform: "rotate(180deg) scaleX(-1)" }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
        </Container>
    )
}
