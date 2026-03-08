import { useState } from 'react';
import { db } from './firebase'; // Your firebase config file
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        subscribedAt: serverTimestamp(),
      });
      setStatus('Success! You are subscribed.');
      setEmail('');
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubscribe}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
        required 
      />
      <button type="submit">Subscribe</button>
      {status && <p>{status}</p>}
    </form>
  );
}
