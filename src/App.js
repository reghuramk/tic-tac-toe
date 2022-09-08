import { useState } from 'react';

// Material UI
import Button from '@mui/material/Button';

const App = () =>  {

    const [ reset, setReset ] = useState(false)

  const handleResetClick = () => {
    setReset(true)
  }

  return (
    <div className="App">
        <Button onClick={handleResetClick} variant="contained">Reset</Button>
    </div>
  );
}

export default App;
