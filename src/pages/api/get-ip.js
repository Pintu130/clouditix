const getIp = (req, res) => {
    /*  try {
         const ip =
             req.socket.remoteAddress ||
             req.connection.remoteAddress ||
             req.headers['x-forwarded-for']
 
 
         if (!ip) {
             throw new Error('Unable to determine IP address');
         }
 
         res.status(200).json({ ip });
     } catch (error) {
         console.error('Error retrieving IP address:', error);
         res.status(500).json({ error: 'Internal Server Error' });
     } */
};

export default getIp