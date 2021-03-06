import React from 'react';
import styled from 'styled-components';
import deviceSizes from '../deviceSizes';

const SkillLevelWrapper = styled.div`
    float: right;
    display: inline-block;
    span {
        display: inline-block;
        // height: 10px; width: 10px;
        height: 7px; width: 7px;
        margin: 0 5px 0 5px;
        border-radius: 50%;
        // margin: 0 5px 0 5px;
        background-color: #6286DB;
        opacity: 0.3;
    }
    .active {
        background-color: #3366DB;
        opacity: 1;
    }

    @media ${deviceSizes.tablet} {
        span {
            height: 5px; width: 5px;
            margin: 0 3px 0 3px;
        }
    }
`

export default class SkillLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }

    componentDidMount() {
        let totalBlocks = 5;
        let activeBlocks = this.props.value;
        let blockArray = Array(totalBlocks);

        for (let i = 0; i < activeBlocks; i++) {
            blockArray[i] = true;
        }
        for (let i = activeBlocks; i < totalBlocks; i++) {
            blockArray[i] = false;
        }

        this.setState({array: blockArray})
    }

    render() {
        return (
            <SkillLevelWrapper>
                {this.state.array.map((block, index) => (
                    <span key={index} className={block ? 'active' : ''}></span>
                ))}
            </SkillLevelWrapper>
        )
    }
}