import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function Privacy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="February 10, 2024">
      <h2>1. Information We Collect</h2>
      <p>We collect information that you provide directly to us, including your name, email address, postal address, phone number, and payment information when you make a purchase.</p>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Process your transactions and deliver custom apparel.</li>
        <li>Send you technical notices, updates, and support messages.</li>
        <li>Respond to your comments, questions, and customer service requests.</li>
        <li>Communicate with you about products, services, and offers.</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not share your personal information with third parties except as necessary to fulfill your order (e.g., sharing your address with our shipping partners) or when required by law.</p>

      <h2>4. Data Security</h2>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.</p>

      <h2>5. Your Choices</h2>
      <p>You may update, correct, or delete your account information at any time by logging into your online account. You may also opt out of receiving promotional communications from us by following the instructions in those communications.</p>
    </LegalPageLayout>
  );
}
