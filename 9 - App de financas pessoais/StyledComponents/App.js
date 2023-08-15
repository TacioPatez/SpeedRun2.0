import React from 'react';
import { View, Text/*, StyleSheet*/ } from 'react-native'

import styled from 'styled-components/native'

export default function App(){
  return(
    // <View style={styles.container} --Caso utilizasse o Style Sheet>
    <Container> 
      <Text style={{color:'#fff'}}>Styled Component</Text>
    </Container>
    // </View>
  )
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #000;
`;

/*const styles = StyleSheet.create({  
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
)*/