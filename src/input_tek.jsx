import { useState } from 'react';

function InputTeks() {
  const [teks, setTeks] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <section className="form-card">
      <h2>Input data</h2>

      <div className="field-group">
        <label htmlFor="nama">Nama</label>
        <input
          id="nama"
          type="text"
          value={teks}
          onChange={(e) => setTeks(e.target.value)}
          placeholder="Masukkan nama"
        />
      </div>

      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email"
        />
      </div>

      <div className="field-group">
        <label htmlFor="alamat">Alamat</label>
        <input
          id="alamat"
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan alamat"
        />
      </div>

      <div className="result-box">
        <h3>Hasil Inputan</h3>
        <p>Nama: {teks || '—'}</p>
        <p>Email: {email || '—'}</p>
        <p>Alamat: {alamat || '—'}</p>
      </div>
    </section>
  );
}

export default InputTeks;