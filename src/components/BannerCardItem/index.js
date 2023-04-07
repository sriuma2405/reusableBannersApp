import './index.css'

const BannerCardsItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardsItem
