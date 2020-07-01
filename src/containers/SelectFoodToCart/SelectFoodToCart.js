import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  ButtonRemove,
  ButtonAdd,
} from "../../components/CardMenu/CardMenuStyles";
import { connect } from "react-redux";
import {
  saveProducts,
  removeProdutcs,
} from "../../actions/addAndRemoveProducts";
import { StyledTextHD } from '../../style/styled'


class SelectFoodToCart extends React.Component {
  state = {
    open: false,
    amount: 0,
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddProducts = (id, price, title, description, img) => {
    const newProducts = {
      quantity: this.state.amount,
      id,
      price: this.state.amount * this.props.price,
      title,
      description,
      img,
    };
    this.props.saveProducts(newProducts);
    this.handleClose();
  };

  handleRemoveItem = (id) => {
    this.props.removeProdutcs(id);
  };

  render() {
    const { products, id, price, title, description, img } = this.props;
    return (
      <div>
        {products.find((food) => food.id === id) ? (
          <ButtonRemove onClick={() => this.handleRemoveItem(id)}>
            <StyledTextHD color={'primary'} variant={'caption'}>Remover</StyledTextHD>
          </ButtonRemove>
        ) : (
            <ButtonAdd onClick={() => this.handleClickOpen()}>
              <StyledTextHD variant={'caption'}>Adicionar</StyledTextHD>
            </ButtonAdd>
          )}

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Selecione a quantidade desejada</DialogTitle>
          <DialogContent>
            <form>
              <FormControl>
                <Select
                  value={this.state.amount}
                  onChange={this.handleChange("amount")}
                >
                  <MenuItem value="0">
                    <em>0</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button
              onClick={() =>
                this.handleAddProducts(id, price, title, description, img)
              }
              color="primary"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveProducts: (newsProducts) => dispatch(saveProducts(newsProducts)),
    removeProdutcs: (id) => dispatch(removeProdutcs(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.saveAndRemoveProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFoodToCart);
