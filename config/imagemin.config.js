module.exports = {
  disable: process.env.NODE_ENV !== 'production',
  gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
  mozjpeg: { progressive: true, quality: '50-70' },
  pngquant: { quality: '50-70' },
  svgo: {
    plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
  },
  webp: { quality: '50-70' },
};
