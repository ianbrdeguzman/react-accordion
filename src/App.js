import React from 'react';
import Question from './components/Question';
import { data } from './components/data.js';

function App() {
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                {data.map((question) => {
                    return <Question question={question} key={question.id} />;
                })}
            </div>
        </main>
    );
}

export default App;
