const GeneralDetails = ({ selectedNft }) => {
    return (
      <div className={style.wrapper}>
        <div className={style.infoContainer}>
          <div className={style.accent}>Bored Ape Yacht Club</div>
          <div className={style.nftTitle}>{selectedNft?.name}</div>
          <div className={style.otherInfo}>
            <div className={style.ownedBy}>
              Owned by <span className={style.accent}>e88vault</span>
            </div>
            <div className={style.likes}>
              <AiFillHeart className={style.likeIcon} /> 2.3K favorites
            </div>
          </div>
        </div>
        <div className={style.actionButtonsContainer}>
          <div className={style.actionButtons}>
            <div className={`${style.actionButton} ml-2`}>
              <MdRefresh />
            </div>
            <div className={style.divider} />
            <div className={style.actionButton}>
              <RiShareBoxLine />
            </div>
            <div className={style.divider} />
            <div className={style.actionButton}>
              <GiShare />
            </div>
            <div className={style.divider} />
            <div className={`${style.actionButton} mr-2`}>
              <FiMoreVertical />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default GeneralDetails