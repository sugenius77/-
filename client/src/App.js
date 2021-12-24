import React, {useState, useEffect} from 'react'

function App() {
  // json 데이터를 주고 받는 기본적인 형태
  // 나중에는 GET, POST 형태를 설계 해야 할 필요성 존재.
  const [data, setData] = useState( [{}] )

  useEffect(() => {
    fetch("/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof data.members === 'undefined') ?  (
          <p>Loading...</p>
      ): (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      
    </div>
  )
}

export default App
