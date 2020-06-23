import React, { Component } from 'react';
import { withRouter, Prompt } from 'react-router-dom';

import history from '../../history';
import { AppWrapper, Title, Button } from '../../styledComponents/StyledComponents';

class Page1 extends Component {
    state = {
        shouldBlock: true
    }

    componentDidMount() {
        history.block();
    }

    /**
     * shouldBlock is the condition for going to the next page 
     */
    componentDidUpdate = () => {
        const { shouldBlock } = this.state;
        if (shouldBlock) {
          window.onbeforeunload = () => true
        } else {
          window.onbeforeunload = undefined
        }
      }

    render() {
        const { shouldBlock } = this.state;
        return (
            <AppWrapper>
                <Title>Welcome To Page 1!</Title>
                <Prompt
                    when={shouldBlock}
                    message='You have unsaved changes, are you sure you want to leave?'
                    />
                <Button onClick={() => this.props.history.push('/page2')}>Go To Page 2</Button>
            </AppWrapper>
        )
    }
}

export default withRouter(Page1);
