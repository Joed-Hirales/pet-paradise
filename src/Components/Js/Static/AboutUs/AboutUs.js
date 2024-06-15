import React from "react";
import '../../../css/AboutUsStyle.css';

function AboutUs() {
    return (
        <div className="CompleteContainerAboutUs roboto-slab">
            <div className="ContainerImageAU">
                <img className='ImagenRedimension' src="https://images7.alphacoders.com/361/thumb-1920-361863.jpg" alt="background"/>
                <div className="TextContainer">
                    <p className='ImageText1'>Acerca de nosotros <p className='ImageText1 ImageText2'>Pet Paradise</p></p>
                </div>
            </div>
            <div className="AboutUsTextContainer">
                <p className="AboutUsText">
                    Pet Paradise es portal que administra un refugio de animales. Nos dedicamos a brindar un hogar temporal, atención médica y todas las necesidades básicas a animales abandonados y maltratados. Nuestro objetivo es encontrar hogares permanentes y amorosos para cada animal bajo nuestro cuidado. Creemos en la importancia de la adopción responsable y trabajamos arduamente para educar a la comunidad sobre el bienestar animal.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
;
