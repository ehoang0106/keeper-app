
function Card(props) {
    return (<div>
        <h2>{props.name}</h2>
        <img src={props.imgURL} />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
    );
        
    
}

const Test = () => {
    return (  
        <div className="Test">
            <h1>My Contact</h1>

            <Card 
            name="Khoa Hoang" 
            imgURL="https://www.usdoctorsclinical.com/cdn/shop/products/Arthro7-Bottle-Mockup-225cc_4fcac7a4-2503-4793-9c8d-d17ba7781dc5_540x.png?v=1593650431"
            phone="714-363-1234"
            />
        </div>
    );
}

export default Test;