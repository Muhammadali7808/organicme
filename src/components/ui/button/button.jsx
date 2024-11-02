import { Container } from "@mui/material";
import React from "react";
import { CustomButton, DefoltButton, PrametrayButton, SeconderyButton } from "./style";
export const ButtonDefault = () => {
    return (
        <Container>
            <CustomButton >Default Button</CustomButton>
            <SeconderyButton >Default Button</SeconderyButton>
            <PrametrayButton >Default Button</PrametrayButton>
            <DefoltButton>Default Button</DefoltButton>
        </Container>
    );
};
