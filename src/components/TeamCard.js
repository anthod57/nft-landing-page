import React from 'react'
import { Container } from '../styles/StyledTeamCard'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const TeamCard = (props) => {


    const { ref } = useInView({
        threshold: 0, onChange: (inView, entry) => {
            if (inView) {
                entry.target.style = "transform: none";
            } else {
                if (entry.boundingClientRect.top > 0) {
                    entry.target.style = "";
                }
            }
        }, delay: 100
    });

    return (
        <Container ref={ref}>
            <div className="profile-picture">
                <img alt={props.name} src={props.image}></img>
                <a href={props.url}>
                    <div className="social-media">
                        <FontAwesomeIcon icon={brands('twitter')} />
                    </div>
                </a>
            </div>
            <h3>{props.name}</h3>
        </Container>
    )
}
