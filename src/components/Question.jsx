import React, { Component } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
        };
    }
    render() {
        const { info, title } = this.props.question;

        return (
            <section className='info'>
                <article className='question'>
                    <header>
                        <h4>{title}</h4>
                        <button
                            onClick={() =>
                                this.setState({
                                    showAnswer: !this.state.showAnswer,
                                })
                            }
                            className='btn'
                        >
                            {this.state.showAnswer ? (
                                <AiOutlineMinus />
                            ) : (
                                <AiOutlinePlus />
                            )}
                        </button>
                    </header>
                    <p>{this.state.showAnswer && info}</p>
                </article>
            </section>
        );
    }
}

export default Question;
