import React from 'react'
import { Container, Wrapper } from '../styles/StyledFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Footer = (props) => {
    return (
        <Container>
            <Wrapper>
                <div className="footer-logo">
                    <a href="/">
                        <h2>
                            <span>LOGO</span>
                            <span>LOGO</span>
                        </h2>
                    </a>
                </div>
                <div className="footer-menu">
                    <ul>
                        {props.data?.menu ? props.data.menu.map((item, index) => {
                            if (item.position !== "bottom") return "";
                            return (<a href={item.url} key={index}><li>{item.title}</li></a>)
                        }) : ""}
                    </ul>
                </div>
                <div className="social-medias">
                    {props.data.socialMedias.discord && (<a href={props.data.socialMedias.discord}><FontAwesomeIcon icon={brands('discord')} /></a>)}
                    {props.data.socialMedias.twitter && (<a href={props.data.socialMedias.twitter}><FontAwesomeIcon icon={brands('twitter')} /></a>)}
                    {props.data.socialMedias.instagram && (<a href={props.data.socialMedias.instagram}><FontAwesomeIcon icon={brands('instagram')} /></a>)}
                    {props.data.socialMedias.telegram && (<a href={props.data.socialMedias.telegram}><FontAwesomeIcon icon={brands('telegram')} /></a>)}
                </div>
            </Wrapper>
        </Container>
    )
}
