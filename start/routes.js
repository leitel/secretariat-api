'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Welcome to secretariat API! Access https://github.com/leitel/secretariatAPI to check the routes.' }
})

Route.group(() => {
  Route.post('/', 'UserController.store')
  Route.get('/:id', 'UserController.show')
  Route.put('/:id', 'UserController.update')
  Route.delete('/:id', 'UserController.destroy')
}).prefix('user')

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout')
  Route.get('recovery', 'AuthController.recovery')
}).prefix('auth')

// Contact
//   List
//   View
//   Add
//   Update
//   Remove
//   Add phone
//   Update phone
//   Remove phone
//   Add address
//   Update address
//   Remove address
//   Add email
//   Update email
//   Remove email
