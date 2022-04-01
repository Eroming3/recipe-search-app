import React from 'react';
import { Row, Col, Table, Button, Input } from 'antd';


class RecipeHomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search:""
        }
    }

handleUpdateSearch = (e) => {
    this.setState({
        search: e.target.value
    })
}

rendor() {
    return (
        <>
         <div className="app-page-container mt-5">
           <Row>
                <Col span={12}>
                    <div>
                        <h1>Recipe Search App</h1>
                    </div>
                </Col>
                <Col span={10}>
                    <label> Search Bar </label>
                    <Input
                        type="text"
                        placeholder="Search Recipe Here"
                        value= {this.state.search}
                        onchange={handleUpdateSearch(e)}
                    />
                </Col>
                <Col>
                    <Button>
                        Search
                    </Button>
                </Col>
            </Row> 
         </div>

        </>
    )
}




}

export default RecipeHomePage