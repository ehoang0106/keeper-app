const date = new Date();
const currenYear = date.getFullYear();

const Footer = () => {
    return (  
        <div className="Footer">
            <footer>
                <p>Copyright © {currenYear}</p>
            </footer>
        </div>
    );
}

export default Footer;