import './style.css'

export const Feature =
    ({
        imageSrc,
        imageAlt,
        title,
        content
    }) => {

    return (
        <div className='feature-item'>
                <img
                className='feature-icon'
                src={imageSrc}
                alt={imageAlt}
                />
                <h3 className='feature-item-title'>{title}</h3>
                <p>{content}</p>
        </div>
    )
}