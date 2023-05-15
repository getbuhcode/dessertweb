import homeImg from '../images/bakingImg.jpg';

const Home = () => {
    return ( 
        <div className="home">
            <img src={homeImg} alt="" />
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim varius, vestibulum nulla mattis, commodo mauris. Integer sit amet ex ante. Suspendisse et diam commodo, bibendum dolor eget, sodales turpis. Praesent sagittis fringilla dictum. Aenean neque nisl, accumsan in sem eu, dictum tempus ante. Integer bibendum ut sapien sit amet luctus. Nullam rutrum orci leo, dignissim dapibus justo molestie ut. Sed tincidunt leo et metus convallis, id venenatis turpis tincidunt. Curabitur nibh ipsum, pellentesque in enim ut, sollicitudin lobortis leo. Donec auctor malesuada vehicula. Suspendisse feugiat sollicitudin dignissim. Nulla eget massa a urna convallis dapibus sed ut purus. Curabitur vulputate vel ante et gravida.</p>
            <p>Suspendisse pulvinar finibus neque non bibendum. Cras lobortis sapien non urna fringilla, sit amet facilisis mauris egestas. Nam a felis at elit lacinia accumsan. Morbi feugiat ac lacus vel posuere. Vestibulum blandit diam sed ornare rutrum. Sed ullamcorper nec ipsum sed commodo. Praesent eu porta lacus. Pellentesque commodo tempus luctus.</p>
        </div>
    );
}
 
export default Home;