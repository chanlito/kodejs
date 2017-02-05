export async function validateLogin(ctx, next) {
  await ctx.validateRequest(ctx.request.body, {
    email: 'required|email|max:255',
    password: 'required|min:6|max:255'
  })
  await next()
}

export async function validateRegister(ctx, next) {
  await ctx.validateRequest(ctx.request.body, {
    email: 'required|email|unique_email|max:255',
    fullName: 'alpha_space|max:255',
    password: 'required|min:6|max:255',
    password_confirmation: 'required|same:password'
  }, {
    'password_confirmation.required': 'Please confirm your password.',
    'password_confirmation.same': `It looks like the passwords are not the same.`
  })
  await next()
}
