import React, {useEffect} from 'react'

import useInputs from './useInputs'

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  })
  const {name, nickname} = state
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!')
    console.log({name, nickname})
    return() => {
      console.log('cleanup')
      console.log(name)
    }
  })

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info