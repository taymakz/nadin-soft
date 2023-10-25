

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server || to.path ==='/')
    return

  const username = localStorage.getItem('username')
  if (!username)
    return navigateTo('/')
})
