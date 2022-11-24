import './Home.scss';
import images from '../images/Images';

function Home() {
    return (
        <section className="container-home bg-cream">
            <div className="home-primary-div">
                <div className="home-title-div">
                    <h1 className="home-title title fs-big txt-cream">IceSpot</h1>
                    <p className="text fs-small txt-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla leo ex, accumsan eu dui vel, viverra aliquam metus.
                    </p>
                </div>
            </div>
            
            <div className="home-secondary-div">
                <div className="home-image-div">
                    <img className="home-ice-cream" src={ images.icecream } alt="Ice cream photo"/>
                </div>
                <img className="home-bubble" src={ images.homeBubble } alt="bubble"/>
            </div>        
        </section>
    )
};

export default Home;