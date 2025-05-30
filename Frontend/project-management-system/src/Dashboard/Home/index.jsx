import { LogoLink } from "Navbar/Styles";
import React from "react";
import { Card, TDescription, PTitle } from "./Styles";


const Home = () =>{
    return(
        <LogoLink to="/dashboard/project">
        <Card>
            <PTitle>Project 1</PTitle>
            <TDescription>This is first project based on jira</TDescription>
        </Card>
        </LogoLink>
    );
};

export default Home;