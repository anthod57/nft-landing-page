import React from 'react'
import { Container } from '../styles/StyledRoadmapCheckpoint'
import { useInView } from 'react-intersection-observer';

export const RoadmapCheckpoint = (props) => {

    const { ref } = useInView({ threshold: 0, onChange: (inView, entry) => {
        if(inView){
            entry.target.style = "transform: none";
        }else{
            if(entry.boundingClientRect.top > 0){
                entry.target.style = "";
            }
        }
    }, delay: 250});

    return (
        <Container ref={ref} right={props.right}>
            <div className="check-point">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </Container>
    )
}
