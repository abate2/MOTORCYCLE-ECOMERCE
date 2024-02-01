class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <img src={this.props.source} alt={this.props.description}/>
                <h2 className="text-center">{this.props.description}</h2>
                <p className="text-center">{this.props.price}</p>
            </React.Fragment>
        )
    };
} 
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves1" price="$10USD"/>, document.getElementById("product1"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves2" price="$15USD"/>, document.getElementById("product2"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves3" price="$18USD"/>, document.getElementById("product3"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves4" price="$11USD"/>, document.getElementById("product4"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves5" price="$19USD"/>, document.getElementById("product5"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves6" price="$12USD"/>, document.getElementById("product6"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves7" price="$20USD"/>, document.getElementById("product7"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves8" price="$40USD"/>, document.getElementById("product8"))
ReactDOM.render(<Product source="./images/guantes.jpg" description="Gloves9" price="$11USD"/>, document.getElementById("product9"))