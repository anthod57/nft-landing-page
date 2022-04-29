import React, { useState } from 'react'
import { Container, Wrapper, MobileMenuButton, MobileMenu } from '../styles/StyledNavbar'

export const Navbar = (props) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <ul style={{ justifyContent: "flex-end" }}>
                        {props.data ? props.data.map((item, index) => {
                            if (item.position !== "left") return "";

                            return (<a key={index} href={item.url}><li>{item.title}</li></a>)
                        }) : ""}
                    </ul>
                </div>

                <div className="center">
                    <div className="logo">
                        <a href="/">
                            <h2>
                                <span>LOGO</span>
                                <span>LOGO</span>
                            </h2>
                        </a>
                    </div>
                </div>

                <div className="right">
                    <ul>
                        {props.data ? props.data.map((item, index) => {
                            if (item.position !== "right") return "";

                            return (<a key={index} href={item.url}><li>{item.title}</li></a>)
                        }) : ""}
                    </ul>
                </div>
                <MobileMenuButton key={showMobileMenu} show={showMobileMenu} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MobileMenuButton>
                <MobileMenu show={showMobileMenu}>
                    <ul>
                        {props.data ? props.data.map((item, index) => {
                            if (item.position === "bottom") return "";

                            return (<a onClick={() => setShowMobileMenu(false)} key={index} href={item.url}><li>{item.title}</li></a>)
                        }) : ""}
                    </ul>
                </MobileMenu>
            </Wrapper>
        </Container>
    )
}
