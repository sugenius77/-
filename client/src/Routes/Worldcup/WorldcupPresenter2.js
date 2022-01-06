import React from 'react'
import { Box, Table, Label, Checkbox, Text, Status,Flex, Heading,Mask, Image } from "gestalt";
import styled, {css, keyframes} from "styled-components";

function WorldcupPresenter2() {
    const Image = styled.div`
    background-image: url(/images/${props=>props.bgurl}.png);
    height: 50px;
    width: 50px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
    `;
    const style_ = {
        paddingTop:'50px',
        width: '600px',
        margin:'0 auto',
        display: 'flex',
        justifyContent: 'center'
    }
    return (
        <>
        <div style={{height:300}}></div>
            <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                <div style={{display:'flex', height:300, border:'30px solid #a4d9f5', borderRadius:'5px',paddingBottom:'20px'}}>
                <div style={style_}>
        <Table  maxHeight={300}>
            <Table.Header sticky>
              <Table.Row>
                <Table.HeaderCell>
                  <Text weight="bold">사진</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">메뉴</Text>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <Text weight="bold">순위</Text>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Box width={"300px"}>
                      <div style={{backgroundSize:'cover',backgroundImage:`url(${"/images/1-1.png"})`, width:'300px', height:'200px'}}></div>
                  </Box>
                </Table.Cell>
                <Table.Cell>
                    <div style={{width:"100px", display:'flex', justifyContent:'center'}}>
                        <Text>갈비찜</Text>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    <div style={{width:"100px", display:'flex', justifyContent:'center'}}>
                        <Text>1위</Text>
                    </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
        </Table>
        </div>      
                </div>
            </div>
        
        </>
    );
}

export default WorldcupPresenter2;
