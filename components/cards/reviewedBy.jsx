import React from 'react'

function ReviewedBy() {
  return (
    <div className="flex flex-col items-center mt-12 w-full max-w-2xl">
      <h3 className="text-xl font-semibold text-white mb-6">Reviewed by</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="   transition-all duration-300 hover:scale-105">
          <img src="rating-clutch.webp" alt="Clutch Rating" className="w-34 h-auto object-contain" />
        </div>
        <div className="   transition-all duration-300 hover:scale-105">
          <img src="rating-goodfirms.webp" alt="GoodFirms Rating" className="w-34 h-auto object-contain" />
        </div>
        <div className="   transition-all duration-300 hover:scale-105">
          <img src="rating-trustpilot.webp" alt="Trustpilot Rating" className="w-34 h-auto object-contain" />
        </div>
      </div>
    </div>
  )
}

export default ReviewedBy