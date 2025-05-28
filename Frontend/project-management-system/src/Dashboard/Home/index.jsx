import { LogoLink } from "Navbar/Styles";
import React from "react";
import { Card, Title } from "./Styles";


const Home = () =>{
    return(
        <LogoLink to="/dashboard/project">
        <Card>
            <Title>Project 1</Title>
        </Card>
        </LogoLink>
    );
};

export default Home;