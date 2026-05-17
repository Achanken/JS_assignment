const notFoundHandler = (req, res) => {
  res.status(404).json({ status: 'fail', message: 'Route not found' });
};

export default notFoundHandler;
