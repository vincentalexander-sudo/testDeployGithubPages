import React, {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Penambahan Angka</h2>
            <div>
                <h2>Penambahan ke: {count}</h2>
                <button onClick={() => setCount(count + 10)}>Tambah 1 lagi</button>
            </div>
        </div>
    )
}

export default App;