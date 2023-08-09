const pageController = {
    async getLoginPage(req, res) {
        if (req.cookies.accessToken) {
            res.redirect('/homepage')
        } else {
            res.sendFile('index.html', { root: '.'})
        }
    },
    async getRedirectPage(req, res) {
        res.sendFile('auth.html', { root: '.' });
    },
    async getHomePage(req, res) {
        res.sendFile('homepage.html', { root: '.' });
    }
}

export default pageController