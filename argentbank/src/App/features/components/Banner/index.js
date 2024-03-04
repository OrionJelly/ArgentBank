

import './style.css'

export const Banner =
    ({
        p_1,
        p_2,
        p_3,
        text



    }) => {

    return (
        <section className='hero'>
        <div className="hero-content">
            <p className='subtitle'>{p_1}</p>
            <p className='subtitle'>{p_2}</p>
            <p className='subtitle'>{p_3}</p>
            <p className='text'>{text}</p>
        </div>
        </section>
    )
}