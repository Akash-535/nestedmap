import React from 'react'

const Footer = () => {
  const year = new Date() .getFullYear()
  return (
    <div>
      <p>Copyright©{year} (Logo) All Rights Reserved.</p>
    </div>
  )
}
export default Footer
