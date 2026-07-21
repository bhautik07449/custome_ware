import React, { useState } from 'react';
import type { Address } from '../context/UserContext';

interface AddressFormProps {
  initialData?: Address | null;
  onSubmit: (address: Address) => void;
  onCancel: () => void;
}

export default function AddressForm({ initialData, onSubmit, onCancel }: AddressFormProps) {
  const [formData, setFormData] = useState<Partial<Address>>(
    initialData || {
      firstName: '',
      lastName: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      isDefault: false,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.line1 ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      return;
    }
    
    onSubmit({
      id: formData.id || `addr-${Math.random().toString(36).substr(2, 9)}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      line1: formData.line1,
      line2: formData.line2 || '',
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      isDefault: formData.isDefault,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-surface-container-lowest p-6 border border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">FIRST NAME</label>
          <input
            required
            value={formData.firstName || ''}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="korzae-input"
          />
        </div>
        <div>
          <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">LAST NAME</label>
          <input
            required
            value={formData.lastName || ''}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="korzae-input"
          />
        </div>
      </div>
      
      <div>
        <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">ADDRESS LINE 1</label>
        <input
          required
          value={formData.line1 || ''}
          onChange={(e) => setFormData({ ...formData, line1: e.target.value })}
          className="korzae-input"
        />
      </div>
      
      <div>
        <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">ADDRESS LINE 2 (OPTIONAL)</label>
        <input
          value={formData.line2 || ''}
          onChange={(e) => setFormData({ ...formData, line2: e.target.value })}
          className="korzae-input"
          placeholder="Apartment, suite, etc."
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">CITY</label>
          <input
            required
            value={formData.city || ''}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="korzae-input"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">STATE</label>
            <input
              required
              value={formData.state || ''}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="korzae-input"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">ZIP</label>
            <input
              required
              value={formData.zip || ''}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className="korzae-input"
            />
          </div>
        </div>
      </div>
      
      <label className="flex items-center gap-3 cursor-pointer mt-2">
        <input
          type="checkbox"
          checked={formData.isDefault || false}
          onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
          className="accent-primary w-4 h-4"
        />
        <span className="font-label-caps text-[11px] tracking-widest text-secondary">SET AS DEFAULT ADDRESS</span>
      </label>
      
      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-1/2 border border-outline-variant py-4 font-label-caps text-label-caps text-secondary tracking-widest hover:border-primary hover:text-primary transition-colors"
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="w-1/2 bg-primary text-on-primary py-4 font-button-text text-button-text uppercase tracking-widest hover:bg-opacity-90 transition-colors"
        >
          SAVE ADDRESS
        </button>
      </div>
    </form>
  );
}
