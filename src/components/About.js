import React from 'react'
import { Container, Wrapper } from '../styles/StyledAbout'

export const About = (props) => {
    return (
        <Container id="about">
            <Wrapper>
                <div className="content">
                    <div className="text">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat sint error debitis sunt aliquid! Dignissimos eaque veniam earum debitis commodi optio excepturi quia voluptas totam? Dignissimos tenetur eligendi ullam.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea quibusdam, aspernatur necessitatibus, consectetur illum dolores architecto sed provident consequuntur ab dolorum exercitationem voluptas? Ab explicabo minima excepturi beatae aliquid.</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eum quisquam voluptatem quaerat iste deleniti veniam, dolorum, eos, id quasi laudantium tenetur natus cumque odit velit doloremque sequi dicta nam.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat sint error debitis sunt aliquid! Dignissimos eaque veniam earum debitis commodi optio excepturi quia voluptas totam? Dignissimos tenetur eligendi ullam.</p>
                        <br />
                        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat sint error debitis sunt aliquid! Dignissimos eaque veniam earum debitis commodi optio excepturi quia voluptas totam? Dignissimos tenetur eligendi ullam.</i>
                        <br />
                    </div>
                    <img alt="" src={props.image}></img>
                </div>
            </Wrapper>
        </Container>
    )
}
