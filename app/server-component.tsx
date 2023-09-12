import { headers } from 'next/headers';

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

const ServerComponent = async () => {

  const users = await getUsers()

  // getting the pathname from the headers
  const pathname = headers().get('x-pathname');

  console.log('que tiene: ', pathname)

  //console.log(users.props.data)

  return (
    <div>
      Envio la data al component
      {
        users.props.data.map((user: any) => (
          <p key={user.id}>{user.name} y {user.username}</p>
        ))
      }
    </div>
  )

}

export default ServerComponent
