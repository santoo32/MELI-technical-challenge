import React from "react";
import {getItem} from "../../services/itemService"


class ProductDetails extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     product: {}
    };
  }

  componentDidMount() {
    const {
        match,
        history
      } = this.props;
    
    if(!match.params.id){
        history.push('/');
    } else {
        getItem(match.params.id)
        .then(({data})=> {
            if(data.err){
                //Product is not found
                history.push('/');
            }else{
                this.setState({product: data.item})
            }
        })
        .catch((err)=> {
            //General error catcher
            console.log(err)
        })
    }
  }

  render() {
    const { product } = this.state
    return (
        <div>
        <h1>{product.title}</h1>
        <img src={product.picture}></img>
        <h3>{product.description}</h3>
        </div>
    );
  }
}

export default ProductDetails;