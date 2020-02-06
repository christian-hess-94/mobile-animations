/** @format */

import React from 'react'

import styled from 'styled-components/native';
const Column = props => <ColumnFrame {...props}>{props.children}</ColumnFrame>

const ColumnFrame = styled.View`
  flex-direction: column;
	flex: ${props => props.flex ? props.flex : 1};
  align-items: center;
`;

export default Column
