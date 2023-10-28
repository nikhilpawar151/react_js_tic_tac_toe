import React, { useEffect, useState } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';

const GameComponent = () => {
  let cardElevation = 3

  const [data, setData] = useState([0,0,0,0,0,0,0,0,0])
  const [nextIcon, setNextIcon] = useState(1)
  const [winner, setWinner] = useState(0)

  const [state , updateState] = useState({
    data :[0,0,0,0,0,0,0,0,0],
    nextIcon : 1,
    winner : 0
  })
  

  const handleTick = (tick : number) => {
    if(data[tick] !== 0)
      return 0
    if(winner !== 0)
      return 0
    const updatedData = [...data];
    updatedData[tick] = nextIcon;
    setNextIcon(nextIcon === 1 ? 2 : 1)
    setData(updatedData)
  }

  useEffect(()=> {
    checkWin()
  }, [data])
  
  const declareWin = (win : number) =>{
    setWinner(win)
  }

  const checkWin = () =>{
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== 0)
      declareWin(data[0])
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== 0)
      declareWin(data[3])
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== 0)
      declareWin(data[8])
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== 0)
      declareWin(data[0])
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== 0)
      declareWin(data[1])
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== 0)
      declareWin(data[2])
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== 0)
      declareWin(data[0])
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== 0)
      declareWin(data[2])
    else if(data[0] !== 0 && data[1] !== 0 && data[2] !== 0 && data[3] !== 0 && data[4] !== 0 && data[5] !== 0 && data[5] !== 0 && data[6] !== 0 && data[7] !== 0 && data[8] !== 0)
      declareWin(3)
  }

  //checkWin()

  const getIcon = (tick : number) => {
    if(tick === 1){
      return <CircleOutlinedIcon sx={{fontSize : '4rem', color : '#0F0'}}/>
    }else if(tick === 2)
      return <CloseOutlinedIcon sx={{fontSize : '4rem', color : '#F00'}}/>
  }

  
  const restartGame = () =>{
    setWinner(0)
    setData([0,0,0,0,0,0,0,0,0])
    setNextIcon(1)
  }

  return (
    <div className='mainDiv'>
        <Stack spacing={3} className='dashboard' sx={{width : '400px', height : '400px'}}>
          <Box className="gameWindow" sx={{p : 3}}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" className='tickCardRow' >
                <Box className='tickCard' onClick={() => handleTick(0)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[0])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(1)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[1])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(2)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[2])}
                </Box>
              </Stack>
              <Stack direction="row" className='tickCardRow'>
                <Box className='tickCard' onClick={() => handleTick(3)} sx={{boxShadow : cardElevation}}>  
                  {getIcon(data[3])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(4)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[4])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(5)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[5])}
                </Box>
              </Stack>
              <Stack direction="row" className='tickCardRow'>
                <Box className='tickCard' onClick={() => handleTick(6)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[6])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(7)} sx={{boxShadow : cardElevation}}>  
                  {getIcon(data[7])}
                </Box>
                <Box className='tickCard' onClick={() => handleTick(8)} sx={{boxShadow : cardElevation}}>
                  {getIcon(data[8])}
                </Box>
              </Stack>
            </Stack>
          </Box>
          <Box className="boxName">
            { winner === 0 && <Typography variant='h4' sx={{fontWeight : '700'}}>Result</Typography> }
            { winner === 1 && <><CircleOutlinedIcon sx={{fontSize : '2.5rem', color : '#0F0'}}/> <Typography variant='h4' sx={{fontWeight : '700'}}> Won</Typography></> }
            { winner === 2 && <><CloseOutlinedIcon sx={{fontSize : '2.5rem', color : '#F00'}}/><Typography variant='h4' sx={{fontWeight : '700'}}> Won</Typography></> }
            { winner === 3 && <Typography variant='h4' sx={{fontWeight : '700'}}>No Result</Typography> }
          </Box>
          {winner === 0 ? 
            <Box className="boxName">
              <Typography variant='h4' sx={{fontWeight : '700'}}>Tic Tac Toe</Typography>
            </Box>
            :
            <Box className="boxResult" onClick={restartGame}>
              <RefreshIcon sx={{fontSize : '2.5rem'}}/>
              <Typography variant='h4' sx={{fontWeight : '700'}} >
                Restart
              </Typography>
            </Box>
          }
          
        </Stack>
    </div>
  )
}

export default GameComponent