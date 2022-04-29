import React from 'react'
import { Container, Wrapper } from '../styles/StyledFeatures'

export const Features = (props) => {

    return (
        <Container id="features">
            <Wrapper>
                <div className="content">
                    <img alt="" src={props.image}></img>
                    <div className="text">
                        <h2 className="test">Features</h2>
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
                </div>
            </Wrapper>
        </Container>
    )
}
