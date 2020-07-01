import React, { Component } from "react";
import Footer from "../../components/Footer";
import CartRestaurant from "../CartRestaurant";
import SearchPlaceholder from "../SearchPlaceholder";
import HistoryDivider from "../HistoryDivider/HistoryDivider";
import { connect } from "react-redux";
import { getRestaurants, setInputSearch } from "../../actions";
import Loading from "../../components/Loading/index";
import { routes } from "../Router/index";
import { push } from "connected-react-router";

import {
  ContentHomeWrapper,
  CategoryMenuStyled,
  CategoryMenuWrapper,
} from "./styles";
import { StyledTextCat } from "../../style/styled";

class FeedPage extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const handleInputClear = () => {
      this.props.setInputSearch("");
    };

    const handleSearchCategory = (category) => {
      this.props.setInputSearch(category);
    };

    const { restaurants, inputSearch } = this.props;

    const newRestaurantsList = [...restaurants];
    const filteredRestaurantsList = newRestaurantsList.filter(
      (restaurants) =>
        restaurants.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
        restaurants.category.toLowerCase().includes(inputSearch.toLowerCase())
    );

    const categoryList = restaurants.map((restaurants) => {
      return restaurants.category;
    });

    const categoryRestaurantNoDuplicate = categoryList.filter(
      (category, index) => {
        return categoryList.indexOf(category) === index;
      }
    );

    let allRestaurants = (
      <>
        <CategoryMenuWrapper>
          {categoryRestaurantNoDuplicate.map((categoryItem) => {
            return (
              <CategoryMenuStyled
                onClick={() => handleSearchCategory(categoryItem)}
              >
                <StyledTextCat>{categoryItem}</StyledTextCat>
              </CategoryMenuStyled>
            );
          })}
        </CategoryMenuWrapper>

        {restaurants.map((restaurants) => {
          return (
            <CartRestaurant
              image={restaurants.logoUrl}
              name={restaurants.name}
              deliveryTime={restaurants.deliveryTime}
              shipping={restaurants.shipping}
              id={restaurants.id}
              key={restaurants.id}
            />
          );
        })}
      </>
    );

    let allRestaurantsFilter = (
      <>
        <StyledTextCat
          color={"primary"}
          variant={"subtitle1"}
          onClick={handleInputClear}
        >
          Limpar Busca
        </StyledTextCat>
        {filteredRestaurantsList.length === 0
          ? "Não encontramos o restaurante :("
          : filteredRestaurantsList.map((restaurants) => {
              return (
                <CartRestaurant
                  image={restaurants.logoUrl}
                  name={restaurants.name}
                  deliveryTime={restaurants.deliveryTime}
                  shipping={restaurants.shipping}
                  id={restaurants.id}
                  key={restaurants.id}
                />
              );
            })}
      </>
    );

    return (
      <>
        <HistoryDivider head={"IFuture"} />

        <ContentHomeWrapper>
          <SearchPlaceholder restaurants={this.props.restaurants} />

          {this.props.inputSearch === ""
            ? allRestaurants
            : allRestaurantsFilter}
        </ContentHomeWrapper>

        {this.props.restaurants[0] ? "" : <Loading open={true} />}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  filteredRestaurants: state.restaurants.filteredRestaurants,
  inputSearch: state.filterSearch.inputSearch,
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: () => dispatch(getRestaurants()),
  setInputSearch: (inputData) => dispatch(setInputSearch(inputData)),
  doSignUp: () => dispatch(push(routes.signUp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
