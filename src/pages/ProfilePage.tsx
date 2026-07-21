import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import AddressForm from '../components/AddressForm';

export default function ProfilePage() {
  const { profile, updateProfile, addresses, addAddress, editAddress, deleteAddress } = useUser();
  const [formProfile, setFormProfile] = useState(profile);
  const [isSaving, setIsSaving] = useState(false);
  
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      updateProfile(formProfile);
      setIsSaving(false);
    }, 500);
  };
  return (
    <div className="max-w-[1440px] mx-auto px-container-margin py-12 min-h-screen">
      <Helmet>
        <title>My Profile | KORZAE</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 shrink-0">
          <h1 className="font-display-lg text-[32px] text-primary mb-8 tracking-tighter">My Account</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/profile" className="font-label-caps text-label-caps text-primary border-b border-primary py-2 font-bold">
              PROFILE DETAILS
            </Link>
            <Link to="/orders" className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors py-2 border-b border-transparent">
              ORDER HISTORY
            </Link>
            <button className="font-label-caps text-label-caps text-secondary hover:text-error transition-colors py-2 border-b border-transparent text-left">
              LOG OUT
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="font-headline-lg-mobile text-primary mb-8">Profile Details</h2>
          
          <form className="flex flex-col gap-6" onSubmit={handleSave}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">FIRST NAME</label>
                <input 
                  value={formProfile.firstName} 
                  onChange={(e) => setFormProfile({...formProfile, firstName: e.target.value})} 
                  className="korzae-input" 
                  required
                />
              </div>
              <div>
                <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">LAST NAME</label>
                <input 
                  value={formProfile.lastName} 
                  onChange={(e) => setFormProfile({...formProfile, lastName: e.target.value})} 
                  className="korzae-input" 
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">EMAIL ADDRESS</label>
              <input 
                type="email" 
                value={formProfile.email} 
                onChange={(e) => setFormProfile({...formProfile, email: e.target.value})} 
                className="korzae-input" 
                required
              />
            </div>

            <div>
              <label className="block font-label-caps text-[10px] text-secondary tracking-widest mb-2">PHONE NUMBER (OPTIONAL)</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={formProfile.phone || ''} 
                onChange={(e) => setFormProfile({...formProfile, phone: e.target.value})} 
                className="korzae-input" 
              />
            </div>

            <button type="submit" disabled={isSaving} className="w-fit bg-primary text-on-primary px-8 py-4 font-button-text text-button-text uppercase tracking-widest mt-4 hover:bg-opacity-90 disabled:opacity-70">
              {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
            </button>
          </form>

          <div className="mt-16 border-t border-outline-variant pt-12">
            <h3 className="font-headline-lg-mobile text-primary mb-6">Saved Addresses</h3>
            {addresses.map((address) => (
              <div key={address.id} className="mb-4">
                {editingAddressId === address.id ? (
                  <AddressForm 
                    initialData={address} 
                    onSubmit={(updated) => { editAddress(address.id, updated); setEditingAddressId(null); }} 
                    onCancel={() => setEditingAddressId(null)} 
                  />
                ) : (
                  <div className="border border-outline-variant p-6 relative hover:border-primary transition-colors">
                    {address.isDefault && <span className="absolute top-4 right-4 bg-surface-container-high px-2 py-1 font-label-caps text-[9px] tracking-widest text-primary">DEFAULT</span>}
                    <p className="font-body-md font-bold text-primary mb-1">{address.firstName} {address.lastName}</p>
                    <p className="font-body-md text-secondary">{address.line1}{address.line2 && `, ${address.line2}`}</p>
                    <p className="font-body-md text-secondary">{address.city}, {address.state} {address.zip}</p>
                    
                    <div className="flex gap-6 mt-6">
                      <button onClick={() => setEditingAddressId(address.id)} className="font-label-caps text-[11px] text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1">EDIT</button>
                      <button onClick={() => deleteAddress(address.id)} className="font-label-caps text-[11px] text-error border-b border-error hover:opacity-70 transition-colors pb-1">DELETE</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isAddingAddress ? (
              <div className="mt-6">
                <AddressForm 
                  onSubmit={(address) => { addAddress(address); setIsAddingAddress(false); }} 
                  onCancel={() => setIsAddingAddress(false)} 
                />
              </div>
            ) : (
              <button 
                onClick={() => setIsAddingAddress(true)}
                className="mt-6 font-label-caps text-label-caps border border-primary px-6 py-4 hover:bg-primary hover:text-on-primary transition-colors tracking-widest w-full text-center"
              >
                + ADD NEW ADDRESS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
