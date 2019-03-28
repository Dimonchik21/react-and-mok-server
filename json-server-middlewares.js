module.exports = (req, res, next) => {
    if (req.url.includes('tags') || req.url.includes('institutions')) {
        req.query.isDeleted = 'false';
    }
    next()
};