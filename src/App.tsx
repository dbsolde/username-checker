import React, { useState } from 'react';

function App() {

    const [status,setStatus] = useState('');

    // abc: unverified
    // aeihfnct: verified
    // abchfnct: verified

    const typeOfUsername = (inputString:string) => {
        const username:string = inputString.toLowerCase();
        if(username.length > 0) {
            if(username.length > 25) return setStatus('invalid')

            const vowels:string[] = ['a','e','i','o','u'];

            const numberOfVowels = username
                                    .split("")
                                    .filter((letter:string) => vowels.includes(letter)).length;

            const numberOfConsonants = username.length - numberOfVowels;

            const difference = numberOfVowels * numberOfConsonants;

            const isOdd = difference % 2;
            
            if(isOdd) return setStatus('verified');

            return setStatus('unverified');
        } else {
            setStatus('')
        }
    }

    return (
        <div className="App">
            <input 
                type="text" 
                placeholder="search..."
                onChange={(e) => typeOfUsername(e.target.value)}
            />
            {status?.length > 0 
                ? <span className={`${status === 'verified' ? 'success' : 'error'}`}>{status}</span> 
                : <span>Search for username</span>
            }
        </div>
    );
}

export default App;
