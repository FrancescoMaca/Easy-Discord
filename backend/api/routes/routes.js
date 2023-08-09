import express from 'express'

import discordController from '../controllers/discord-controller.js'
import authController from '../controllers/auth-controller.js'
import pageController from '../controllers/page-controller.js'

const router = express.Router();

router.post('/api/auth', authController.login)

router.get('/api/logout', authController.logout);
router.get('/api/users', discordController.getUserInfo);
router.get('/api/users/servers', discordController.getServerInfo);
router.get('/', pageController.getLoginPage)
router.get('/auth', pageController.getRedirectPage)
router.get('/homepage', pageController.getHomePage)

export default router;