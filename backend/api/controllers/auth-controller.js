
const authController = {
    async logout(req, res) {
        try {
            res.clearCookie('accessToken')
            res.status(200).json({redirect_url: '/'})
        } catch (error) {
            res.status(500).json({error: 'an error occurred during logout'})
        }
    },

    async login(req, res) {
        const code = req.body.code;
        const params = new URLSearchParams();
        
        params.append('client_id', process.env.CLIENT_ID)
        params.append('client_secret', process.env.CLIENT_SECRET)
        params.append('grant_type', 'authorization_code')
        params.append('code', code)
        params.append('redirect_uri', process.env.REDIRECT_URI)

        const response = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        if (response.ok) {
            const discordRes = await response.json()

            res.cookie('accessToken', discordRes.access_token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })

            res.status(200).json({ redirect_url: '/homepage' })
        } else {
            res.status(500).json(response)
        }
    }
}

export default authController