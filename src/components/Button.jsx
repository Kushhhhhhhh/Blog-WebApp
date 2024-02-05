/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Button ({  
  children,
  type='button',
  bgColor = 'bg-purple-600',
  textColor = 'text-white',
  className='',
  ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg hover:bg-purple-700 ${className} ${bgColor} ${textColor}`}{...props}>
      {children}
    </button>
  )
}