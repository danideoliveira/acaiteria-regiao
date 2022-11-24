import "./Contacts.scss";

export default function Contacts({image, alt, text, link}) {
    return (
        <section className="contacts">
            <a href={link}>
                <img src={image} alt={alt}/>
            </a>
            <div className="contact-info">
                <p className="text fs-small txt-light-cream">{text}</p>
            </div>
        </section>
    );
}
