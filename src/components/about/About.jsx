import './About.scss';
import Contacts from '../contacts/Contacts';
import images from '../images/Images';

const contactsList = [
    { image: images.logoWhatsapp, alt: "Logo do Whatsapp", text: "(21) 99999-9999", link: "#"},
    { image: images.logoInstagram, alt: "Logo do Instagram", text: "@icespot", link: "#"},
    { image: images.logoFacebook, alt: "Logo do Facebook", text: "/icespot", link: "#"},
    { image: images.logoTwitter, alt: "Logo do Twitter", text: "@icespot", link: "#"},
];

export default function About() {
    return(
        <section id="about" className="container-about bg-dark-purple">
            <div className="about-primary-div">
                <div className="about-title-div">
                    <h2 className="about-title title fs-medium2 txt-cream ">QUEM SOMOS</h2>
                    <p className="text fs-small txt-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Exercitationem vitae consectetur tenetur fugit nam necessitatibus 
                        ab velit nemo cupiditate quae magnam dolorum facere, nisi dignissimos, 
                        repudiandae porro praesentium alias qui.
                    </p>
                </div>            
            </div>

            <div className="contacts-div">
                {
                    contactsList.map(item => (
                        <Contacts
                            image={item.image}
                            alt={item.alt}
                            text={item.text}
                            link={item.link}
                        />
                    ))
                }
            </div>

        </section>
    )
}