//Import Packages @ Top (Only Ones Needed for Specific Page)
import React from 'react';
import { RecipesService } from '../../../services';
import { Row, Col, Table, Button, Input } from 'antd';

//Class contains constructor, functions, render & return
class RecipeHomePage extends React.Component {
    //Constructor allows me to create variables
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            search: "",
            appID: "b14a6eda",
            appKEY: "46d921afdb1491f1b84efdfdc7de03b2"
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
                recipes: data
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
                    <Col span={12}>
                        <div>
                            <h1>Recipe Search App</h1>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Input
                            type="text"
                            placeholder="Search Recipe Here"
                            value= {this.state.search}
                            onChange={(e) => this.handleUpdateSearch(e)}
                        />
                    </Col>
                    <Col>
                        <Button className="primary-btn" onClick={() => this.getRecipes()}>
                            Search
                        </Button>
                    </Col>
                </Row> 
             </div>
        )
    }
}

export default RecipeHomePage