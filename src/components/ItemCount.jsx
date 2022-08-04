import React from 'react'
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);

  function removeItem(){
    if (count !== initial){
      setCount(count - 1);
    }
  }

  function addItem(){
    if (count !== stock){
      setCount (count + 1);
    }
  }

  return(
    <Box width={190} sx={{ marginX: 'auto' }}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
          <Button variant='contained' onClick={()=>removeItem()}><RemoveIcon/></Button>
          <Typography variant="body1" sx={{ userSelect: 'none' }}>
            {count}
          </Typography>
          <Button variant='contained' onClick={()=>addItem()}><AddIcon/></Button>
        </Box>
        <Box>
          <Button variant='contained' onClick={()=>onAdd(count)}>Agregar al carrito</Button>
        </Box>
    </Box>
  )
}
