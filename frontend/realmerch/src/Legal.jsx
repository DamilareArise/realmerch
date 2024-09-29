// import React from 'react'

const Legal = () => {
  return (
    <div className="p-8 font-sans">
     
      <h1 className="text-4xl font-bold mb-8">LEGAL</h1>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          Welcome to [Website Name]. By using our website and services, you agree to comply with the following terms and conditions. Please read them carefully before making any purchase or using our platform.
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>General Terms</strong> <br />
            By accessing our site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our site.
          </li>
          <li>
            <strong>Use of Website</strong> <br />
            Our website is available for personal, non-commercial use only. You agree to use the site lawfully and refrain from any activities that violate the rights of others or the site&apos;s security.
          </li>
          <li>
            <strong>Account Registration</strong> <br />
            Users may be required to create an account to make purchases. You are responsible for maintaining the confidentiality of your login credentials.
          </li>
          <li>
            <strong>Products and Pricing</strong> <br />
            We strive to ensure that all product descriptions and prices are accurate, but errors may occur. In the event of a pricing error, we will notify you and give you the option to cancel or reconfirm your order.
          </li>
         
        </ol>
      </section>

      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At [Website Name], we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or make a purchase.
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Information We Collect</strong> <br />
            We collect personal information, such as your name, email address, shipping address, and payment details when you create an account or place an order.
          </li>
          <li>
            <strong>How We Use Your Information</strong> <br />
            The information we collect is used to process orders, improve the website, and communicate with you about offers and services.
          </li>
          <li>
            <strong>Cookies</strong> <br />
            We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
          </li>
          <li>
            <strong>Sharing Your Information</strong> <br />
            We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners for payment processing, shipping, or marketing purposes.
          </li>
         
        </ol>
      </section>
    </div>
  )
}

export default Legal