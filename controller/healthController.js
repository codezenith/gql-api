

exports.getHealthCheck = async () => {
	try {
        return { "status": "up" };
	} catch (err) {
		throw boom.boomify(err)
	}
}