import * as process from 'node:process'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server || to.path === '/')
    return

  const username = localStorage.getItem('username')
  if (!username)
    return navigateTo('/')
})
