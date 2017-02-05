/**
 * Module dependencies
 */
import indicative from 'indicative'

/**
 * Application dependencies
 */
import db from './database'

const { User } = db.models

const required = param => {
  throw new Error(`Missing parameter ${param}`)
}

/**
 * Define custom rules
 */
const alphaSpace = (data, field, message, args, get) => new Promise((resolve, reject) => {
  const fieldValue = get(data, field)
  if (!fieldValue) return resolve('validation skipped')
  const regex = /^[a-zA-Z ]*$/
  return regex.test(fieldValue) ? resolve('alpha_space validation passed') : reject(message)
})

const uniqueEmail = (data, field, message, args, get) => new Promise((resolve, reject) => {
  const fieldValue = get(data, field)
  if (!fieldValue) return resolve('validation skipped');
  (async function () {
    try {
      const user = await User.find({ where: { email: fieldValue } })
      return user ? reject(message) : resolve('validation passed')
    } catch (error) {
      reject('Oops, can not check for unique email right now.')
    }
  })()
})

indicative.extend('alphaSpace', alphaSpace, '{{field}} field can only contain alphabets and spaces.')
indicative.extend('uniqueEmail', uniqueEmail, 'Email address is already registered.')

export default () => async(ctx, next) => {
  ctx.validateRequest = async(body = required('body'), rules = required('rules'), messages) => {
    const defaultMessages = {
      email: 'It looks like the email address is not valid.',
      min: (field, validation, args) => `The ${field} field is too short. Must be at least ${args} characters long.`,
      max: (field, validation, args) => `The ${field} field is too long. Maximum number of characters allowed is ${args}.`,
      required: 'The {{field}} field is required.',
      ...messages
    }
    try {
      await indicative.validateAll(body, rules, defaultMessages)
    } catch (errors) {
      ctx.fail({
        message: 'Validation failed',
        firstError: errors[0].message,
        errors
      }, 422)
    }
  }
  await next()
}
