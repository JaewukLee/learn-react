import React from 'react'
import qs from 'qs'

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const showDetail = query.detail === 'true'
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 튜토리얼</p>
      {showDetail && <p>detail 값이 true일때 보여짐</p>}
    </div>
  )
}

export default About