//Import Packages @ Top (Only Ones Needed for Specific Page)
import React from 'react';
import PropsTypes from 'prop-types';
import { RecipesService } from '../../../services';
import { Row, Col, Table, Button, Input } from 'antd';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBeer} from "@fortawesome/free-solid-svg-icons";

//Class contains constructor, functions, render & return
class RecipeHomePage extends React.Component {
    //Constructor allows me to create variables
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            search: "",
            appID: "b14a6eda",
            appKEY: "46d921afdb1491f1b84efdfdc7de03b2",
        }
    }

//Functions are present inside class but outside of constructor and rendor
    handleUpdateSearch = (e) => {
        this.setState({
        search: e.target.value
        });
        // console.log(this.state.search);
    }

    getRecipes = () => {
        const query = this.state.search;
        const id = this.state.appID;
        const key = this.state.appKEY;
        RecipesService.GetRecipes(query,id,key).then(data => {
            this.setState({
                recipes: data.hits       
            })
            console.log(this.state.recipes);
        },
        (error) => {
            console.log(error(error.toString()))
        }
        );
    }

    render () {
        return (
            <div className="app-page-container mt-5">
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div>
                            <h1>Recipe Search App</h1>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Input
                            suffix={
                                <Button className="primary-btn" onClick={() => this.getRecipes()}>
                                    Search
                                </Button> 
                            }
                            type="text"
                            placeholder="Search Recipe Here"
                            value= {this.state.search}
                            onChange={(e) => this.handleUpdateSearch(e)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        {
                            this.state.recipes.map((recipe) => (
                                <div className="brew-card card-align">
                                    <Row gutter={[16, 16]} className="p-3 ml-4" style={{ width: '95%' }}>
                                        <Col span={12}>
                                            <div
                                                className="float-left"
                                                style={{ cursor: 'pointer', width: '25%' }}
                                            >
                                                <img
                                                    alt="placeholder"
                                                    className="img-fit"
                                                    src={recipe.recipe.image}
                                                />
                                            </div>
                                        </Col>       
                                        <Col span={12}>
                                            <div
                                                className="card-title"
                                            >
                                                <div className="d-flex">
                                                    <span>{recipe.recipe.label}</span>
                                                </div>
                                            </div>
                                            <div>
                                                {recipe.recipe.url}
                                            </div>
                                        </Col>
                                        <Col span={24}>
                                            <hr />
                                            <div className="d-inline-flex">
                                                <div>
                                                    <div className="sub-title">
                                                        Dish Type
                                                    </div>
                                                    <p className="ml-0">
                                                       {recipe.recipe.dishType[0]}
                                                    </p>
                                                </div>
                                                <div className="ml-4">
                                                <span className="sub-title">
                                                    Calories
                                                </span>
                                                    {Math.round(recipe.recipe.calories)}
                                                </div>
                                            </div>
                                            {/* <div className="float-right">
                                                <Button className="primary-btn" onClick={() => this.handleNavigate(brewery.id)}>
                                                    View Details
                                                </Button>
                                            </div> */}
                                        </Col>
                                    </Row>
                                </div>
                            
                            ))
                        }
                    </Col>
                </Row>

            </div>

        );      
    }
}

export default RecipeHomePage