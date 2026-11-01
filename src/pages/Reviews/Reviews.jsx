import s from './Reviews.module.scss'

const reviews = [
    {
        rating: 5,
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        rating: 5,
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        rating: 5,
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        rating: 4,
        name: "Samantha D.",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
    },
    {
        rating: 4,
        name: "Alex M.",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
    },
    {
        rating: 3,
        name: "Ethan R.",
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
    },
    {
        rating: 4,
        name: "Olivia P.",
        text: "I've been searching for the perfect t-shirt, and this one exceeded all my expectations. The quality is outstanding, and the design is both modern and timeless. As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
    },
    {
        rating: 4,
        name: "Liam K.",
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
    },
    {
        rating: 4,
        name: "Ava H.",
        text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
    },
]

    export default function Reviews({ showAll = false }) {
    const displayedReviews = showAll
        ? reviews.slice(3)
        : reviews.slice(0, 3);
    
    return (
        <section className={s.reviews}>

            <div className={`${s.cards} container ${showAll ? s.allCards : ''}`}>
                {displayedReviews.map((review, index) => (
                <div className={s.card} key={index}>
                    <div className={s.rating}>
                        {"★".repeat(review.rating)}
                    </div>
                    <h4>{review.name}<span>✓</span></h4>
                    <p>{review.text}</p>

                </div>
            ))}
            </div>
        </section>
    )
}