import React, {useState, useEffect}from 'react'
import axios from "axios";
import { Box, Table, Label, Checkbox, Text, Status,Flex, Heading,Mask, Image } from "gestalt";
import styled, {css, keyframes} from "styled-components";
import Table_ from './Table_';
  
const Text_ = styled.h2`
color: ${props=>props.color};
display: inline;
`;
const style_ = {
    paddingTop:'50px',
    width: '600px',
    margin:'0 auto',
    display:'flex',
    justifyContent:'center'
}
function WorldcupPresenter2() {
    const [data, setData] = useState([]);
    const [rankData, setRankData] = useState([]);
    useEffect( async() => {
      try{
          await axios.get(`/worldcup/rank`).then((test)=>{
            // console.log(test.data, 'test');
            
            [test].map(res=>(
              setData(
                ...data,
                res.data
              )
            ));       
          });
      }catch(error){
          console.log("worldcup/rank"+"-error", error)
      }
    }, []);
    useEffect( async() => {
      if(data.length > 0){
        sort_();
      }
    }, [data]);
    const sort_ = ()=>{
      const sample = [...data];
      sample.sort((a, b) => (a[1]) - (b[1]));
      setRankData(sample);
    }
    const urlErrorCheck = (url_)=>{
      let result = "";
      for (let i=0; i<url_.length; i++) { 
          result = result+(url_[i]);
          if (url_[i]=='s' && url_[i+1]!="\/"){ result = result+"\/"; }
      }
      return result;            
    }
    const table_ = data.map((res,index)=>{
        if(index <= 10){
          return <Table_ key={index} url={`${urlErrorCheck(res[2])}`} menu={res[0]} rank={res[1]} />;
        }
    })
    
  

    return (
        <>
        <div style={{ margin:'0 auto', padding:'100px' }}></div>
            <div style={{textAlign:'center'}} >
                <Text_ color={"#81c8ee"}>메뉴 </Text_>
                <Text_ color={"#fec478"}>Ranking </Text_>
            </div>
            <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                <div style={{display:'flex',minHeight:"700px",overflow:'auto', border:'30px solid #a4d9f5', borderRadius:'5px',paddingBottom:'20px'}}>
                  <div style={style_}>
                  <Table  maxHeight={300}>
                  <Table.Header sticky>
                    <Table.Row>
                      <Table.HeaderCell>
                        <Text weight="bold" >사진</Text>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <Text weight="bold">메뉴</Text>
                      </Table.HeaderCell>
                      <Table.HeaderCell>
                        <Text weight="bold" color={"#fec478"}>순위</Text>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  {table_}
                  </Table.Body>
                  </Table>  
                  
                  </div>      
                </div>
        </div>
        
        </>
    );
}

export default WorldcupPresenter2;
