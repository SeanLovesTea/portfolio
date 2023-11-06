import Header from './Header'
import Section_project from './Section_project'

function App() {

  return (
    <>
      <Header />
      <Section_project
        backgroundColor={'red-300'}
        reversed={true}
        projectTitle={'this'}
        description={'blablabla'}
        outcomes={{
          point1: 'point1',
          point2: 'point2',
          point3: 'point3',
        }}
        image={'image'}
        github={'github'}
        liveURL={'liveUrl'}
        techUsed={{
          1: 'js',
          2: 'node',
          3: 'typeScript',
          4: 'react'
        }}
      />
      <Section_project
      backgroundColor={'blue-400'}
      reversed={false}
      />
    </>
  )
}

export default App
