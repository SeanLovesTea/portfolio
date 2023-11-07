import Header from './Header'
import Project_section from './Project_section'

function App() {
  // colors: {
  //   myBeige: '#A69F95',
  //   myGray:  '#7A7A7A',
  //   myBlue: '#606B73',
  //   myWhite: '#d9d9d9'
  // }
  return (
    <>
      <Header />
      <Project_section
        backgroundColor={'myGray'}
        borderColor={'black'}
        textColor={'black'}
        image={'#'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem fuga minus impedit sint voluptates sequi rem, commodi nesciunt tenetur atque obcaecati voluptatibus facilis minima hic veniam, ipsum suscipit ullam!'}
        smallDescriton={'Lorem ipsum dolor sit amet consectetur adipisicing'}
        points={['point 1 bla bla', 'point 2 bla bla', 'point 3  hjs hlakjsd']}
        techstack={['Js', 'React', 'Node', 'Mongodb']}
        github={'www.github.com/seanlovestea'}
        liveSite={'#'}
        reversed={false}
      />
      <Project_section
        backgroundColor={'myBlue'}
        borderColor={'myBeige'}
        textColor={'white'}
        image={'#'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem fuga minus impedit sint voluptates sequi rem, commodi nesciunt tenetur atque obcaecati voluptatibus facilis minima hic veniam, ipsum suscipit ullam!'}
        smallDescriton={'Lorem ipsum dolor sit amet consectetur adipisicing'}
        points={['point 1 bla bla', 'point 2 bla bla', 'point 3  hjs hlakjsd']}
        techstack={['Js', 'React', 'Node', 'Mongodb']}
        github={'www.github.com/seanlovestea'}
        liveSite={'#'}
        reversed={true}
      />
      <Project_section
        backgroundColor={'myBeige'}
        borderColor={'myBlue'}
        textColor={'black'}
        image={'#'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem fuga minus impedit sint voluptates sequi rem, commodi nesciunt tenetur atque obcaecati voluptatibus facilis minima hic veniam, ipsum suscipit ullam!'}
        smallDescriton={'Lorem ipsum dolor sit amet consectetur adipisicing'}
        points={['point 1 bla bla', 'point 2 bla bla', 'point 3  hjs hlakjsd']}
        techstack={['Js', 'React', 'Node', 'Mongodb']}
        github={'www.github.com/seanlovestea'}
        liveSite={'#'}
        reversed={false}
      />
    </>
  )
}

export default App
