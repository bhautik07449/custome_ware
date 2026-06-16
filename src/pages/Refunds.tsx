import LegalPageLayout from '../components/layout/LegalPageLayout';

export default function Refunds() {
  return (
    <LegalPageLayout title="Refunds & Returns" lastUpdated="March 01, 2024">
      <h2>1. Custom Products</h2>
      <p>Because all of our apparel is custom-printed exactly to your specifications, we cannot accept returns or offer refunds for issues related to sizing, buyer's remorse, or customer errors in the design process (such as typos or low-resolution images).</p>
      
      <h2>2. Defective or Damaged Items</h2>
      <p>If you receive an item that is defective, damaged during transit, or has a significant print error that differs from your approved design, please contact us within 14 days of receiving your order.</p>

      <h2>3. The Refund Process</h2>
      <p>To start a claim for a defective item, please email our support team with your order number and clear photos of the issue. If approved, we will either issue a free replacement or provide a full refund to your original payment method.</p>

      <h2>4. Cancellations</h2>
      <p>Orders can only be cancelled or modified within 2 hours of placement. Once an order enters the fulfillment process, it cannot be stopped.</p>
    </LegalPageLayout>
  );
}
