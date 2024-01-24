

class Script extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <a href={this.props.link} className="sidebar-labels">New {this.props.nameSection}{this.props.lastNameSection}</a>
        )
    };
}


ReactDOM.render(<Script nameSection="Section" lastNameSection=" 1" link="#"/>, document.getElementById("sidebar1"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 2" link="#"/>, document.getElementById("sidebar2"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 3" link="#"/>, document.getElementById("sidebar3"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 4" link="#"/>, document.getElementById("sidebar4"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 5" link="#"/>, document.getElementById("sidebar5"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 6" link="#"/>, document.getElementById("sidebar6"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 7" link="#"/>, document.getElementById("sidebar7"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 8" link="#"/>, document.getElementById("sidebar8"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 9"link="#"/>, document.getElementById("sidebar9"))
ReactDOM.render(<Script nameSection="Section" lastNameSection=" 10" link="#"/>, document.getElementById("sidebar10"))
