export default function (context) {


  if(context.store.state.store.isAuth)     console.log('YOU ARE AUTHENTICATED')
  else     console.log('YOU ARE NOT AUTHENTICATED')
}
