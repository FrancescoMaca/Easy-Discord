
const discordController = {
    async getUserInfo(req, res) {
        try {
        const response = await fetch('https://discord.com/api/users/@me', {
            headers: {
            authorization: `Bearer ${req.cookies.accessToken}`
            }
        })
    
        const data = await response.json()
    
        res.json(data)
    
        } catch (error) {
        res.status(500).json({ error: 'An error occurred' })
        }
    },
    async getServerInfo(req, res) {
        try {
            const response = await fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
                authorization: `Bearer ${req.cookies.accessToken}`
            }
            })
            
            const data = await response.json()

            // If the user is being rate limited, then it retries after a while
            if (data.retry_after) {
            setTimeout(() => {
                discordController.getServerInfo(req, res)
            }, data.retry_after * 1000)

            return
            }

            res.json(data)

        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export default discordController