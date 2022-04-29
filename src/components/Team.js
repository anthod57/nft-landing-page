import React from 'react'
import { Container, Wrapper } from '../styles/StyledTeam'
import { TeamCard } from './TeamCard'

export const Team = (props) => {
    return (
        <Container id="team">
            <div className="custom-shape-divider-bottom-1651066306" style={{ top: "0", transform: "scaleX(-1)" }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

            <div className="team-background">
                <img src={props.bg} />
            </div>

            <Wrapper>
                <h2>Team</h2>
                <div className="cards-container">
                    {props.data ? props.data.map((item, index) => {
                        return (
                            <TeamCard image={item.image} key={index} name={item.name} url={item.url} />
                        )
                    }) : ""}
                </div>
            </Wrapper>
        </Container>
    )
}
