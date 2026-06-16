import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function Shipping() {
  return (
    <LegalPageLayout title="Shipping Policy" lastUpdated="March 01, 2024">
      <h2>1. Processing Times</h2>
      <p>Custom orders require specialized attention. Most custom apparel orders are printed, packed, and ready to ship within 3-5 business days after order confirmation.</p>
      
      <h2>2. Shipping Methods and Delivery Times</h2>
      <p>We offer the following shipping options:</p>
      <ul>
        <li><strong>Standard Shipping:</strong> 5-7 business days</li>
        <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
        <li><strong>International Shipping:</strong> 10-15 business days (customs clearance may add delays)</li>
      </ul>

      <h2>3. Tracking Your Order</h2>
      <p>Once your order ships, you will receive a shipping confirmation email containing your tracking number. You can also track your order status directly from your Dashboard.</p>

      <h2>4. Lost or Damaged Packages</h2>
      <p>If your package is lost in transit or arrives damaged, please contact our support team within 7 days of the estimated delivery date so we can assist you with a replacement or claim.</p>
    </LegalPageLayout>
  );
}
