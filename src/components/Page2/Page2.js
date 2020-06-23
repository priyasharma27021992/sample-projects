import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { AppWrapper, Title } from '../../styledComponents/StyledComponents';

const page2 = () => {
        return (
            <AppWrapper>
               <Title>Welcome To Page 2</Title>
            </AppWrapper>
        );
}

export default withRouter(page2);
