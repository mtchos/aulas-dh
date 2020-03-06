const home = (req, res) => {
    res.send('HTML home')
}

const about = (req, res) => {
    res.send('HTML about')
}

module.exports = {home, about}