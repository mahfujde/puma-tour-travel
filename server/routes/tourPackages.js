// Add this to your existing tourPackages.js file

// GET featured tour packages
router.get('/featured', async (req, res) => {
  try {
    const tours = await TourPackage.find({ 
      isFeatured: true, 
      isActive: true 
    }).populate('destination', 'name country')
      .limit(6);
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});