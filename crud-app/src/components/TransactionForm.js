import { React, Component } from "react";

class TransactionForm extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1) {
            return {
                beneficiaryAccountNum: '',
                iFsc: '',
                beneficiaryAccountName: '',
                amount: ''
            }
        }
        else
            return this.props.list[this.props.currentIndex]
    }

    // react component lifecycle method
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({...this.returnStateObject()})
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // we store transaction details in localstorage
    //array of transaction we store either in TransactionForm or TransactionList component state object 
    handleSubmit = (event) => {
        event.preventDefault()  //prevents default behaviour of html form
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input name="beneficiaryAccountNum" placeholder="A/C No." value={this.state.beneficiaryAccountNum}
                    onChange={this.handleInputChange} />
                <br />
                <input name="iFsc" placeholder="iFsc No." value={this.state.iFsc}
                    onChange={this.handleInputChange} />
                <br />
                <input name="beneficiaryAccountName" placeholder="beneficiary Account Name" value={this.state.beneficiaryAccountName}
                    onChange={this.handleInputChange} />
                <br />
                <input name="amount" placeholder="amount" value={this.state.amount}
                    onChange={this.handleInputChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default TransactionForm