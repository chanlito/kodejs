/**
 * @api {post} /v1/authentication/register Register
 * @apiVersion 1.0.0
 * @apiName register
 * @apiGroup Authentication
 *
 * @apiParam {String} fullName Full name.
 * @apiParam {String} email Email address.
 * @apiParam {String} password Password.
 * @apiParam {String} password_confirmation Password confirmation.
 *
 * @apiSuccessExample Success response:
 * {
 *   "code": 200,
 *   "message": "OK",
 *   "email": "chanlito@icloud.com",
 *   "fullName": "Chanlito Hem",
 *   "username": "chanlito.ByThCBNde"
 * }
 */
